const vrbo = require('../vrbo');
const db = require("../../models");
var mongoose = require("mongoose");


const database = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vacationrental",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);


const data = vrbo.getData('miami').then((data)=>{
  console.log('-------TESTING FILE------')
  console.log(data);
  const databaseRecord = new db.populateDatabase({
    results: data
  })

  databaseRecord.save(function(err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted succussfully!");
    mongoose.connection.close();
  });
})



