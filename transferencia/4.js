export function actualizarNotas(estudiante, ...nuevasNotas) {

  // Combino notas sin modificar el original
  const nuevas = [...estudiante.notas, ...nuevasNotas];

  // Creo nuevo objeto (inmutable)
  const actualizado = {
    ...estudiante,
    notas: nuevas
  };

  return actualizado;
}