const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '64a12ea39f5e485e55fac319',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                  url: 'https://res.cloudinary.com/dobgq7exq/image/upload/v1688461647/YelpCamp/gkyxxoyurs1r3vtotq2q.jpg',
                  filename: 'YelpCamp/gkyxxoyurs1r3vtotq2q'
                },
                {
                  url: 'https://res.cloudinary.com/dobgq7exq/image/upload/v1688461653/YelpCamp/p8etu9oln0xwzc5bzx3r.jpg',
                  filename: 'YelpCamp/p8etu9oln0xwzc5bzx3r'
                }
              ],
            geometry: {
                type: "Point",
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, qui itaque, commodi eveniet sunt delectus exercitationem totam quae iusto voluptas quaerat reprehenderit tempore adipisci omnis dolorum, et assumenda illo voluptate.',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
