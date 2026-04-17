function analizarVentas(ventas) {
  const [{ producto, detalles: { precio, unidades } }] = ventas;
  const total = precio * unidades;

  console.log(`Producto: ${producto}, Total vendido: ${total}`);
}

//  EJECUCIÓN
analizarVentas([
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
]);
