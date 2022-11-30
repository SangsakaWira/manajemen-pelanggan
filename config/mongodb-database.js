const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/qlassku-v4';

module.exports = () => {
    // DB configuration
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
    mongoose.connection.once('open', () => {
        console.log("Connected to Database")
    });
};