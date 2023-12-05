const dotenv = require('dotenv')
dotenv.config()

const {MongoClient} = require('mongodb')

const client = new MongoClient(process.env.MONGO_URL)

async function connectToMongoDB(){
    try {
        await client.connect()        
        console.log("Conectado a MONGODB");
        return client
    } catch (error) {
        console.log('Error al conectar con MONGODB');
        return null
    }
}

async function disconnectToMongoDB(){
    try {
        await client.close()
        console.log("DESCONECTADO DE MONGODB");

    } catch (error) {
        console.log("ERROR AL DESCONECTAR DE MONGODB", error);
        
    }
}

module.exports = {connectToMongoDB, disconnectToMongoDB}