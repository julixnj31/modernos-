const catalogoA = [
  { id: 1, nombre: "Curso JavaScript", precio: 40 },
  { id: 2, nombre: "Curso HTML",       precio: 35 }
];
const catalogoB = [
  { id: 3, nombre: "Curso CSS", precio: 30 }
];

function fusionarCatalogos(a, b) {
  try {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new Error("Ambos parámetros deben ser arreglos de catálogo");
    }

    // Spread fusiona sin tocar los originales
    const fusionado = [...a, ...b];

    // slice() crea copia antes de sort para no mutar fusionado
    const ordenado = fusionado.slice().sort((x, y) => x.precio - y.precio);

    console.log("Catálogo fusionado y ordenado:");
    ordenado.forEach(c => console.log(`  [${c.id}] ${c.nombre} — $${c.precio}`));

    return ordenado;

  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

fusionarCatalogos(catalogoA, catalogoB); // válido → ordenado por precio
fusionarCatalogos(catalogoA, "invalido"); // error