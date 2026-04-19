export function agregarProducto(lista, nuevoProducto) {

  // Uso spread para no modificar la lista original
  const nuevaLista = [...lista, nuevoProducto];

  console.log("Original:", lista);
  console.log("Nueva:", nuevaLista);

  return nuevaLista;
}