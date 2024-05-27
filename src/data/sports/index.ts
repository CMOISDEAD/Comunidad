import futbol from "./futbol.ts";
import judo from "./judo.ts";
import patinaje from "./patinaje.ts";
import tenis from "./tenis.ts";
import halterofilia from "./halterofilia.ts";
import badminton from "./badminton.ts";
import ajedrez from "./ajedrez.ts";
import ciclismo from "./ciclismo.ts";
import natacion from "./natacion.ts";

interface Sports {
  [key: string]: ISport;
}

export const sports: Sports = {
  futbol: {
    ...futbol,
  },
  judo: {
    ...judo,
  },
  patinaje: {
    ...patinaje,
  },
  tenis: {
    ...tenis,
  },
  halterofilia: {
    ...halterofilia,
  },
  badminton: {
    ...badminton,
  },
  ajedrez: {
    ...ajedrez,
  },
  ciclismo: {
    ...ciclismo,
  },
  natacion: {
    ...natacion,
  },
};
