let arr=[1,2,3,4,5,6,7,8,9]
const n=arr.length
for(i=0;i<n/2;i++)
{
    temp=arr[i]
    arr[i]=arr[n-1-i]
    arr[n-1-i]=temp;
    
}
console.log(arr)