export function mostrarDireccion(direccion) {
  try {

    // Destructuración
    const { ciudad, pais } = direccion;

    // Validación
    if (!ciudad || !pais) {
      throw new Error("La información de la dirección no es válida");
    }

    return `Ciudad: ${ciudad}, País: ${pais}`;

  } catch (error) {
    return error.message;
  }
}