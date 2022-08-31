const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: 'string',
        required: [true, 'El nombre es obligatorio'],
    },
    correo: {
        type: 'string',
        required: [true, 'El correo es obligatorio'],
    },
    password: {
        type: 'string',
        required: [true, 'El password es obligatorio'],
    },
    img: {
        type: 'string',
    },
    rol: {
        type: 'string',
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: 'boolean',
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

module.exports = model('Usuario', UsuarioSchema);