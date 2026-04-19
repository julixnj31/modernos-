export function registrarActividad(actividad) {
  try {

    const { nombre, fecha } = actividad;

    if (!nombre || !fecha) {
      throw new Error("La actividad no es válida");
    }

    return `Actividad registrada: ${nombre} en fecha ${fecha}`;

  } catch (error) {
    return error.message;
  }
}