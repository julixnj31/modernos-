function estadisticas(jugadores) {
  try {
    // 🔹 Validación de la estructura
    if (!Array.isArray(jugadores) || jugadores.length === 0) {
      throw new Error("La lista de jugadores no es válida");
    }

    jugadores.forEach(j => {
      if (
        !j.nombre ||
        !j.stats ||
        typeof j.stats.puntos !== "number" ||
        typeof j.stats.asistencias !== "number"
      ) {
        throw new Error("Estructura de jugador inválida");
      }
    });

    // 🔹 Destructuración profunda (primer jugador)
    const [{ stats: { puntos: puntosPrimerJugador } }] = jugadores;

    // 🔹 Inmutabilidad (crear copia)
    const jugadoresCopia = jugadores.map(j => ({
      ...j,
      stats: { ...j.stats }
    }));

    // 🔹 Cálculo total de puntos
    const puntosTotales = jugadoresCopia.reduce(
      (total, j) => total + j.stats.puntos,
      0
    );

    // 🔹 Resultado final
    return {
      puntosPrimerJugador,
      puntosTotales,
      jugadores: jugadoresCopia
    };

  } catch (error) {
    return {
      error: true,
      mensaje: error.message
    };
  }
}