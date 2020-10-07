const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=59320dbcb2f085c88c8fb284aea04428&query=9.9,76.01&units=m'

let data = ''

const request = http.request(url, (response) => {
    response.on('data', (chunk) => {
        data += chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('EEEEEEEEEEEE'+error)
})
request.end()