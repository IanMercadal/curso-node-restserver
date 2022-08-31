const { response } = require('express')
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey, page = 1, limit = 5} = req.query;

    res.json({ 
        msg: 'get Api -- controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    
    const id = req.params.id;

    res.json({ 
        msg: 'put Api -- controlador',
        id
    });
}

const usuariosPost = async (req, res = response) => {
    
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    // Verificar si el correo existe

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    // Guarda en BD

    await usuario.save();

    res.json({ 
        msg: 'post Api -- controlador',
        usuario
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({ 
        msg: 'patch Api -- controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({ 
        msg: 'delete Api -- controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}