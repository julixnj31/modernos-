function configFinal(...configs) {
  try {
    // 🔹 Validar que todos sean objetos
    configs.forEach(config => {
      if (
        typeof config !== "object" ||
        config === null ||
        Array.isArray(config)
      ) {
        throw new Error("Todos los parámetros deben ser objetos válidos");
      }
    });

    // 🔹 Combinar configuraciones (inmutable)
    const configuracionFinal = configs.reduce((acc, config) => {
      return { ...acc, ...config };
    }, {});

    // 🔹 Retornar resultado con validación exitosa
    return {
      ...configuracionFinal,
      validacion: true
    };

  } catch (error) {
    return {
      validacion: false,
      mensaje: error.message
    };
  }
}