#include <stdio.h>
#include <stdlib.h>//malloc()函数的头文件
//邱兄 记得去看C语言的*指针*和结构体等部分  

/* ======================================
    InitList(*L): 初始化操作，建立一个空的线性表L
    ListEmpty(L): 判断线性表是否为空，若线性表为空就返回true，否则返回false
    ClearList(*L): 将线性表清空
    GetElem(L,i,*e): 将线性表L中的第 i 个位置元素返回给e
    LocateElem(L,e): 在线性表L中查找与给定值e相等的元素，如果查找成功，返回该元素在表中序列号表示成功；否则，返回0表示失败
    ListInert(*L,i,e): 在线性表L中第 i 个位置插入新元素
    ListDelete(*L,i,*e):删除线性表L中第 i 个位置元素，并用 e 返回其值
    ListLength(L):返回线性表L的元素个数
=============================================*/

// 线性表分为顺序存储和链式存储
// 这里使用链式存储
// 自定义了一个结构体node创建一个变量名为ListNode
typedef struct node{
    int data;
    struct node * next;
}ListNode;
// 使用LinkList来指向节点地址 为了操作链表的方法函数可以直接修改其值 而不是值传递 不懂就看C语言指针部分
typedef ListNode * LinkList;
//函数声明
void InitList(LinkList *L);

int main(){
    LinkList head;//链表表头--链表从这里开始
    LinkList node;//当前节点
    InitList(&head);
    head->data=1;
    printf("%d",head->data);
    return 0;
}

//InitList(*L) 初始化一个链表。。这里链表的初始化好像意义不大
void InitList(LinkList *head){
    *head = malloc(sizeof(LinkList));
}
//void ListEmpy(L) 判断线性表是否为空。。配合其它操作链表函数方法使用
void ListEmpty(LinkList head){

}
//ListLength(L):返回线性表L的元素个数 
int  ListLength(L){
    int len=0;
    if(){

    }
}