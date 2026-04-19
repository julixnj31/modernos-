function configurarUsuario(defaults, personalizadas) {
    try {

    const configuracion = { ...defaults, ...personalizadas };

    const { idioma } = configuracion;

    if (!idioma) {
        throw new Error("El idioma no está definido");
    }

    console.log("Configuración final:", configuracion);
    console.log("Idioma:", idioma);

    return idioma;

    } catch (error) {
    console.error("Error:", error.message);
    }
}

const defaults = {
    idioma: "es",
    tema: "claro"
};

const personalizadas = {
    tema: "oscuro"
};

configurarUsuario(defaults, personalizadas);