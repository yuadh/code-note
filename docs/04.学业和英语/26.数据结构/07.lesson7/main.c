#include <stdio.h>
#include <string.h>

int StrEach[100];
int loadStrA(char *str,int len){
  StrEach[0] = 0;//
  int i=0,j=0;//i 代表串的前缀后缀最大公共长度 j代表每个子串
  for(j = 1;j < len;j++){
    while(str[i]!=str[j]&&i>0){//不符合时该子串公共长度
      i = StrEach[i-1];
    }
    if(str[i]==str[j]){//符合前缀后缀的公共串+1
      i++;
      StrEach[j] = i;
    }else{
      StrEach[j]=0;
    }
  }
}
int getStrLen(char *str){
  int i = 0;
  while(str[i++]);
  return i-1;
}

int main(){
  char *str="abcdabd";
  int len = getStrLen(str);
  loadStrA(str,len);
  for(int i =0;i<len;i++){
    printf("%d ",StrEach[i]);
  }
}
