setTimeout (() => {
    console.log('2 seconds up.');
}, 2000)

const names = ['Anoop', 'Aneena', 'Ann', 'Luke']
const shortNames = names.filter((name) => {
    return name.length <= 4
})
console.log(shortNames);

const geocode = (address, callback) => {
    setTimeout(()=>{
        const data = {
            latitude : 10,
            longitude : 76
        }
        callback(data)
    }, 2000)
}
geocode('Cochin', (data)=>{
    console.log(data);
}
)

const add = (a, b, callback)=> {
    setTimeout(()=>{
        callback(1+4)
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

