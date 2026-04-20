exports.obtenerUsuarios = (req, res) => {
    res.json([
        { id: 1, nombre: "Yodelis" },
        { id: 2, nombre: "Luzsalva" }
    ]);
};

exports.crearUsuario = (req, res) => {
    res.json({
        mensaje: "Usuario creado",
        usuario: req.body
    });
};