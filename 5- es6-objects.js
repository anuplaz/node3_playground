//Object property shorthand
const name ='Andrew'
const userAge = 27
const user = {
    name, //shorthand
    age : userAge,
    location: 'Philadelphia'
}
console.log(user)

// Object destruction
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}
const {label: productLabel, price, stock, rating=5 } = product
console.log(productLabel)
console.log(price)
console.log(stock)
console.log(rating)

const transaction = (type, {label='label', stock=0}={}) =>{
    console.log(type, label, stock);
}

transaction('order',product)