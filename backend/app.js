const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

// middlewares
app.use(express.json()) // estos datos estaran en formato json
app.use(cors()) // aqui usamos cors para no tener problemas al acceder a nuestro servidor (cors CROSS-ORIGIN RESOURCE SHARING)

// app.get('/', (req, res) => { //Aqui vamos a llegar al Homepage y vamos a hacer una solicitud (request) y una respuesta (response)
// 	// Aqui vamos a enviar una respuesta una ves que lleguemos a la pagina
// 	res.send('hello world')
// }) 

// Routes (Rutas)
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route ))) // aqui va a leer cualquier archivo que este en la carpeta de routes (Esta sera nuestra carpeta Target) y vamos a mapear esos archivos y nombramos cada ruta de archivo como route y en App.use vamos a crear una URL de nuestra api



const server = () => {
	// Ahora iniciamos a crear nuestro servidor
	db() //Aqui la funcion DB conecta la base de datos con el servidor
	app.listen(PORT, () => {
		console.log('Listening to port:', PORT)
	})
}

server ()