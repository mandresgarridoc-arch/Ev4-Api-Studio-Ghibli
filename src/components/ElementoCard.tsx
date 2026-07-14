import { useState } from "react";
import type { Pelicula } from "../types/Pelicula";

interface Props {
  pelicula: Pelicula;
  onAgregar: () => void;
}

export const ElementoCard = ({ pelicula, onAgregar }: Props) => {
  // Estado local para saber si la tarjeta está expandida o no
  const [expandido, setExpandido] = useState(false);

  return (
    <div style={{ 
      border: "1px solid #e0e0e0", 
      padding: "1.5rem", 
      borderRadius: "12px", 
      textAlign: "center", 
      backgroundColor: "#ffffff", 
      color: "#333",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)" // Sombra suave para darle volumen
    }}>
      <div>
        <img 
          src={pelicula.image} 
          alt={`Póster de la película ${pelicula.title}`} 
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <h3 style={{ margin: "15px 0 5px 0", fontSize: "1.2rem", color: "#1a1a1a" }}>{pelicula.title}</h3>
        <p style={{ margin: "5px 0", fontSize: "0.9rem" }}><strong>Director:</strong> {pelicula.director}</p>
        <p style={{ margin: "5px 0", fontSize: "0.9rem" }}><strong>Año:</strong> {pelicula.release_date}</p>
        
        {/* Descripción colapsable */}
        <div style={{ marginTop: "15px", textAlign: "justify", fontSize: "0.85rem", color: "#555" }}>
          {expandido ? (
            <p style={{ lineHeight: "1.4" }}>{pelicula.description}</p>
          ) : (
            <p style={{ lineHeight: "1.4" }}>
              {/* Texto de 100 caracteres si no esta expandido */}
              {pelicula.description.substring(0, 100)}... 
            </p>
          )}
          
          <button 
            onClick={() => setExpandido(!expandido)}
            style={{ 
              background: "none", 
              border: "none", 
              color: "#0066cc", 
              cursor: "pointer", 
              padding: "5px 0", 
              fontSize: "0.85rem", 
              fontWeight: "bold",
              marginTop: "5px"
            }}
          >
            {expandido ? "Cerrar detalle ▲" : "Leer más ▼"}
          </button>
        </div>
      </div>
      
      <button 
        onClick={onAgregar}
        style={{ 
          marginTop: "20px", 
          padding: "10px", 
          cursor: "pointer", 
          backgroundColor: "#4CAF50", 
          color: "white", 
          border: "none", 
          borderRadius: "6px",
          fontWeight: "bold",
          fontSize: "1rem",
          transition: "background-color 0.2s"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#45a049"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#4CAF50"}
      >
        ❤️ Guardar en Favoritos
      </button>
    </div>
  );
};