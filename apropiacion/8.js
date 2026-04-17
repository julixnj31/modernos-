function fusionarColecciones(lista1, lista2) {
  try {
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) { //Array.isArray(lista1) Verifica
    // si lista1 es un arreglo. Devuelve true si lo es, false si no.
    //!Array.isArray(lista1) El "!" significa “NO”. Entonces: “si lista1 NO es un arreglo”.
// "||" (OR lógico) Significa “o”. Se cumple si al menos uno de los dos es falso

      throw new Error("Ambos parámetros deben ser arreglos válidos");
    } //throw new Error(...) Lanza un error y detiene la ejecución. Muestra el mensaje: "Ambos
    // parámetros deben ser arreglos válidos"

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


