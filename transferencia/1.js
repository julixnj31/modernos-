function crearEstudiante(nombre, ...notas) {
  try {
    // Validar que todas las notas sean números
    for (const nota of notas) {
      if (typeof nota !== "number" || isNaN(nota)) {
        throw new Error(`Nota inválida encontrada: "${nota}"`);
      }
    }

    // Destructuración de arreglo: primera nota separada del resto
    const [primeraNota, ...restoNotas] = notas;

    // Promedio del resto (si existe)
    const promedioResto = restoNotas.length > 0
      ? restoNotas.reduce((suma, n) => suma + n, 0) / restoNotas.length
      : null;

    // Objeto inmutable con Object.freeze
    const estudiante = Object.freeze({
      nombre,
      primeraNota,
      promedioRestoNotas: promedioResto !== null
        ? parseFloat(promedioResto.toFixed(2))
        : "Sin notas adicionales",
      totalNotas: notas.length,
    });

    console.log("Estudiante registrado:", estudiante);
    return estudiante;

  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

crearEstudiante("Pedro", 4.5, 3.8, 4.0, 4.2); // válido
crearEstudiante("Ana",   4.0, "ocho", 3.5);    // error
