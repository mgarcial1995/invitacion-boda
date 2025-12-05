import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { traerRegalos } from "../services/servicios";

export default function ModalRegalos({ open, onClose, onSaveGifts }) {
  const [gifts, setGifts] = useState([]);
  const [selected, setSelected] = useState([]);
  const [otherSelected, setOtherSelected] = useState(false);
  const [otherGiftText, setOtherGiftText] = useState("");

  useEffect(() => {
    if (open) {
      traerRegalos().then(setGifts);
      document.body.style.overflow = "hidden"; // 🔒 Bloquear scroll
    } else {
      document.body.style.overflow = ""; // 🔓 Restaurar scroll
    }
  }, [open]);

  if (!open) return null;

  const content = (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl relative border-[2px] border-[#D4C49A]">
        
        {/* ❌ Cerrar */}
        <button className="absolute right-4 top-4 text-xl" onClick={onClose}>
          ✕
        </button>

        <h2 className="text-2xl font-[Playfair_Display] text-[#A28E67] text-center mb-6">
          Lista de Regalos
        </h2>

        <div className="max-h-80 overflow-y-auto space-y-4 pr-2">
          {gifts.map((gift) => (
            <div key={gift.id} className="p-4 rounded-xl border border-[#D4C49A]">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 accent-[#A28E67]"
                  checked={selected.includes(gift.id)}
                  onChange={() =>
                    setSelected((prev) =>
                      prev.includes(gift.id)
                        ? prev.filter((x) => x !== gift.id)
                        : [...prev, gift.id]
                    )
                  }
                />

                <div>
                  <p className="font-semibold">{gift.name}</p>
                  <p className="text-sm text-gray-600">{gift.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Otros */}
          <div className="p-4 rounded-xl border border-[#D4C49A]">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 accent-[#A28E67]"
                checked={otherSelected}
                onChange={() => setOtherSelected(!otherSelected)}
              />

              <div className="w-full">
                <p className="font-semibold">Otros</p>
                <p className="text-sm text-gray-600">
                  Si deseas regalar algo diferente, escríbelo aquí.
                </p>

                {otherSelected && (
                  <textarea
                    className="w-full mt-2 border border-[#D4C49A] rounded-lg p-2 text-sm"
                    rows={3}
                    value={otherGiftText}
                    onChange={(e) => setOtherGiftText(e.target.value)}
                    placeholder="Escribe tu regalo..."
                  ></textarea>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            onSaveGifts(selected, otherSelected ? otherGiftText : null);
            onClose();
          }}
          className="mt-6 w-full bg-gradient-to-b from-[#E4C77F] to-[#B79240] text-white py-3 rounded-full shadow-md font-semibold"
        >
          Confirmar regalos
        </button>

      </div>
    </div>
  );

  return createPortal(content, document.getElementById("modal-root"));
}
