const url = require('url')
const mongoClient = require('mongodb').MongoClient

let cachedDb = null

async function connectToDatabase(uri) {

    if (cachedDb) {
        return cachedDb
    }

    const client = await mongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    const db = await client.db(url.parse(uri).pathname.substr(1))

    cachedDb = db
    return db
}

module.exports = async (req, res) => {
    let id = req.query.id;
    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = await db.collection('recipes')
    const recipe = await collection.find({"id":id}).toArray()
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.status(200).json({ recipe })
}

