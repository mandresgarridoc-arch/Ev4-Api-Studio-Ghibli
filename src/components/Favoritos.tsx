import type { Favorito } from "../types/Favorito";

interface Props {
  favoritos: Favorito[];
  onEliminar: (id: string) => void;
  onEditar: (id: string, nuevaNota: string) => void;
}

export const Favoritos = ({ favoritos, onEliminar, onEditar }: Props) => {
  return (
    <div style={{ marginTop: "40px", padding: "20px", borderTop: "2px solid #ccc" }}>
      <h2>Mi Colección Personal</h2>
      {favoritos.length === 0 ? <p>No has guardado ninguna película aún.</p> : (
        favoritos.map((fav) => (
          <div key={fav.id} style={{ marginBottom: "15px", padding: "10px", border: "1px solid #ddd" }}>
            <h3>{fav.title}</h3>
            <input 
              value={fav.nota} 
              onChange={(e) => onEditar(fav.id, e.target.value)}
              placeholder="Escribe una nota..."
            />
            <button onClick={() => onEliminar(fav.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};