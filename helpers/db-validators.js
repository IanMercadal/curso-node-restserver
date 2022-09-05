const { default: mongoose } = require('mongoose');
const Role = require('../models/Role');
const Usuario = require('../models/usuario');

const esRoleValido =  async(rol = '') => {
    
    const existeRol = await Role.findOne({rol});
    if(!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const emailExiste = async (correo = '') => {
    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado.`)
    }
}

const existeUsuarioPorId = async (id) => {
    // Verificar si el correo existe
    if (mongoose.Types.ObjectId.isValid(id)) {
        const existId = await User.findById(id);
    if (!existId) {
        throw new Error(`El id  ${id}  no existe en la BD`);
        }
    }else{
        throw new Error(`El id ${id} no es válido`);
    }
}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}