const Role = require('../models/Role');

const esRoleValido =  async(rol = '') => {
    
    const existeRol = await Role.findOne({rol});
    if(!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

module.exports = {
    esRoleValido
}