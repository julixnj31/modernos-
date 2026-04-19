function fusionarColecciones(lista1, lista2) {
  try {
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
      throw new Error("Ambos parámetros deben ser arreglos válidos");
    }

    // Spread fusiona sin mutar ninguna de las dos listas
    const coleccionFinal = [...lista1, ...lista2];

    console.log("Colección fusionada:", coleccionFinal);
    return coleccionFinal;

  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

fusionarColecciones(["rojo", "verde"], ["azul", "amarillo"]); // válido
fusionarColecciones(["rojo", "verde"], "no-es-arreglo");      // error