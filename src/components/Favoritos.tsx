import type { Favorito } from "../types/Favorito";

interface Props {
  favoritos: Favorito[];
  onEliminar: (id: string) => void;
  onEditar: (id: string, nuevaNota: string) => void;
}

export const Favoritos = ({ favoritos, onEliminar, onEditar }: Props) => {
  return (
    <div style={{ marginTop: "50px", padding: "30px 0", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
      <h2 style={{ marginBottom: "30px", textAlign: "center", fontSize: "2rem" }}>✨ Mi Colección Personal</h2>
      
      {favoritos.length === 0 ? (
        <p style={{ color: "#aaa", fontStyle: "italic", textAlign: "center" }}>
          No has guardado ninguna película aún. ¡Empieza a explorar el catálogo!
        </p> 
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "25px" }}>
          {favoritos.map((fav) => (
            <div 
              key={fav.id} 
              className="tarjeta-animada"
              style={{ 
                padding: "20px", 
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                backgroundColor: "#ffffff", 
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)" 
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img 
                  src={fav.image} 
                  alt={fav.title} 
                  style={{ 
                    width: "70px", 
                    height: "100px", 
                    objectFit: "cover", 
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
                  }} 
                />
                <h3 style={{ margin: "0", fontSize: "1.2rem", color: "#1a1a1a", lineHeight: "1.3" }}>
                  {fav.title}
                </h3>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "0.85rem", color: "#666", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Mi reseña:
                </label>
                <textarea 
                  className="input-estetico"
                  value={fav.nota} 
                  onChange={(e) => onEditar(fav.id, e.target.value)}
                  placeholder="Agrega una nota sobre la Pelicula..."
                  rows={2} 
                  style={{ 
                    padding: "12px", 
                    width: "100%", 
                    boxSizing: "border-box", 
                    borderRadius: "8px",
                    backgroundColor: "#f8f9fa", 
                    border: "1px solid #e0e0e0",
                    color: "#333", 
                    resize: "none",
                    fontFamily: "inherit",
                    fontSize: "0.95rem"
                  }}
                />
              </div>
              
              <button 
                className="btn-estetico btn-eliminar"
                onClick={() => onEliminar(fav.id)}
                style={{ 
                  alignSelf: "flex-end", 
                  marginTop: "5px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  fontSize: "0.9rem"
                }}
              >
                🗑️ Quitar de la lista
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};