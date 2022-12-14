const { response } = require('express')
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = async (req = request, res = response) => {

    const {limite = 5, desde = 0} = req.query;
    const query = {estado: true}
    
    const [total, usuarios] = await Promise.all([
        Usuario.count(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.json({ 
        total,
        usuarios
    });
}

const usuariosPut = async (req, res = response) => {
    
    const {id} = req.params;
    const {_id, password, google,correo, ...resto } = req.body;

    // TODO valida contra bd
    if(password) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)

    res.json(usuario);
}

const usuariosPost = async (req, res = response) => {
    
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    // Guarda en BD
    await usuario.save();

    res.json({ 
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