export default function Fecha({ fecha, foto }) {
  const date = new Date(fecha);

  const dia = date.getDate();
  const mes = date
    .toLocaleDateString("es-ES", { month: "short" })
    .toUpperCase();
  const año = date.getFullYear().toString().slice(-2);

  return (
    <div className="relative w-full flex flex-col items-center text-center my-12">
      {/* FOTO CIRCULAR */}
      {/* <div
        className="
          w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden
          shadow-lg bg-white-soft
          border-[4px] border-gold/40
          relative
          animate-fadeInSlow
        "
      >
        <img src={foto} className="w-full h-full object-cover" />

        <div className="absolute inset-0 rounded-full shadow-[0_0_15px_3px_rgba(212,175,55,0.45)]"></div>
      </div> */}

      {/* FECHA */}
      <div
        className="
          mt-6 flex flex-col items-center leading-none relative
          animate-slideUp
        "
      >
        <span className="text-[70px] md:text-[90px] font-titulo font-semibold text-black-soft drop-shadow-sm">
          {dia}
        </span>

        <span className="text-[34px] md:text-[50px] font-titulo tracking-[4px] text-black-soft opacity-90 drop-shadow-sm">
          {mes}
        </span>

        <span className="text-[70px] md:text-[90px] font-titulo font-semibold text-black-soft drop-shadow-sm">
          {año}
        </span>

        {/* Línea decorativa elegante */}
        <div className="w-24 h-[2px] bg-gold/60 mt-4 rounded-full"></div>
      </div>
    </div>
  );
}
