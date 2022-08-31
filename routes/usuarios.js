const { Router } = require('express');
const {check} = require('express-validator');

const {validarCampos} = require('../middlewares/validar-campos')

const { 
    usuariosGet, 
    usuariosPost, 
    usuariosPatch, 
    usuariosDelete, 
    usuariosPut 
    } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id',usuariosPut);

router.post('/', [
    check('nombre', 'El nombre no es válido').not().isEmpty(),
    check('password', 'El password debe ser de más de 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
], usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;