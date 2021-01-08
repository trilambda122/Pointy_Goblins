const cheerio = require("cheerio");


function parseHTML (html) {

  const dataArray=[]
  const $ = cheerio.load(html)
  const locationStr=$(html).find('._1lbq8dg').find('h1').text()
  const location=locationStr.split('Stays in ')

  $('._8ssblpx').each((index,element)=>{ 
    
    // USED FOR TROUBLSHOOTING SELECTORS
    // console.log('------ELEMENT-------')
    // const d = $(element).html()
    // console.log(d)

  const title=$(element).find('._bzh5lkq').text()
  const description=$(element).find('._kqh46o').text()
  const priceStr=$(element).find('._1p7iugi').html()
  const  price=priceStr.split('</span>$')
  const link=$(element).find('._8s3ctt').find('a').attr('href')
  const image=$(element).find('._1h6n1zu').find('img').attr('src')
// Previous working image selector 
  //const image=$(element).find('._1048zci').find('img').attr('src')
 
  dataObj = {
    source: 'airbnb',
    location: location[1],
    title: title,
    description: description,
    price: price[1],
    link: `https://airbnb.com${link}`,
    image: image, 
  }
dataArray.push(dataObj)

  })
 
  return dataArray
}

module.exports = {
  parseHTML : parseHTML
}