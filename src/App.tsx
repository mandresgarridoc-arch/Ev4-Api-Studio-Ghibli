import { useEffect, useState } from "react";
import type { Pelicula } from "./types/Pelicula";
import type { Favorito } from "./types/Favorito";
import { obtenerPeliculas } from "./services/api";
import { ElementoCard } from "./components/ElementoCard";
import { Favoritos } from "./components/Favoritos";

function App() {
  // 1. Estados principales de la API y UI
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [busqueda, setBusqueda] = useState<string>("");

  // 2. Estado para el CRUD de Favoritos (Local Storage)
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);

  // 3. Efecto: Cargar datos de la API y leer Local Storage al iniciar (Read)
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setCargando(true);
        setError("");
        const data = await obtenerPeliculas();
        setPeliculas(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error inesperado");
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();

    // Recuperar la colección guardada previamente
    const guardados = localStorage.getItem("misFavoritos");
    if (guardados) {
      setFavoritos(JSON.parse(guardados));
    }
  }, []);

  // 4. Efecto: Sincronizar el estado con el Local Storage (Persistencia)
  useEffect(() => {
    localStorage.setItem("misFavoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // 5. Funciones CRUD para la colección local[cite: 1]
  const agregarFavorito = (pelicula: Pelicula) => {
    // Evita duplicados validando si la película ya existe en la lista[cite: 1]
    if (!favoritos.find((f) => f.id === pelicula.id)) {
      setFavoritos([...favoritos, { ...pelicula, nota: "" }]);
    } else {
      alert("Esta película ya está en tu colección.");
    }
  };

  const eliminarFavorito = (id: string) => {
    setFavoritos(favoritos.filter((f) => f.id !== id));
  };

  const editarNota = (id: string, nuevaNota: string) => {
    setFavoritos(
      favoritos.map((f) => (f.id === id ? { ...f, nota: nuevaNota } : f))
    );
  };

  // 6. Filtrado de películas por búsqueda
  const peliculasFiltradas = peliculas.filter((pelicula) =>
    pelicula.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  // 7. Renderizado
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>🎬 Explorador de Películas de Studio Ghibli</h1>

      <input
        type="text"
        placeholder="Buscar película por título..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "300px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {cargando && <p>Cargando la magia de Ghibli...</p>}

      {error && (
        <div style={{ color: "red", border: "1px solid red", padding: "10px", borderRadius: "4px" }}>
          <p>Ocurrió un problema: {error}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      )}

      {!cargando && !error && peliculasFiltradas.length === 0 && (
        <p>No se encontraron películas con ese nombre.</p>
      )}

      {/* Sección de la Colección (Favoritos) */}
      <Favoritos 
        favoritos={favoritos} 
        onEliminar={eliminarFavorito} 
        onEditar={editarNota} 
      />

      <hr style={{ margin: "40px 0" }} />

      <h2>Catálogo de Películas</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
        {peliculasFiltradas.map((pelicula) => (
          <ElementoCard 
            key={pelicula.id} 
            pelicula={pelicula} 
            onAgregar={() => agregarFavorito(pelicula)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;