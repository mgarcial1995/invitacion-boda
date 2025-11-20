export default function SeparadorCorazon() {
  return (
    <div className="w-full flex items-center justify-center my-6 select-none">
      <div className="flex items-center gap-2 text-gold">
        {/* Línea izquierda */}
        <div className="h-[2px] w-16 bg-gold/60 rounded-full"></div>

        {/* Icono central */}
        <div className="flex items-center text-gold text-xl">
          <span className="mx-1">❧</span>
          <span className="mx-1">♥</span>
          <span className="mx-1">❧</span>
        </div>

        {/* Línea derecha */}
        <div className="h-[2px] w-16 bg-gold/60 rounded-full"></div>
      </div>
    </div>
  );
}
