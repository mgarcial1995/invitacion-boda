export default function Confirmacion({ attending, handleConfirm }) {


  return (
    <section className="py-2 px-6 flex justify-center">
      <div className="relative max-w-md w-full rounded-3xl shadow-xl border border-[#E8E2D9] p-10 text-center overflow-hidden">

        {/* TITULO */}
        <h2 className="mt-10 font-[Playfair_Display] text-3xl italic text-[#9C7A00]">
          Confirmar Asistencia
        </h2>

        {/* TEXTO */}
        {!attending ? (
          <>
            <p className="mt-6 text-[#4B4B4B] font-[Poppins]">
              Nos encantaría contar con tu presencia en este día tan especial.
            </p>
            <p className="mt-3 mb-8 text-sm text-[#6F6F6F] font-[Poppins]">
              Por favor, haz clic en el botón para confirmar.
            </p>
          </>
        ) : (
          <p className="mt-6 text-[#4B4B4B] font-[Poppins] text-base">
            ❤️ ¡Ya has confirmado tu asistencia!  
            <br />
            Nos alegra mucho contar contigo en este día especial.
          </p>
        )}

        {/* BOTÓN */}
        <button
          onClick={handleConfirm}
          disabled={attending}
          className={`
            mt-4 px-7 py-3 rounded-full font-semibold font-[Poppins] shadow-md transition-all
            ${attending
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-b from-[#E4C77F] to-[#B79240] text-white active:scale-95"}
          `}
        >
          {attending ? "Ya confirmaste" : "CONFIRMAR"}
        </button>

        {/* TEXTO FINAL */}
        {!attending && (
          <p className="mt-10 text-[#8A6F00] font-[Playfair_Display] text-lg">
            Te esperamos…
          </p>
        )}
      </div>
    </section>
  );
}
