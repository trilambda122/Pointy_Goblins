const cheerio = require("cheerio");



function parseHTML(html) {
  const dataArray = [];

  const $ = cheerio.load(html);

  $(".Hit").each((index, element) => {
    const title = $(element).find(".HitInfo__headline").text();
    const bedrooms = $(element).find(".Details__bedrooms").html();
    const bathrooms = $(element).find(".Details__bathrooms").html();
    const halfbath = $(element).find(".Details__halfbathrooms").html();
    const sleeps = $(element).find(".Details__sleeps").html();
    //  const description = $(element).find('.HitInfo__details').text()
    const description = `${bedrooms} ${bathrooms} ${halfbath} ${sleeps}`;
    const link = $(element).find(".media-flex__content").attr("href");
    const imageSrt = $(element)
      .find(".SimpleImageCarousel__image--cur")
      .attr("style");
    let image = imageSrt.split('url("');
    image = image[1].replace('");', "");
    const priceSrt = $(element).find(".DualPrice__amount").html();
    const price = priceSrt.replace("$", "");
    const location = $(element).find(".GeoDistance__text").text();

    dataObj = {
      source: "vrbo",
      location: location,
      title: title,
      description: description,
      // bedrooms: bedrooms,
      // bath: bathrooms,
      // halfbath: halfbath,
      // sleeps: sleeps,
      price: price,
      link: `https://www.vrbo.com${link}`,
      image: image,
    };
    dataArray.push(dataObj);
  });

  return dataArray;
}

module.exports = {
  parseHTML: parseHTML,
};
