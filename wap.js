let count = 0;

let a = setInterval(()=>{
    count++;
    console.log(count);
    if(count == 3)
    {
        clearInterval(a);
    }
},2000)