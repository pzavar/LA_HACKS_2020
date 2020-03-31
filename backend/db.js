// const mongoose = require('mongoose');

// const URI = "mongodb+srv://pzavar:Munchies135@cluster0-rf1yl.gcp.mongodb.net/test?retryWrites=true&w=majority";

// const connectDB = async () => {
//     await mongoose.connect(URI, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     });
//     console.log('db connected');
// }

// module.exports = connectDB;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dbConnectionUrl = 'mongodb+srv://jchou:klitz8@cluster0-rf1yl.gcp.mongodb.net/test?retryWrites=true&w=majority';

function initialize(dbName, dbCollectionName, successCallback, failureCallback) {
    MongoClient.connect(dbConnectionUrl, (err, dbInstance) => {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
			failureCallback(err);        // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);

            console.log("[MongoDB connection] SUCCESS");
			successCallback(dbCollection);
        }
    });
}

module.exports = { initialize };