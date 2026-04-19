const ventas = [
  { producto: "pantalla", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse",   detalles: { precio: 20, unidades: 5 } }
];

function analizarVentas(ventas) {
  // Destructuración anidada del primer elemento del arreglo
  const [{ producto, detalles: { precio, unidades } }] = ventas;

  const total = precio * unidades;

  console.log(`Producto: ${producto}`);
  console.log(`Precio: $${precio} | Unidades: ${unidades}`);
  console.log(`Total vendido: $${total}`);

  return total;
}

analizarVentas(ventas); // Total: $150
