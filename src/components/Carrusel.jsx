import { useRef, useState } from "react";

export default function CarruselPolaroid({ fotos = [] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  const next = () => setIndex((i) => (i + 1) % fotos.length);
  const prev = () => setIndex((i) => (i - 1 + fotos.length) % fotos.length);

  const handleStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Caja del carrusel */}
      <div
        className="relative w-[92%] max-w-[420px] h-[75vh] overflow-hidden"
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {fotos.map((foto, i) => (
            <div key={i} className="flex-shrink-0 w-full h-full flex items-center justify-center">
              {/* POLAROID */}
              <div
                className={`
                  bg-white rounded-xl shadow-xl border border-pearl
                  w-[83%] h-[88%] p-3 flex flex-col
                  transform ${i % 2 === 0 ? "rotate-[2deg]" : "rotate-[-2deg]"}
                `}
              >
                {/* Foto */}
                <div className="flex-1 rounded-lg overflow-hidden">
                  <img
                    src={foto.src}
                    alt={`Foto ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Descripción tipo Polaroid */}
                <div className="mt-3 text-center text-smoke text-sm font-texto italic">
                  {foto.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones desktop */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow backdrop-blur-sm"
        >
          ←
        </button>
        <button
          onClick={next}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow backdrop-blur-sm"
        >
          →
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex mt-3 space-x-2">
        {fotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-gold scale-110" : "bg-pearl"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
