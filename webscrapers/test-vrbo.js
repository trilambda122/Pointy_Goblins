const vrbo = require('./vrbo');
const airbnb = require('./vrbo')

const data = vrbo.getData().then((data)=>{
  console.log('-------TESTING FILE------')
  console.log(data);

})



