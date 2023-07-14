const mongoose = require('mongoose');
// Mongoose es una librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones
const db = async () => {
	try {
		mongoose.set('strictQuery', false)
		await mongoose.connect(process.env.MONGO_URL) // Conexion a la DB
		console.log('DB connected')
	} catch (e) {
		console.log('DB connection Error');
	}
}

module.exports = {db}