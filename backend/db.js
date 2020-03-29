const mongoose = require('mongoose');

const URI = "mongodb+srv://pzavar:Munchies135@@@cluster0-rf1yl.gcp.mongodb.net/test?retryWrites=true&w=majority";
 
const connectDB = async () => {
   await mongoose.connect(URI);
   console.log('db connected');
}

module.exports = connectDB;


// const { MongoClient } = require('mongodb');

// const dbConnectionUrl = "mongodb+srv://pzavar:Munchies135@@@cluster0-rf1yl.gcp.mongodb.net/test?retryWrites=true&w=majority";

// function initialize(
//     munchies_db,
//     Users,
//     successCallback,
//     failureCallback
// ) {
//     MongoClient.connect(dbConnectionUrl, (err, dbInstance) => {
//         if (err) {
//             console.log(`[MongoDB connection] ERROR: ${err}`);
//             failureCallback(err); //this should be "caught" by the calling function
//         } else {
//             const dbObject = dbInstance.db(munchies_db);
//             const dbCollection = dbObject.collection(Users);
//             console.log("[MongoDB connection] SUCCESS");

//             successCallback(dbCollection);
//         }
//     });
// }

// module.exports = {
//     initialize
// };