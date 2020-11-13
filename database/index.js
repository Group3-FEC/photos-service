const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1:27017/';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(err => {
    console.log(err);
  })

const db = mongoose.connection;

db.on('connected', () => {console.log('connected to MongoDB')});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const photosSchema = new Schema({
  listing_id: Number,
  url: String,
  description: String
});

const Photos = mongoose.model('photos', photosSchema );

// Create and save an instance of model
const createPhotos = (data) => {
  let doc = new Photos(data);
  doc.save()
    .catch(err => {
      console.log('could not save document', err);
    })
};

module.exports.createPhotos = createPhotos;
