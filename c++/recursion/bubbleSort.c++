#include<iostream>
using namespace::std;
int mycount=0;
void bubbleSort(int arr[],int s,int e){
    if(s==e){
        return;
    }
for(int i=s;i<e;i++){
    if(arr[i]>arr[i+1]){
        int temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] =temp;
    }
    mycount++;
}
bubbleSort(arr,s,--e);
}
int main(){
    int arr[] = {298,374,245,7,6,67523,480,1231,2894,23857,4,86,53,46,278,1,731,89,37,18,173};
    int len = sizeof(arr)/sizeof(arr[0]);
    
    bubbleSort(arr,0,len-1);
    for(int i=0;i<len;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    cout<<mycount<<endl;
    return 0;
} 