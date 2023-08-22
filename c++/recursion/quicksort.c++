#include<iostream>
using namespace::std;

int indexOF(int arr[],int s,int e,int num){
    int count=0;
    for(int i=s;i<=e;i++){
        if(arr[i]<num){
            count++;
        }
    }
    return s+count;
}

void quicksort(int arr[],int s,int e){
    if(s>=e){
        return;
    }
    int pivot = indexOF(arr,s,e,arr[s]);
    int temp = arr[s];
    arr[s] = arr[pivot];
    arr[pivot] = temp;
    for(int i=s;i<=e;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    quicksort(arr,s,pivot-1);
    quicksort(arr,pivot+1,e);
}

int main(){
    int arr[] = {2,1,5,9,8,3};
    quicksort(arr,0,(sizeof(arr)/sizeof(arr[0]))-1);
    
    cout<<"**********************************************"<<endl;
    for(int i=0;i<=(sizeof(arr)/sizeof(arr[0]))-1;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    return 0;
}