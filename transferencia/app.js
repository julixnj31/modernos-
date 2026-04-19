import { registrarUsuarios } from "./apropiacion/1.js";
import { agregarProducto } from "./apropiacion/2.js";
import { mostrarDireccion } from "./apropiacion/3.js";
import { actualizarNotas } from "./apropiacion/4.js";
import { agregarItems, obtenerInfo } from "./apropiacion/5.js";

let opcion;

do {
  opcion = prompt(
    "Seleccione ejercicio:\n1. Usuarios\n2. Productos\n3. Dirección\n4. Notas\n5. Inventario"
  );

  switch (opcion) {
    case "1":
      console.log(
        registrarUsuarios(
          { nombre: "Ana", edad: 28 },
          { nombre: "Luis", edad: 30 },
          { nombre: "Carlos", edad: 22 }
        )
      );
      break;

    case "2":
      const productos = ["teclado", "mouse", "pantalla"];
      agregarProducto(productos, "audífonos");
      break;

    case "3":
      console.log(
        mostrarDireccion({ ciudad: "Bogotá", pais: "Colombia" })
      );
      break;

    case "4":
      const estudiante = {
        nombre: "Laura",
        notas: [4.0, 3.8]
      };
      console.log(actualizarNotas(estudiante, 4.5, 5.0));
      break;

    case "5":
      const lista = [
        { id: 1, nombre: "Laptop", precio: 2000 }
      ];

      const nuevaLista = agregarItems(
        lista,
        { id: 2, nombre: "Mouse", precio: 50 },
        { id: 3, nombre: "Teclado", precio: 100 }
      );

      console.log(nuevaLista);
      console.log(obtenerInfo(nuevaLista[0]));
      break;

    default:
      alert("Opción inválida");
  }

} while (!["1", "2", "3", "4", "5"].includes(opcion));