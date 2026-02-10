const usuariioService = require('../services/usuario.service');

const crear = async (req, res) => {
    try {
        const usuario = await usuariioService.crearUsuario(req.body);
        res.status(201).json(usuario); 
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const listar = async (req, res) => {
    const usuarios = await usuariioService.listarUsuarios();
    res.json(usuarios);
};
module.exports = {
    crear,
    listar
}; 