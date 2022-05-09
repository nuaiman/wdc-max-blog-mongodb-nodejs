const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connect(){
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('blogMax');
}

 function getDb(){
    if(!database){
        throw {message: 'Couldnt cconnect to DB ...'};
    } 
    return database;
 }

 module.exports = {
     cennectToDb: connect,
     getDb: getDb,
 };