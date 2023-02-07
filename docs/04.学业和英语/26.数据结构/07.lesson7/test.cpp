#include<iostream>
#include<string.h>
using namespace std ;
 
int next[100];
 
void getNext( char p[] )     {
    int len = strlen(p) ;
    next[0] = 0 ;
    int i = 0 , j = 0 ;
    for(j = 1 ; j < len ; j++) {                // i 代表最长前缀后缀长度
        while( p[i] != p[j] && i > 0  )          // 当p[i] != p[j] 时，减小最长前缀后缀长度
            i = next[i-1] ;
        if(p[i] == p[j])    {
            i++ ;                               //最长公共前缀后缀长度+1
            next[j] = i ;                       //匹配失败时跳到该处
        }
        else
            next[j] = 0 ;
    }
}
int main()  {
    char p[100] ;
    cin >> p ;
    int len = strlen(p) ;
    getNext(p);
    for(int i = 0 ; i < len ; i++)
        cout << next[i] << " ";
    cout << endl ;
    return 0 ;
}