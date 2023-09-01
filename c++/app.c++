#include<iostream>
using namespace::std;
struct node{
    int data;
    node*left;
    node*right;
};
node*root = NULL;
node* insert(node*root,int data){
    if(root==NULL){
    node*temp = new node;
    temp->data = data;
    temp->left=NULL;
    temp->right=NULL;
        return temp;
    }
    if(data>root->data){
       root->right =  insert(root->right,data);
    }else{
       root->left = insert(root->left,data);
    }
    return root;
}
void printTree(node*head){
if(head!=NULL){
    printTree(head->left);
cout<<head->data<<" ";
printTree(head->right);
}
}

int main(){
    root = insert(root,7);
    insert(root,8);
    insert(root,1);
    insert(root,3);
    insert(root,11);
    insert(root,12);
    insert(root,13);
    printTree(root);
    return 0;
}