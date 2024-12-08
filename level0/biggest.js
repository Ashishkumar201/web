

let arr=[1,3,5,3,2,63,8]
// console.log(arr)
let n=arr.length
let ans=arr[0]
for(let i=0;i<n;i++)
    
{
    if(ans<arr[i])
    {
        ans=arr[i]
    }
    
}
console.log(ans)