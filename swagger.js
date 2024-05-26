const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info:{
        //name of your api
        title: 'Backend Node.js API',
        description: 'Esta es una API en node.js'
    },
    host: 'localhost:3000'
};

//archivo con documentación
const outputFile = './swagger-output.json';
const routes = ['./index.js'];

//generacuón de la documentación
swaggerAutogen(outputFile, routes, doc);