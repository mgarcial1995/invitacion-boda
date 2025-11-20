export default function ItinerarioVertical({ eventos = [] }) {
  return (
    <div className="relative w-full px-10 py-8">

      {/* Línea vertical */}
      <div className="absolute left-[33px] top-0 h-full w-[2px] bg-gold/50"></div>

      {eventos.map((ev, i) => (
        <div key={i} className="relative flex items-start mb-10">

          {/* Punto */}
          <div className="w-4 h-4 rounded-full bg-gold border-2 border-cream mt-1 mr-6 z-10"></div>

          {/* Contenido */}
          <div>
            <p className="font-titulo text-xl text-black-soft">{ev.titulo}</p>
            <p className="text-sm text-smoke">{ev.hora}</p>

            {/* icono opcional */}
            {ev.icono && (
              <img
                src={ev.icono}
                className="w-12 opacity-90 mt-2"
                alt="icono"
              />
            )}
          </div>

        </div>
      ))}

    </div>
  );
}
