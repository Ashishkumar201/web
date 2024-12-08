let object ={}

while(true)
{
    let key=("Enter the value of key or (q to quit")
    if(key==='q')
    { break;}


let value=prompt("Enter the value for " +key + " +")
object[key]=value
}

console.log(object)