import type { Pelicula } from "../types/Pelicula";

interface Props {
  pelicula: Pelicula;
  onAgregar: () => void;
}

export const ElementoCard = ({ pelicula, onAgregar }: Props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", textAlign: "center", backgroundColor: "#f9f9f9", color: "#333" }}>
      <img 
        src={pelicula.image} 
        alt={`Póster de la película ${pelicula.title}`} 
        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
      />
      <h3 style={{ margin: "10px 0" }}>{pelicula.title}</h3>
      <p style={{ margin: "5px 0" }}><strong>Director:</strong> {pelicula.director}</p>
      <p style={{ margin: "5px 0" }}><strong>Año:</strong> {pelicula.release_date}</p>
      
      <button 
        onClick={onAgregar}
        style={{ marginTop: "10px", padding: "8px 12px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px" }}
      >
        Guardar en Favoritos
      </button>
    </div>
  );
};