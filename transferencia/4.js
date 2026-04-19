export function configurarUsuario(defaults, personalizadas) {

  // Combino sin mutar
  const config = { ...defaults, ...personalizadas };

  // Destructuración
  const { idioma } = config;

  return idioma;
}