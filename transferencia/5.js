export function agregarItems(lista, ...items) {

  // Devuelvo nueva lista sin modificar original
  return [...lista, ...items];
}

export function obtenerInfo(item) {
  try {

    // Destructuración
    const { id, nombre, precio } = item;

    // Validación
    if (!id || !nombre || typeof precio !== "number") {
      throw new Error("El ítem no es válido");
    }

    return `ID: ${id}, Nombre: ${nombre}, Precio: ${precio}`;

  } catch (error) {
    return error.message;
  }
}