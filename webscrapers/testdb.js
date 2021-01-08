const db = require("../models");
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

// var database = mongoose.connection;
// database.on("error", console.error.bind(console, "connection error:"));

// database.once("open", function() {
//   console.log("Connection Successful!");
// });


const testRecord =  new db.populateDatabase(
  {
 results: [
    {
      source: 'vrbo',
      location: '5 min drive to the beach',
      title: 'OVERLOOKING THE OCEAN, 2/2 LUXE CORNER CONDO. FREE: POOL, SPA, GYM, 50Mb WI-FI',
      description: '2 BR 2 BA null Sleeps 4',
      price: '344',
      link: 'https://www.vrbo.com/1138060?unitId=1686269&noDates=true',
      image: 'https://odis.homeaway.com/odis/listing/2591f2f2-2b8d-456a-8d2b-95bc91baef28.c6.jpg'
    },
    {
      source: 'vrbo',
      location: '5 min drive to the beach',
      title: 'OVERLOOKING THE OCEAN, W RESIDENCES, LUXURY DESIGN. FREE: POOL, SPA, GYM, WI-FI',
      description: '2 BR 2 BA null Sleeps 4',
      price: '377',
      link: 'https://www.vrbo.com/704271?unitId=1252209&noDates=true',
      image: 'https://odis.homeaway.com/odis/listing/9581bc34-023e-41b2-838c-122a2d886dd6.c6.jpg'
    },
    {
      source: 'vrbo',
      location: '10 min drive to the beach',
      title: 'Sextant | Edgewater Penthouse #703 | Private Rooftop+Hot Tub | 10 mins to Beach',
      description: '2 BR 2 BA null Sleeps 6',
      price: '217',
      link: 'https://www.vrbo.com/7597794ha?unitId=7042070&noDates=true',
      image: 'https://odis.homeaway.com/odis/listing/6fb0925d-c60f-4354-b5c2-35e2b2665529.c6.jpg'
    },
    {
      source: 'vrbo',
      location: '5 min drive to the beach',
      title: 'Water Front Heated Pool Home 3 Bedroom 2 Bath, Miami River, near South Beach',
      description: '3 BR 2 BA null Sleeps 7',
      price: '288',
      link: 'https://www.vrbo.com/3777326ha?unitId=3792249&noDates=true',
      image: 'https://media.vrbo.com/lodging/35000000/34170000/34165100/34165076/2690b977.c6.jpg'
    },
    {
      source: 'vrbo',
      location: '6 min drive to the beach',
      title: 'BALCONY OCEAN VIEW ★ WiFi - Pool - Gym - Parking ! ',
      description: '1 BR 1 BA null Sleeps 4',
      price: '122',
      link: 'https://www.vrbo.com/3960955ha?unitId=4347178&noDates=true',
      image: 'https://media.vrbo.com/lodging/32000000/31060000/31050500/31050404/adcfbb64.c6.jpg'
    },
    {
      source: 'vrbo',
      location: '5 min drive to the beach',
      title: 'Private Pool!/Gated And Fenced/3Bed2Bath/Coconut Grove',
      description: '3 BR 2 BA null Sleeps 6',
      price: '264',
      link: 'https://www.vrbo.com/849934?unitId=1397873&noDates=true',
      image: 'https://media.vrbo.com/lodging/35000000/34350000/34340700/34340664/3681d3ca.c6.jpg'
    },
    {
      source: 'vrbo',
      location: '3 min drive to the beach',
      title: 'Private room/bathroom in contemporary house,Owner has his private separate space',
      description: '1 BR 1 BA null Sleeps 2',
      price: '101',
      link: 'https://www.vrbo.com/7656339ha?unitId=7116769&noDates=true',
      image: 'https://media.vrbo.com/lodging/36000000/35380000/35374500/35374422/b5051426.c6.jpg'
    },
    {
      source: 'vrbo',
      location: '5.4 mi to Miami center',
      title: "Mediterranean Style Cottage in Miami's Upper East Side",
      description: '2 BR 1 BA null Sleeps 9',
      price: '150',
      link: 'https://www.vrbo.com/7272351ha?unitId=6569696&noDates=true',
      image: 'https://media.vrbo.com/lodging/34000000/33970000/33961500/33961489/657c965c.c6.jpg'
    },
  ]}
  

  )

testRecord.save(function(err, doc) {
  if (err) return console.error(err);
  console.log("Document inserted succussfully!");
  mongoose.connection.close();
});







