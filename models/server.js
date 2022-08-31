const express = require('express');
const cors = require('cors');

const {dbConnection} = require('../database/config');

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        // Conectar a base de datos
        this.conectarDB();

        // Middleware
        this.middleware();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection()
    }

    middleware() {
        // La clave para saber que es un middleware, es la palabra use
        
        // CORS
        this.app.use(cors());

        // Parseo y lectura del body
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => { 
            console.log("Servidor en puerto",this.port);
        })
    }
}

module.exports = Server;