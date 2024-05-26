const express = require('express')
const cors = require ("cors");
const dotenv = require ('dotenv')
const app = express()

//swagger
const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

//carga del archivo .env para que esté disponible en las próximas llamadas
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
//registra los archivos que la aplicación utilizará y construirá
var corsOptions = {
    origin: ["http://localhost:3001", "http://localhost:8080"],
    methods: "GET,PUT,POST,DELETE",
};
app.use(cors(corsOptions)); 

//swagger
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use("/api/categorias",require('./routes/categorias.routes'))
app.use("/api/peliculas", require('./routes/peliculas.routes'))
app.get('*', (req, res) => {res.status(404).send() });

//inicia el servidor web en el puerto SERVER_PORT
app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Aplicación de ejemplo escuchando en el puerto ${process.env.SERVER_PORT}`)
})

