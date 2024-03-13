console.log("Started.....");
let a = setTimeout(()=>{
    console.log("Set timeout is working");
},2000);
clearTimeout(a);
console.log("End");

