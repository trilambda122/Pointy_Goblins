const airbnb = require('./airbnbV2')

const data = airbnb.getData('denver').then((data)=>{
  console.log('-------TESTING FILE------')
  console.log(data);

})