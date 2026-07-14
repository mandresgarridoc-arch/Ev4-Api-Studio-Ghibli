import type { Favorito } from "../types/Favorito";

interface Props {
  favoritos: Favorito[];
  onEliminar: (id: string) => void;
  onEditar: (id: string, nuevaNota: string) => void;
}

export const Favoritos = ({ favoritos, onEliminar, onEditar }: Props) => {
  return (
    <div style={{ marginTop: "40px", padding: "20px", borderTop: "2px solid #eaeaea" }}>
      <h2 style={{ marginBottom: "20px" }}>Mi Colección Personal</h2>
      
      {favoritos.length === 0 ? (
        <p style={{ color: "#666", fontStyle: "italic" }}>No has guardado ninguna película aún.</p> 
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {favoritos.map((fav) => (
            <div 
              key={fav.id} 
              className="tarjeta-animada"
              style={{ 
                padding: "15px", 
                border: "1px solid #ddd", 
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                backgroundColor: "#fff"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img src={fav.image} alt={fav.title} style={{ width: "50px", borderRadius: "4px" }} />
                <h3 style={{ margin: "0", fontSize: "1.1rem" }}>{fav.title}</h3>
              </div>
              
              <input 
                className="input-estetico"
                value={fav.nota} 
                onChange={(e) => onEditar(fav.id, e.target.value)}
                placeholder="Añadir una nota personal..."
                style={{ padding: "8px", width: "100%", borderRadius: "4px" }}
              />
              
              {/* Botón rojo estético */}
              <button 
                className="btn-estetico btn-eliminar"
                onClick={() => onEliminar(fav.id)}
                style={{ alignSelf: "flex-end", marginTop: "5px" }}
              >
                🗑️ Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};