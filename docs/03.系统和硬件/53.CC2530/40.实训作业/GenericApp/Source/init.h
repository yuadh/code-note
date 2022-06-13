#ifndef _INIT_H_
#define _INIT_H_

#define D3  P1_0
#define D4  P1_1
#define D5  P1_3
#define D6  P1_4
#define SW1 P1_2
#define SW2 P0_1

void led_check();
void init_port();
void init_btn(int sta);//中断 sw1、sw2
void Delay(unsigned int t);
void Init_WDT(int sta);
void Feed_DOG();
void Init_32MClock();
void Init_16MClock();
void Init_Uart0();
void Init_Timer1();
void init1s_WDT();
void init_ADC();


#endif