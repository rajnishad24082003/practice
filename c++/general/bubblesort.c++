#include<iostream>
using namespace::std;
int main(){
    int arr[] = {298,374,245,7,6,67523,480,1231,2894,23857,4,86,53,46,278,1,731,89,37,18,173};
    int len = sizeof(arr)/sizeof(arr[0]);
    int count=0;
    for(int j=0;j<len-1;j++){
        for(int i=0;i<len-1-j;i++){
        if(arr[i]>arr[i+1]){
            int temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        count++;
    }
    }
    for(int i=0;i<len;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    cout<<len<<" "<<count<<endl;
    return 0;
}