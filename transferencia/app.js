import { ejercicio1 } from "./transferencia/1.js";
import { ejercicio2 } from "./transferencia/2.js";
import { ejercicio3 } from "./transferencia/3.js";
import { ejercicio4 } from "./transferencia/4.js";
import { configFinal } from "./transferencia/5.js";

let opcion;

do {
  opcion = prompt(
    "Seleccione un ejercicio:\n1\n2\n3\n4\n5"
  );

  switch (opcion) {
    case "1":
      console.log(ejercicio1());
      break;
    case "2":
      console.log(ejercicio2());
      break;
    case "3":
      console.log(ejercicio3());
      break;
    case "4":
      console.log(ejercicio4());
      break;
    case "5":
      const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
      const extraConfig = { nivel: 2, tema: "oscuro" };
      console.log(configFinal(baseConfig, extraConfig));
      break;
    default:
      alert("Opción inválida");
  }

} while (!["1","2","3","4","5"].includes(opcion));