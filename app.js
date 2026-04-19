import { procesarPedido } from "./transferencia/1.js";
import { agregarInventario } from "./transferencia/2.js";
import { registrarActividad } from "./transferencia/3.js";
import { configurarUsuario } from "./transferencia/4.js";
import { configFinal } from "./transferencia/5.js";

let opcion;

do {
  opcion = prompt(
    "TRANSFERENCIA:\n1. Pedido\n2. Inventario\n3. Actividad\n4. Configuración\n5. Config avanzada"
  );

  switch (opcion) {

    case "1":
      console.log(
        procesarPedido(
          { cliente: "Juan", producto: "Laptop", cantidad: 1 },
          "Garantía", "Envío rápido"
        )
      );
      break;

    case "2":
      const inventario = ["cámara", "trípode", "micrófono"];
      console.log(agregarInventario(inventario, "drone"));
      break;

    case "3":
      console.log(
        registrarActividad({ nombre: "Reunión", fecha: "2025-01-01" })
      );
      break;

    case "4":
      const defaults = { tema: "claro", idioma: "es" };
      const personalizadas = { idioma: "en" };
      console.log(configurarUsuario(defaults, personalizadas));
      break;

    case "5":
      const base = { modo: "producción", lenguaje: "es", nivel: 1 };
      const extra = { nivel: 2, tema: "oscuro" };
      console.log(configFinal(base, extra));
      break;

    default:
      alert("Opción inválida");
  }

} while (!["1","2","3","4","5"].includes(opcion));