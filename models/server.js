const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        // Middleware
        this.middleware();

        // Rutas de mi aplicación
        this.routes();
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