const add = (a,b)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

add(1,2).then((sum)=>{
    console.log(sum);
    add(sum,4).then((sum1)=>{
        console.log(sum1);
    }).catch((e)=>{
        console.log(e);
    })
}).catch((error)=>{
    console.log(error);
})