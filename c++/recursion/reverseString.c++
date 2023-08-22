#include<iostream>
#include<string>
using namespace::std;
void reverstring(int a,int b,string &str){
if(a>=b)
{
    return;
}
else{
    int temp = str[a];
    str[a] = str[b];
    str[b]= temp;
    return reverstring(++a,--b,str);
}
}
int main(){
    string str="aabbncde";
    reverstring(0,7,str);
    cout<<str<<endl;
    return 0;
}