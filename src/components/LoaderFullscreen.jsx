export default function LoaderFullscreen({ mensaje = "Cargando..." }) {
  return (
    <div className="fixed inset-0 bg-[#FAF7F2]/80 backdrop-blur-sm flex flex-col items-center justify-center z-[9999]">

      {/* Animación círculo */}
      <div className="w-20 h-20 border-4 border-gold border-t-transparent rounded-full animate-spin mb-6"></div>

      {/* Mensaje */}
      <p className="text-[#A28E67] font-[Playfair_Display] text-xl italic">
        {mensaje}
      </p>
    </div>
  );
}
