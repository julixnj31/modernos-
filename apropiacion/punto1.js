function procesarPedido(pedido, ...extras) {
    const { cliente, producto, cantidad } = pedido;

    const pedidoFinal = {
    cliente,
    producto,
    cantidad,
    extras,
    totalExtras: extras.length,
    };

    console.log("Pedido procesado:", pedidoFinal);
    return pedidoFinal;
}
