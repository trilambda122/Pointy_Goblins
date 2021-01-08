const db = require("../models");
const puppeteer = require("puppeteer");
const vrboParse = require('./parse-vrbo')
const airbnb = require('./airbnb')
const sonderParse = require('./parse-sonder')
var mongoose = require("mongoose");

async function getData(city){

  const database = mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/vacationrental",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );


  const vrboURL = `https://www.vrbo.com/search/keywords:${city}`;
  const sonderURL=`https://www.sonder.com/destinations/${city}/search?`
  const airbnbURL=`https://www.airbnb.com/s/${city}/homes?`

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
// open VRBO TAB
  const vrboPage = await browser.newPage();
  await vrboPage.setViewport({
    width: 1900,
    height: 2600,
    deviceScaleFactor: 1,
  });

  await vrboPage.goto(vrboURL, { 
    waitUntil: "networkidle0",
    timeout:0
   });
   const vrboHTML = await vrboPage.evaluate(
    () => document.querySelector("*").outerHTML
  );

  // open SONDER tab
   const sonderPage = await browser.newPage();
   await sonderPage.setViewport({
     width: 1900,
     height: 2600,
     deviceScaleFactor: 1,
   });

   await sonderPage.goto(sonderURL, { 
    waitUntil: "networkidle0",
    timeout:0
   });
   const sonderHTML = await sonderPage.evaluate(
    () => document.querySelector("*").outerHTML
  );
// open AIRBNB tab
  //  const airbnbPage = await browser.newPage();
  //  await airbnbPage.setViewport({
  //    width: 1900,
  //    height: 2600,
  //    deviceScaleFactor: 1,
  //  });

  //  await airbnbPage.goto(airbnbURL, { 
  //   waitUntil: "networkidle0",
  //   timeout:0
  //  });
  //  const airbnbHTML = await airbnbPage.evaluate(
  //   () => document.querySelector("*").outerHTML
  //  );

  await browser.close();

  const airbnbJSON = await airbnb.getData('austin')

  const allResultsJSON=[]






// parse the HTML from each of the results 
  const vrboJSON=vrboParse.parseHTML(vrboHTML)
  const sonderJSON=sonderParse.parseHTML(sonderHTML)
  // const airbnbJSON=airbnbParse.parseHTML(airbnbHTML)
 
allResultsJSON.push(...vrboJSON)
allResultsJSON.push(...sonderJSON)
allResultsJSON.push(...airbnbJSON)


const databaseRecord = new db.Austin({
  results : allResultsJSON
})





databaseRecord.save(function(err, doc) {
  if (err) return console.error(err);
  console.log("Document inserted succussfully!");
  mongoose.connection.close();
});

}

getData('austin')

module.exports = {
  getData : getData
}

