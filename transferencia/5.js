export function configFinal(...configs) {
  try {

    configs.forEach(config => {
      if (typeof config !== "object" || config === null || Array.isArray(config)) {
        throw new Error("Configuración inválida");
      }
    });

    const resultado = configs.reduce((acc, config) => ({
      ...acc,
      ...config
    }), {});

    return {
      ...resultado,
      validacion: true
    };

  } catch (error) {
    return {
      validacion: false,
      mensaje: error.message
    };
  }
}