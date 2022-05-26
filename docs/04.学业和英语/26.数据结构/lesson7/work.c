#include <stdio.h>

int getStrLen(char *str){
  int i = 0;
  while(str[i++]);
  return i-1;
}
// BF模式串匹配算法
int Index_BF(char *s,char *t,int pos){
  int i=pos,j=0;
  while(i<getStrLen(s)&&j<getStrLen(t)){
    if(s[i]==t[j]){
      ++i;++j;
    }else{
      i = i-j+1;
      j = 0;
    }
  }
  if(j==getStrLen(t)){
     return i-getStrLen(t);
   }else {
     return -1;
   }
}
int main(){
  //待测人数DNA主串
  char *Persons[]={
    "poiuytrewq",
    "lkjsaassaa",
    "mnbvcxzzzz",
    "yuansaasde"
  };
  //待测病毒DNA模式串 "saas" 
  //据题意病毒DNA序列是环状的,扩大为2m长度
  char Virus[]="saassaas";
  for(int i=0;i<4;i++){//待测人数循环
    char *tmp = Persons[i];//当前待测,某人的DNA
    for(int j=0;j<=4;j++){//获得病毒可以组成每个环的DNA序列,依次检测
     for(int z=0;z<=4;z++){
       char Vtmp[5];
       int flag = 0;
       Vtmp[z] = Virus[j+z];
      //  printf("xxx");
       flag = Index_BF(tmp,Vtmp,0);
       if(flag!=-1){
         printf("序号：%d感染病毒--DNA匹配位置:%d\n",i+1,flag);
         break;
       }
     }
    }
  }
}