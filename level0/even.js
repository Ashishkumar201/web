// write a program to print all the even number in the array
let arr=[1,4,3,6,7,8,2]
const n=arr.length;
for(let i=0;i<n;i++)
    {
        if(arr[i]%2==0)
        {
            console.log(arr[i]);
        }
    }