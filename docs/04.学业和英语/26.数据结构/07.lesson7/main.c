#include <stdio.h>
#include <string.h>

int maxLen(char *str,int len){
  int ans = 0;
  for(int i=0;i<len-1;i++){
    // printf("%c",str[i]);
    int tmp_i = i;
    for(int j=i+1;j<len;j++){
      int count  = 0;
      int tmp_j = j;
      while(tmp_i<len&&tmp_j<len&&str[tmp_i]==str[tmp_j]){
        count++;
        if(tmp_j==len){
          ans = count>ans?count:ans;
        }
        tmp_i++;
        tmp_j++;
      }
    }
  }
  return ans;
}
int getStrLen(char *str){
  int i = 0;
  while(str[i++]);
  return i-1;
}

int main(){
  char *str="yuandehua";
  printf("%s",str);
  int len = getStrLen(str);
  printf("%d",maxLen(str,len));
}
