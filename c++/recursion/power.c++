#include<iostream>
using namespace::std;
int mycount=0;
long long pow(int a,int b){
    mycount++;
    if(b){
        return a*pow(a,--b);
    }
    return 1;
}
long long powOptimised(int a,int b){
    mycount++;
   if(b>0){
    long long ans = powOptimised(a,b/2);
    if(b%2==0){
        return ans*ans;
    }else{
        return a*ans*ans;
    }
   }else{
    return 1;
   }
}

int main(){
    long long num = powOptimised(5,20);
    cout<<num<<endl;
    cout<<mycount<<endl;
    return 0;
}