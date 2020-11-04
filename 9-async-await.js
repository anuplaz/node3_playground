const add = (a,b)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(a<100){
                reject(a-b)
            }
            resolve(a+b)
        },2000)
    })
}

//Async function always return Promise
const doWork = async ()=>{
    const sum = await add(1,99)
    const sum1 = await add(sum,99)
    const sum2 = await add(sum1,99)
    const sum3 = await add(sum2,99)
    return sum3
}

doWork().then((result)=>{
    console.log("Result: "+ result);
}).catch((e)=>{
    console.log("E: "+e);
})

