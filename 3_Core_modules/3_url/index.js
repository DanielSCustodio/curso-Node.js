const url = require('url')

const adress = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedURL = new url.URL(adress)

console.log(parsedURL.host)
console.log(parsedURL.pathname)
console.log(parsedURL.search)
console.log(parsedURL.searchParams)
console.log(parsedURL.searchParams.get('produtos'))
