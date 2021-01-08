const cheerio = require("cheerio");

function parseHTML (html) {
  const dataArray=[]
  const $ = cheerio.load(html)
$('.SearchResultCard-module__card_container___nttr9').each((index,element)=>{
const linkStr = $(element).find('.Link-module__base___1ypHw').attr('href')
const link = `https://sonder${linkStr}`
const title = $(element).find('.SearchResultCard-module__title_row___2Ytju').text()
const description=$(element).find('.SearchResultCard-module__stats___1sn4g').text()
const image=$(element).find('.SearchResultCard-module__post_image___1wRUp').attr('src')
const priceStr=$(element).find('.SearchResultCard-module__prices_row___1V0mu').text()
const price=priceStr.split('US$')
const location=$(element).find('.SearchResultCard-module__neighborhood_row___28cV4').text()
      
dataObj = {
    source: 'sonder',
    location: location,
    title: title,
    description: description,
    price: price[2],
    link: link,
    image: image, 
  }
  dataArray.push(dataObj)
    })

  return dataArray.slice(0,-2)
}

module.exports = {
  parseHTML : parseHTML
}