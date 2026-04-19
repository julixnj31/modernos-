export function registrarUsuarios(usuarioPrincipal, ...usuariosExtras) {

  // Destructuro para sacar nombre y edad
  const { nombre, edad } = usuarioPrincipal;

  // Retorno mensaje con cantidad de extras
  return `Usuario principal: ${nombre}, Edad: ${edad} — Usuarios adicionales registrados: ${usuariosExtras.length}`;
}