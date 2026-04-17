function evaluar(...valores) {
  try {
    // Verificar que todos los valores sean numéricos
    for (const val of valores) {
      if (typeof val !== "number" || isNaN(val)) {
        throw new Error(`Valor no numérico encontrado: "${val}"`);
      }
    }

    // Crear nueva lista sin mutar la original (spread)
    const lista = [...valores];

    // Calcular el promedio
    const suma = lista.reduce((acumulado, num) => acumulado + num, 0);
    const promedio = suma / lista.length;

    console.log("Valores válidos:", lista);
    console.log("Promedio:", promedio.toFixed(2));
    return promedio;

  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

// Pruebas
evaluar(8, 9, 7, 10, 6);       // válido → promedio: 8.00
evaluar(5, "diez", 3);          // error  → valor no numérico
evaluar(4.5, 3.8, 4.0, 4.2);   // válido → promedio: 4.13