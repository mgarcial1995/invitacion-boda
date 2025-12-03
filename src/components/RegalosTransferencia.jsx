import { useState } from "react";
import ModalRegalos from "./ModalRegalos";
import sobre from "../assets/sobre.png";
import tarjeta from "../assets/tarjeta.png";

export default function RegalosTransferencia({
  numeroCuenta,
  yapeQR,
  guestCode,
  onSaveGifts,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-2 px-8 text-center">
      <h2 className="font-[Playfair_Display] text-3xl text-[#9C7A00] italic mb-6">
        Regalos & Transferencias
      </h2>

      <p className="text-[#4B4B4B] font-[Poppins] text-sm leading-relaxed mb-10">
        Tu presencia es el mejor regalo, pero si deseas obsequiarnos algo más,
        será recibido con mucho amor.
      </p>

      <div className="flex flex-col items-center mb-10">
        <button
          onClick={() => setModalOpen(true)}
          className="
      w-28 h-28
      rounded-full
      bg-gradient-to-b from-[#E4C77F] to-[#B79240]
      shadow-lg
      flex items-center justify-center
      hover:scale-105 active:scale-95 transition
      border-2 border-white
      cursor-pointer animate-[pulseGift_1.8s_ease-in-out_infinite]
    "
        >
          <img src={sobre} className="w-14 drop-shadow-md" />
        </button>

        <p className="mt-3 text-[#A28E67] font-[Playfair_Display] text-xl italic">
          Elegir regalos
        </p>
      </div>
      {/* Modal */}
      <ModalRegalos
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        guestCode={guestCode}
        onSaveGifts={(gifts, otherGiftText) => {
          console.log("Regalos seleccionados:", gifts, otherGiftText);
          onSaveGifts(gifts, otherGiftText);
        }}
      />
      {/* TRANSFERENCIA */}
      <div className="mb-14">
        <h3 className="text-[#A28E67] font-[Playfair_Display] text-2xl mb-4">
          TRANSFERENCIA
        </h3>

        <img src={tarjeta} alt="Tarjeta" className="w-20 mx-auto mb-4" />

        <p className="text-[#4B4B4B] font-[Poppins] text-sm mb-6">
          Si deseas apoyarnos con una transferencia:
        </p>

        <p className="font-[Poppins] text-[#5A4F3A] text-base select-all mb-3">
          {numeroCuenta}
        </p>

        {yapeQR && (
          <div className="mt-8">
            <img
              src={yapeQR}
              alt="QR Yape"
              className="w-36 mx-auto rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </section>
  );
}
