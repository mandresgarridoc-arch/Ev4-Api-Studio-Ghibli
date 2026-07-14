interface Props {
  busqueda: string;
  setBusqueda: (texto: string) => void;
}

export const Buscador = ({ busqueda, setBusqueda }: Props) => {
  return (
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
  );
};