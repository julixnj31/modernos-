function actualizarPerfil(perfil, ...nuevosDatos) {
    try {

    if (!perfil || typeof perfil !== "object") {
        throw new Error("Perfil no válido");
    }

    const perfilActualizado = nuevosDatos.reduce(
        (acc, parcial) => ({ ...acc, ...parcial }),
        { ...perfil }
    );

    console.log("Perfil original:", perfil);
    console.log("Perfil actualizado:", perfilActualizado);

    return perfilActualizado;

    } catch (error) {
    console.error("Error:", error.message);
    }
}

const perfil = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Bogotá"
};

actualizarPerfil(
    perfil,
    { edad: 21 },
    { ciudad: "Medellín" },
    { profesion: "Ingeniero" }
);