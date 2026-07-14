interface Props {
  busqueda: string;
  setBusqueda: (texto: string) => void;
}

export const Buscador = ({ busqueda, setBusqueda }: Props) => {
  return (
    <input
      className="input-estetico"
      type="text"
      placeholder="🔍 Buscar película por título..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      style={{
        padding: "12px 15px",
        marginBottom: "30px",
        width: "100%",
        maxWidth: "400px",
        borderRadius: "8px",
      }}
    />
  );
};