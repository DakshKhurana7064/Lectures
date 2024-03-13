console.log("Started.....");
let a = setInterval(()=>{
    console.log("Set timeout is working");
},2000,3);
clearInterval(a);
console.log("End");