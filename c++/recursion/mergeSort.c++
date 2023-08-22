#include<iostream>
using namespace::std;
int mycount=0;
void merge(int arr[],int s,int e,int mid){
int len1=mid-s+1;
int len2 = e-mid;
int arr1[len1];
int arr2[len2];

int fill=0;
for(int i=s;i<=mid;i++){
arr1[fill] = arr[i];
fill++;
}

fill=0;
for(int i=mid+1;i<=e;i++){
arr2[fill] = arr[i];
fill++;
}

int m=0,n=0,index=s;
while(m<len1 && n<len2){
if(arr1[m]>arr2[n]){
    arr[index]=arr2[n];
    n++;
    index++;
}else{
arr[index]=arr1[m];
    m++;
    index++;
}
}
while(m<len1){
arr[index]=arr1[m];
    m++;
    index++;
}
while(n<len2){
    arr[index]=arr2[n];
    n++;
    index++;
}

}
void mergeSort(int arr[],int s,int e){
    if(s>=e){
        return;
    }
    else{
        int mid=(s+e)/2;
        mergeSort(arr,s,mid);
        mergeSort(arr,mid+1,e);
        merge(arr,s,e,mid);
    }
    

}
int main(){
    int arr[] = {298,374,245,7,6,67523,480,1231,2894,23857,4,86,53,46,278,1,731,89,37,18,173};
    int len = sizeof(arr)/sizeof(arr[0]);
    
    mergeSort(arr,0,len-1);
    for(int i=0;i<len;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    cout<<len<<" "<<mycount<<endl;
    return 0;
}