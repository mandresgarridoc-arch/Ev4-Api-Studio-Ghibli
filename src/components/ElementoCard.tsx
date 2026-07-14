import { useState } from "react";
import type { Pelicula } from "../types/Pelicula";

interface Props {
  pelicula: Pelicula;
  onAgregar: () => void;
}

export const ElementoCard = ({ pelicula, onAgregar }: Props) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <div 
      className="tarjeta-animada" 
      style={{ 
        border: "1px solid #e0e0e0", 
        padding: "1.5rem", 
        borderRadius: "12px", 
        textAlign: "center", 
        backgroundColor: "#ffffff", 
        color: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img 
          src={pelicula.image} 
          alt={`Póster de ${pelicula.title}`} 
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <h3 style={{ margin: "15px 0 5px 0", fontSize: "1.2rem", color: "#1a1a1a" }}>{pelicula.title}</h3>
        <p style={{ margin: "5px 0", fontSize: "0.9rem" }}><strong>Director:</strong> {pelicula.director}</p>
        <p style={{ margin: "5px 0", fontSize: "0.9rem" }}><strong>Año:</strong> {pelicula.release_date}</p>
        
        <div style={{ marginTop: "15px", textAlign: "justify", fontSize: "0.85rem", color: "#555" }}>
          {expandido ? (
            // Agregamos la clase "fade-in" para que aparezca suavemente
            <p className="fade-in" style={{ lineHeight: "1.4" }}>{pelicula.description}</p>
          ) : (
            <p style={{ lineHeight: "1.4" }}>
              {pelicula.description.substring(0, 100)}... 
            </p>
          )}
          
          <button 
            onClick={() => setExpandido(!expandido)}
            style={{ 
              background: "none", border: "none", color: "#0066cc", cursor: "pointer", 
              padding: "5px 0", fontSize: "0.85rem", fontWeight: "bold", marginTop: "5px"
            }}
          >
            {expandido ? "Cerrar detalle ▲" : "Leer más ▼"}
          </button>
        </div>
      </div>
      
      {/* Botón con clase CSS para el efecto hover y sombra */}
      <button 
        className="btn-estetico btn-guardar"
        onClick={onAgregar}
        style={{ marginTop: "20px" }}
      >
        ❤️ Guardar en Favoritos
      </button>
    </div>
  );
};