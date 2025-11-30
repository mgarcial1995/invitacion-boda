import fondo from "../assets/fondo.png";
import copas from "../assets/copas.png";
import novios from "../assets/novios.png";
import vestimenta from "../assets/vestimenta.png";
export default function Itinerario({
  fecha,
  horaCeremonia,
  lugarCeremonia,
  mapsCeremonia,
  horaRecepcion,
  lugarRecepcion,
  mapsRecepcion,
}) {
  const date = new Date(fecha);

  const dia = date.getDate();
  const mes = date.toLocaleDateString("es-ES", { month: "long" }).toUpperCase();
  const año = date.getFullYear();

  return (
    <div
      className="text-center  relative w-[88%] mx-auto rounded-[40px] bg-[#A28E67] text-[#6F6F6F] py-12 px-8 shadow-xl overflow-hidden mt-12"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
    
      {/* CEREMONIA */}
      <div className="text-center mt-6 relative z-10">
        <p className="text-lg font-semibold mt-2">Ceremonia</p>
        <img src={novios} alt="Iglesia" className="w-32 h-32 mx-auto mb-3 opacity-90" />
        <p className="text-3xl font-texto">{horaCeremonia}</p>
        <p className="text-lg font-semibold mt-2">{lugarCeremonia}</p>

        <a href={mapsCeremonia} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-cream text-black-soft px-4 py-2 rounded-full shadow-md font-texto text-sm">
            Llegar a Ceremonia
          </button>
        </a>
      </div>

      {/* SEPARADOR */}
      <div className="w-20 h-[2px] bg-cream/70 mx-auto my-6 rounded-full"></div>

      {/* RECEPCIÓN */}
      <div className="text-center mt-2 relative z-10">
        <p className="text-lg font-semibold mt-2">Recepción</p>
        <img src={copas} alt="Brindis" className="w-24 h-24 mx-auto mb-3 opacity-90" />
        {/* <BrindisIcon className="w-12 h-12 mx-auto mb-3 opacity-90" /> */}
        <p className="text-3xl font-texto">{horaRecepcion}</p>
        <p className="text-lg font-semibold mt-2">{lugarRecepcion}</p>

        <a href={mapsRecepcion} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-cream text-black-soft px-4 py-2 rounded-full shadow-md font-texto text-sm">
            Llegar a Recepción
          </button>
        </a>
      </div>

      {/* SEPARADOR */}
      <div className="w-20 h-[2px] bg-cream/70 mx-auto my-6 rounded-full"></div>

      {/* VESTIMENTA */}
      <div className="text-center mt-2 relative z-10">
        <p className="text-lg font-semibold mt-2">Código de vestimenta</p>
        <img src={vestimenta} alt="vestimenta" className="w-32 h-32 mx-auto mb-3 opacity-90" />
        <p className="text-3xl font-texto">Formal</p>

      </div>

    </div>
  );
}
