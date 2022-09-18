const propertySchema = new mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  thumbnail: String,
  images: Array,
});
const Property = mongoose.model("Property", propertySchema);

const prop1 = new Property({
  id: 1,
  name: "Yellow Gold Building",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati exercitationem aliquid quas quia eaque natus laborum rem, eveniet veritatis id labore provident neque. Nobis porro labore possimus fugit tenetur nulla.",
  thumbnail: "/img/yellow-gold1.jpg",
  images: [
    "/img/yellow-gold1.jpg",
    "/img/yellow-gold2.jpg",
    "/img/yellow-gold3.jpg",
  ],
});

prop1.save();

const prop2 = new Property({
  id: 2,
  name: "Red Apartment",
  desc: "Veniam magnam blanditiis, minus obcaecati voluptatum deleniti consectetur aliquam cumque nulla esse accusantium sunt, veritatis, labore reiciendis dolore? Quibusdam repellendus, obcaecati quod ad quisquam totam molestiae error ut voluptates animi?",
  thumbnail: "/img/red-apartment1.jpg",
  images: [
    "/img/red-apartment1.jpg",
    "/img/red-apartment2.jpg",
    "/img/red-apartment3.jpg",
  ],
});
prop2.save();

const prop3 = new Property({
  id: 3,
  name: "Sea Facing Apartment",
  desc: "Est accusantium ullam saepe corrupti libero hic! Corporis nihil hic minima fuga eveniet voluptate qui sit, nam quae, deserunt libero distinctio nobis est modi ipsam totam ut beatae, aspernatur voluptates.",
  thumbnail: "/img/sea-facing-apartment1.jpg",
  images: [
    "/img/sea-facing-apartment1.jpg",
    "/img/sea-facing-apartment2.jpg",
    "/img/sea-facing-apartment3.jpg",
  ],
});
prop3.save();

// Property.insertMany([prop1, prop2], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Records successfully inserted");
//   }
// });

/*
For using mongo db to insert record

 db.properties.insert({     
    "id": 3,
    "name": "Sea Facing Apartment",     
    "desc": "Est accusantium ullam saepe corrupti libero hic! Corporis nihil hic minima fuga eveniet voluptate qui sit, nam quae, deserunt libero distinctio nobis est modi ipsam totam ut beatae, aspernatur voluptates.",     
    "thumbnail": "/img/sea-facing-apartment1.jpg",     
    "images": [       "/img/sea-facing-apartment1.jpg",       "/img/sea-facing-apartment2.jpg",       "/img/sea-facing-apartment3.jpg",     ],   })


db.queries.insert({
    "buildingId": 1,
    "name": "Samarth",
    "dob": 25/01/1986,
    "ssn": 123-123-1234,
    "phone": 123456789,
    "currentAddress": "NMR", 
    "currentCity": "Bhopal",
    "currentState": "MP",
    "currentZipcode": 462023
})
*/
