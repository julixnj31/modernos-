export function agregarInventario(lista, nuevoItem) {

  // Creo nueva lista (inmutable)
  const nuevaLista = [...lista, nuevoItem];

  console.log(`Ahora hay ${nuevaLista.length} items en el inventario`);

  return nuevaLista;
}