function procesarCompra(cliente, productos) {
  try {
    // 🔹 Validación del cliente
    if (
      !cliente ||
      typeof cliente.nombre !== "string" ||
      typeof cliente.correo !== "string"
    ) {
      throw new Error("Datos del cliente inválidos");
    }

    // 🔹 Validación de productos
    if (!Array.isArray(productos) || productos.length === 0) {
      throw new Error("La lista de productos no es válida");
    }

    productos.forEach((p) => {
      if (
        !p.nombre ||
        typeof p.precio !== "number"
      ) {
        throw new Error("Producto inválido detectado");
      }
    });

    // 🔹 Inmutabilidad con spread (nuevo objeto cliente)
    const clienteInfo = { ...cliente };

    // 🔹 Destructuración (primer producto y resto)
    const [primerProducto, ...restoProductos] = productos;

    // 🔹 Cálculos
    const totalProductos = productos.length;

    const precioTotal = productos.reduce(
      (acum, prod) => acum + prod.precio,
      0
    );

    // 🔹 Informe final
    return {
      cliente: clienteInfo,
      totalProductos,
      precioTotal,
      primerProducto,
    };

  } catch (error) {
    return {
      error: true,
      mensaje: error.message,
    };
  }
}