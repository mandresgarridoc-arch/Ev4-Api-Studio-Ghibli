import type { Pelicula } from "../types/Pelicula";
import { ElementoCard } from "./ElementoCard";

interface Props {
  peliculas: Pelicula[];
  onAgregar: (pelicula: Pelicula) => void;
}

export const ListaElementos = ({ peliculas, onAgregar }: Props) => {
  if (peliculas.length === 0) {
    return <p>No se encontraron películas con ese nombre.</p>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
      {peliculas.map((pelicula) => (
        <ElementoCard 
          key={pelicula.id} 
          pelicula={pelicula} 
          onAgregar={() => onAgregar(pelicula)} 
        />
      ))}
    </div>
  );
};