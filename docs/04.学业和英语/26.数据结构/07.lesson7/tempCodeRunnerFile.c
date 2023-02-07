#include <stdio.h>
#include <string.h>

int StrEach[100];
int loadStrA(char *str,int len){
  StrEach[0] = 0;//
  int i=0,j=0;
  for(j = 1;j < len;j++){
    while(str[i]!=str[j]&&i>0){
      i = StrEach[i-1];
    }
    if(str[i]==str[j]){
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
