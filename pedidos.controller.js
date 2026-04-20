exports.obtenerPedidos = (req, res) => {
    res.json([
        { id: 1, cliente: "Yodelis", producto: "Perfume Ésika" }
    ]);
};

exports.crearPedido = (req, res) => {
    res.json({
        mensaje: "Pedido creado",
        pedido: req.body
    });
};