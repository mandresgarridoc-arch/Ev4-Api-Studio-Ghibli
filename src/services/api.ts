import type { Pelicula } from "../types/Pelicula";

// Usamos este clon en Vercel que es el más estable y rápido actualmente
const URL_API = "https://ghibliapi.vercel.app/films";

export const obtenerPeliculas = async (): Promise<Pelicula[]> => {
  const respuesta = await fetch(URL_API);

  if (!respuesta.ok) {
    throw new Error("No fue posible obtener los datos de la API de Ghibli");
  }

  const data = await respuesta.json();
  
  return data; 
};