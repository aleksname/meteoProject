// const { MongoClient } = require('mongodb'); 

// const URL = 'mongodb://0.0.0.0:27017/test';

// let = dbConnection;

// module.exports = {
//     connctToDb: (cd) => {
//         MongoClient
//             .connect(URL)
//             .then(client) => {
//                 console.log("Conntcted to MongoDb");
//                 dbConnection = client.db();
//                 return cd();
//             }
//             .catch(err) => {
//                 return cd(err)
//             }
//     },
//     getDb: () => dbConnection,
// }