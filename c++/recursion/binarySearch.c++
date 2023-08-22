#include<iostream>
using namespace::std;
int binarySearch(int arr[],int num,int s,int e){
    cout<<s<<" "<<e<<endl;
    if(s>=e){
        return -1;
    }
    int mid=(s+e)/2;
    if(arr[mid]==num){
        return mid;
    }
    else{
        if(arr[mid]>num){
       return binarySearch(arr,num,s,mid-1);
    }else{
        return binarySearch(arr,num,mid+1,e);
    }
    }
}
int main(){
    int arr[] = {12,32,53,86,91,102,462,917,8917};
    int num=462;
    int ans = binarySearch(arr,num,0,8);
    cout<<ans<<endl;
    return 0;
}