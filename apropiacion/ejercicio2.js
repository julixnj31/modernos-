const inventario = ["cámara", "trípode", "micrófono"];

function agregarInventario(lista, nuevoItem) {
    const nuevaLista = [...lista, nuevoItem];
    const mensaje = `Ítem "${nuevoItem}" agregado. El inventario ahora tiene ${nuevaLista.length} ítems.`;

    console.log("Inventario original:", lista);
    console.log(mensaje);

    return nuevaLista;
}

const inventarioActualizado = agregarInventario(inventario, "luz LED");

console.log("Nuevo inventario:", inventarioActualizado);
console.log("Inventario original sin cambios:", inventario);