function registrarActividad(actividad) {
    try {
        const { nombre, fecha } = actividad;

        if (!nombre || !fecha) {
            throw new Error("La actividad no es válida");
        }

        const mensaje = `Actividad registrada: "${nombre}" programada para ${fecha}`;
        console.log(mensaje);

        return { exito: true, mensaje };

    } catch (error) {
        console.error("Error:", error.message);
        return { exito: false, mensaje: error.message };
    }
}

registrarActividad({
    nombre: "Reunión",
    fecha: "2026-04-20"
});