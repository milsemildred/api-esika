exports.obtenerProductos = (req, res) => {
    res.json([
        { id: 1, nombre: "Perfume Ésika", precio: 80000 },
        { id: 2, nombre: "Labial Ésika", precio: 25000 }
    ]);
};

exports.crearProducto = (req, res) => {
    res.json({
        mensaje: "Producto creado",
        producto: req.body
    });
};