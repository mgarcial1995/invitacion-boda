import { useState } from "react";
import sobre from "../assets/sobre.png";
import tarjeta from "../assets/tarjeta.png";

export default function RegalosTransferencia({ numeroCuenta, yapeQR }) {
  const [regalo, setRegalo] = useState("");

  return (
    <section className="py-2 px-8 text-center">
      <h2 className="font-[Playfair_Display] text-3xl text-[#9C7A00] italic mb-10">
        Regalos & Transferencias
      </h2>
      <p className="text-[#4B4B4B] font-[Poppins] text-sm leading-relaxed">
        Tu presencia es nuestro mejor regalo, pero si gustas hacernos algun presente, aqui dejamos nuestro sobre digital.
      </p>
      {/* REGALOS */}
      <div className="mb-14 mt-12">
        <h3 className="text-[#A28E67] font-[Playfair_Display] text-2xl mb-4">
          REGALOS
        </h3>

        <img src={sobre} alt="Sobre" className="w-24 mx-auto mb-4" />

        <p className="text-[#4B4B4B] font-[Poppins] text-sm leading-relaxed">
          Puedes apoyarnos con algunas cosas para nuestro nuevo hogar a través de nuestra lista de regalos.
        </p>
      </div>

      <div className="mb-14">
        <h3 className="text-[#A28E67] font-[Playfair_Display] text-2xl mb-4">
          TRANSFERENCIA
        </h3>

        <img src={tarjeta} alt="Tarjeta" className="w-20 mx-auto mb-4" />

        <p className="text-[#4B4B4B] font-[Poppins] text-sm leading-relaxed mb-6">
          Si deseas apoyarnos con una transferencia, aquí tienes nuestros datos:
        </p>

        <p className="font-[Poppins] text-[#5A4F3A] text-base select-all mb-3">
          {numeroCuenta}
        </p>

        {/* <button
          onClick={() => navigator.clipboard.writeText(numeroCuenta)}
          className="bg-gradient-to-b from-[#E4C77F] to-[#B79240] text-white font-semibold px-6 py-2 rounded-full shadow-md active:scale-95 transition-all"
        >
          Copiar número
        </button> */}

        {/* QR */}
        {yapeQR && (
          <div className="mt-8">
            <p className="text-[#6B6B6B] text-sm mb-2">
              También puedes usar Yape:
            </p>
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
