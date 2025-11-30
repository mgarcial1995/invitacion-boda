export default function Fecha({ fecha, foto }) {
  const date = new Date(fecha);

  const dia = date.getDate();
  const mes = date
    .toLocaleDateString("es-ES", { month: "short" })
    .toUpperCase();
  const año = date.getFullYear().toString().slice(-2);

  return (
    <div className="relative w-full flex flex-col items-center text-center my-12">
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
