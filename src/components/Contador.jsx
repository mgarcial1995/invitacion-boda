import { useEffect, useState } from "react";

export default function Contador({ fechaObjetivo }) {
  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const evento = new Date(fechaObjetivo).getTime();
      const ahora = new Date().getTime();
      const diferencia = evento - ahora;

      if (diferencia <= 0) {
        clearInterval(interval);
        setTiempo({
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0,
        });
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
      const segundos = Math.floor((diferencia / 1000) % 60);

      setTiempo({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(interval);
  }, [fechaObjetivo]);

  return (
    <div className="text-center my-8">
      <h3 className="text-gold font-titulo text-3xl mb-4">Faltan:</h3>

      <div className="flex justify-center gap-6 text-black-soft">
        {/* DÍAS */}
        <div className="text-center">
          <p className="text-4xl font-bold">{tiempo.dias}</p>
          <span className="text-smoke text-sm">días</span>
        </div>

        {/* HORAS */}
        <div className="text-center">
          <p className="text-4xl font-bold">{tiempo.horas}</p>
          <span className="text-smoke text-sm">hrs</span>
        </div>

        {/* MINUTOS */}
        <div className="text-center">
          <p className="text-4xl font-bold">{tiempo.minutos}</p>
          <span className="text-smoke text-sm">min</span>
        </div>
      </div>
    </div>
  );
}
