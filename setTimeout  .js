console.log(1)
console.log(2)
console.log(3)
console.log(4)
function hello()
{
    console.log("St timeout is working")
}
setTimeout(hello , 2000 )  // Example of callback ( When a funtion calls another function )
/* Set timeout is a asynchonous function that executes after some time , in the function even if you give 0 value 
then also there will be a delay because it is asynchronous fucntion */
