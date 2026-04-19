export function procesarPedido(pedido, ...extras) {

  // Destructuración del objeto
  const { cliente, producto, cantidad } = pedido;

  // Retorno objeto final con extras
  return {
    cliente,
    producto,
    cantidad,
    extras
  };
}