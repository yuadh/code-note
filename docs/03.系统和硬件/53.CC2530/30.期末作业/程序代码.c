/***********************************************************************************
* INCLUDES
*/
#define _CRT_SECURE_NO_DEPRECATE
#include <hal_lcd.h>
#include <hal_led.h>
#include <hal_joystick.h>
#include <hal_assert.h>
#include <hal_board.h>
#include <hal_int.h>
#include "hal_mcu.h"
#include "hal_button.h"
#include "hal_rf.h"
#include "util_lcd.h"
#include "basic_rf.h"
#include "init.h"
#include "string.h"
#include "stdlib.h"
#include "stdio.h"
#include "ioCC2530.h"


// Application parameters
// 学号9根据题意设置RF_CHANNEL为19
#define RF_CHANNEL                19      // 2.4 GHz RF channel
// BasicRF address definitions
#define PAN_ID                0x2007
#define MY_ADDR           0x2520
#define SEND_ADDR            0xBEEF
//#define SEND_ADDR           0x2520
//#define MY_ADDR            0xBEEF
#define APP_PAYLOAD_LENGTH        256 //无线发送数据的长度

basicRfCfg_t basicRFConfig;
uint8 uRxBuf[APP_PAYLOAD_LENGTH]; //临时缓冲区
uint8 pTxdata[APP_PAYLOAD_LENGTH];//无线发送数据缓冲区
uint8 pRxdata[APP_PAYLOAD_LENGTH];//无线接收数据缓冲区
uint8 tempStr[256];


// my_var_define
// 临时接收数据 - 开始接受标志位 - 接收模拟的时间 -
unsigned char temp=0,uRX_flag = 0,uRX_Times=0;
// 缓冲区有效数据个数 - 未录入的串口长度 - 发送数组长度 - 辅助长度
unsigned int  uRxcnt=0,ur_len=0,pTxdata_len=0,count=0,i=0;
// adc获取到的值
unsigned int lightadc_value;
unsigned int tempadc_value;
// 转换后的光照值电压
float adc_volt=0.0;
// 转换后的温度值
float temper=0.0;
void init_ConfigRF()//无线参数配置函数
{
  basicRFConfig.myAddr=MY_ADDR;
  basicRFConfig.panId=PAN_ID;
  basicRFConfig.channel=RF_CHANNEL;
  basicRFConfig.ackRequest=TRUE;
  basicRfReceiveOn();
}
//===========定时器初始化函数============//
 void init_T1()
{
  T1STAT=0x00;  //清除标志位
  T1CCTL0 |=0x04;     //0000 0100 通道0，输出比较
                      //模模式定时，需开启通道 0 的比较模式，否则无法进入中断
  T1CC0L= 250%256;  // 设置计数值高八位比较值 定时器1周期为0.2秒
  T1CC0H= 250/256;  // 设置计数值低八位比较值 定时器1周期为0.2秒
  T1CTL =0x0c;       //0000 1110 模模式，128分频（一旦设置为模模式定时器就启动

  T1IE =1;  //使能定时器中断
  EA =1;   //使能总中断
}
//==========获取ADC值函数================//
void get_lightADC_value()
{
  //2-启动一个单次转换，参考电压3.3V，抽取率512，通道0。
  ADCCON3=0xb0;  //1011 0000
  //3】等待A/D转换完成。
  //while((ADCCON1&0x80) !==0x80);    //1000 0000
  while(!(ADCCON1&0x80));    //1000 0000
   lightadc_value = ADCH;
   lightadc_value = lightadc_value<<8 | ADCL;//读取AD转换数据
   lightadc_value = lightadc_value>>5;//抽取率为10位
}
void get_tempADC_value()
{

    //2-启动一个单次转换，片内参考电压1.25，抽取率512，测试片内温度传感器。
      ADCCON3 =0x3E; //0011 1110
   //3-等待A/D转换完成。
      while((ADCCON1&0x80) !=0x80);//等待ADC转换完成
   //4-获取采集数据及数据转换。
      tempadc_value=ADCH;
      tempadc_value=tempadc_value<<8 | ADCL;
      tempadc_value=tempadc_value >>2;//最后两位为无效数字
}
//获取字符长度
int get_length(char str[])
{
	char *p = str;
	int count = 0;
	while (*p++ != '\0')
	{
		count++;
	}
	return count;
}
//过程：串口助手发送数据,程序接收到数据后,将数据无线发送给接收端
void Uart0_SendByte(unsigned char a)
{
  U0DBUF =a;   //把要发送的数据a装入U0DBUF
  while(!UTX0IF);//查询等待发送完成
  UTX0IF =0; //标志位清零，为下次发送做准备
}
void Uart0_SendString(unsigned char *string)
{
  while(*string !='\0')
  {
    Uart0_SendByte(*string++);
  }
}

void main()
{
  //官方配置
  halBoardInit();
  halRfInit();
  init_ConfigRF();
  basicRfInit(&basicRFConfig);
  //my_init
  init_port();//初始化自己的端口
  led_check();//检查灯
  init_T1();//定时器T1初始化
  Init_Uart0();//初始化串行口0
  Uart0_SendString("hello world \r\n");//串口测试
  init1s_WDT();//初始化看门狗
  init_ADC();//初始化ADC
  TR0=0X01;//连接温度传感器到SOC_ADC
  ATEST=0X01;//使能温度传感器
  //实现代码
  while(1)
  {
    //发送端代码部分
    while(!WDTIF);//查询看门狗定时时间1S是否到
    WDTIF=0;
    get_lightADC_value();//获取光照adc值
    get_tempADC_value(); //获取温度adc值
    adc_volt=lightadc_value*3.3/4095;//4-获取采集数据及数据转换。采集到的数据转化为电压值
    temper=tempadc_value*0.06229-303.3-35;
    adc_volt*=100;//因为不能拼接浮点型...
    sprintf((char *)pTxdata,"采样结果:光照电压值为:0.%dV 温度值为%dC",(int)adc_volt,(int)temper);
    pTxdata_len = get_length((char *)pTxdata);
    if(pTxdata_len>0){
       basicRfSendPacket(SEND_ADDR, pTxdata,pTxdata_len);//无线数据发送
       D6=~D6;//用灯D5亮灭来显示正在采集发送
       memset(pTxdata,0,sizeof(pTxdata));//清空数据待发送数据包
       pTxdata_len = 0;
    }
      //接收端代码部分
//    if(basicRfPacketIsReady())//判断是否收到新的数据包
//    {
//      D5=~D5;//接收到数据包提示
//      basicRfReceive(pRxdata, 128, NULL); //无线数据接收
//      Uart0_SendString(pRxdata);
//      Uart0_SendString("\r\n");
//    }
  }
}