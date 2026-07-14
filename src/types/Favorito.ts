import type { Pelicula } from "./Pelicula";

export interface Favorito extends Pelicula {
  nota: string; // permite updatear la nota de la pelicula favorita
}