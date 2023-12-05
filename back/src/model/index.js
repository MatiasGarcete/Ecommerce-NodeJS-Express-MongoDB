// const data = require('../../data.json')
const {connectToMongoDB, disconnectToMongoDB} = require('../config/index')

class ProductosModel{
    static async getAll(){
        try {
            const clientMongo = await connectToMongoDB()
            if (!clientMongo) {
                throw Error('Error al conectar con mongo')
            }
            const result = await clientMongo.db('NIke').collection('Zapatillas').find().toArray()
            await disconnectToMongoDB()
            // console.log(result);
            if (!result) return {data:null, error:true}
            return {data:result, error:false}

        } catch (error) {
            return {data:null, error}
        }
    }

    static async getByID(id){
        try {
            const clientMongo = await connectToMongoDB()
            if (!clientMongo) {
                throw Error('Error al conectar con Mongo')
            }
            const result = await clientMongo.db('NIke').collection('Zapatillas').findOne({id: Number(id)})
            // console.log(result);
            await disconnectToMongoDB()
            if (!result) return {data:null, error:true}
            return {data:result, error:false}
        } catch (error) {
            return {data:null, error: true}
        }
    }

    static async createOne(body){
        try {
            const clientMongo = await connectToMongoDB()
            if (!clientMongo) {
                throw Error('Error al conectar con Mongo')
            }
            const insert = await clientMongo.db('NIke').collection('Zapatillas').insertOne(body)
            console.log(insert);
            if(insert.acknowledged) return {data: {...body, _id: insert.insertedId}, error:false}
            return {data:null, error: true}
        } catch (error) {
            return {data:null, error: true}            
        }
    }
}

module.exports = ProductosModel