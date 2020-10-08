const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //reject('Something went wrong')
        resolve([7,4,1])
    },2000)
}) 

doWorkPromise.then((result) =>{
    console.log('Success from Promise: ',result);
}).catch((error)=>{
    console.log('Error from reject: ',error);
})


//Call back equivalent:

const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('This is Callback error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log('Hello from Callback: ',result)
})