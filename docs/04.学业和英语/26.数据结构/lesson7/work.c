#include <stdio.h>

int getStrLen(char *str){
  int i = 0;
  while(str[i++]);
  return i-1;
}
// BFģʽ��ƥ���㷨
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
  //��������DNA����
  char *Persons[]={
    "poiuytrewq",
    "lkjsaassaa",
    "mnbvcxzzzz",
    "yuansaasde"
  };
  //���ⲡ��DNAģʽ�� "saas" 
  //�����ⲡ��DNA�����ǻ�״��,����Ϊ2m����
  char Virus[]="saassaas";
  for(int i=0;i<4;i++){//��������ѭ��
    char *tmp = Persons[i];//��ǰ����,ĳ�˵�DNA
    for(int j=0;j<=4;j++){//��ò����������ÿ������DNA����,���μ��
     for(int z=0;z<=4;z++){
       char Vtmp[5];
       int flag = 0;
       Vtmp[z] = Virus[j+z];
      //  printf("xxx");
       flag = Index_BF(tmp,Vtmp,0);
       if(flag!=-1){
         printf("��ţ�%d��Ⱦ����--DNAƥ��λ��:%d\n",i+1,flag);
         break;
       }
     }
    }
  }
}