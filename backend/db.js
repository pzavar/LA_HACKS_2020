const mongoose = require('mongoose');

// const URI = "mongodb+srv://pzavar:Munchies135@cluster0-rf1yl.gcp.mongodb.net/test?retryWrites=true&w=majority";

// const connectDB = async () => {
//     await mongoose.connect(URI, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     });
//     console.log('db connected');
// }

// module.exports = connectDB;

// ==================
//      MongoDB
// ==================
// const connectDB = require('./db');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//const dbConnectionUrl = 'mongodb+srv://lahacker20:Munchies135@cluster0-rf1yl.gcp.mongodb.net/test?retryWrites=true&w=majority';
// const dbConnectionUrl = 'mongodb+srv://ashkan:hal0freak@cluster0-rf1yl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dbConnectionUrl = 'mongodb+srv://jchou:klitz8@cluster0-rf1yl.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbConnectionUrl, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//module.exports = { initialize };
