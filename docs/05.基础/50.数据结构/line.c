#include <stdio.h>
#include <stdlib.h>//malloc()������ͷ�ļ�
//���� �ǵ�ȥ��C���Ե�*ָ��*�ͽṹ��Ȳ���  

/* ======================================
    InitList(*L): ��ʼ������������һ���յ����Ա�L
    ListEmpty(L): �ж����Ա��Ƿ�Ϊ�գ������Ա�Ϊ�վͷ���true�����򷵻�false
    ClearList(*L): �����Ա����
    GetElem(L,i,*e): �����Ա�L�еĵ� i ��λ��Ԫ�ط��ظ�e
    LocateElem(L,e): �����Ա�L�в��������ֵe��ȵ�Ԫ�أ�������ҳɹ������ظ�Ԫ���ڱ������кű�ʾ�ɹ������򣬷���0��ʾʧ��
    ListInert(*L,i,e): �����Ա�L�е� i ��λ�ò�����Ԫ��
    ListDelete(*L,i,*e):ɾ�����Ա�L�е� i ��λ��Ԫ�أ����� e ������ֵ
    ListLength(L):�������Ա�L��Ԫ�ظ���
=============================================*/

// ���Ա��Ϊ˳��洢����ʽ�洢
// ����ʹ����ʽ�洢
// �Զ�����һ���ṹ��node����һ��������ΪListNode
typedef struct node{
    int data;
    struct node * next;
}ListNode;
// ʹ��LinkList��ָ��ڵ��ַ Ϊ�˲�������ķ�����������ֱ���޸���ֵ ������ֵ���� �����Ϳ�C����ָ�벿��
typedef ListNode * LinkList;
//��������
void InitList(LinkList *L);

int main(){
    LinkList head;//�����ͷ--��������￪ʼ
    LinkList node;//��ǰ�ڵ�
    InitList(&head);
    head->data=1;
    printf("%d",head->data);
    return 0;
}

//InitList(*L) ��ʼ��һ����������������ĳ�ʼ���������岻��
void InitList(LinkList *head){
    *head = malloc(sizeof(LinkList));
}
//void ListEmpy(L) �ж����Ա��Ƿ�Ϊ�ա������������������������ʹ��
void ListEmpty(LinkList head){

}
//ListLength(L):�������Ա�L��Ԫ�ظ��� 
int  ListLength(L){
    int len=0;
    if(){

    }
}