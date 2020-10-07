const fs = require('fs')
const planetFile= fs.readFileSync('2-json.json')
const pString = planetFile.toString()
const pjson = JSON.parse(pString);
pjson.name= "Anoop"
pjson.age=29
pjson.planet="Venus"
newpjson = JSON.stringify(pjson)
fs.writeFileSync('2-json.json',newpjson)
console.log(pjson.name);