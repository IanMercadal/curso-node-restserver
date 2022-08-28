const { response } = require('express')

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

const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;

    res.json({ 
        msg: 'post Api -- controlador',
        nombre,
        edad
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