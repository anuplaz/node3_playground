const fs =require('fs')
// const book={
//     title:'Randamoozham',
//     author:'MT Vasudevan Nair'
// }

// const bookJson = JSON.stringify(book)
// //const parsedJson= JSON.parse(bookJson)
// //console.log(parsedJson.author);
// fs.writeFileSync('1-json.json', bookJson)

const dataBuffer = fs.readFileSync('1-json.json')

console.log(JSON.parse(dataBuffer.toString()).title)