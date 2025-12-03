import { useState } from "react";
import ModalRegalos from "./ModalRegalos";
import sobre from "../assets/sobre.png";
import tarjeta from "../assets/tarjeta.png";

export default function RegalosTransferencia({
  numeroCuenta,
  yapeQR,
  guestCode,
  onSaveGifts
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

      {/* Abrir modal */}
      <div className="mb-10">
        <h3 className="text-[#A28E67] font-[Playfair_Display] text-2xl mb-4">
          REGALOS
        </h3>

        <img
          src={sobre}
          alt="Sobre"
          className="w-24 mx-auto mb-4 cursor-pointer hover:scale-110 transition"
          onClick={() => setModalOpen(true)}
        />

        <p className="text-[#4B4B4B] font-[Poppins] text-sm">
          Haz clic sobre el ícono para elegir un regalo 🎁
        </p>
      </div>

      {/* Modal */}
      <ModalRegalos
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        guestCode={guestCode}
        onSaveGifts={onSaveGifts}
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
