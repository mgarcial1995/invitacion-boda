import { useEffect, useState } from "react";
import { traerRegalos } from "../services/servicios";

export default function ModalRegalos({ open, onClose, onSaveGifts }) {
  const [gifts, setGifts] = useState([]);
  const [selected, setSelected] = useState([]);

  const fetchGifts = async () => {
    try {
      const data = await traerRegalos();
      setGifts(data);
    } catch (error) {
      console.error("Error cargando regalos:", error);
    }
  };

  useEffect(() => {
    if (!open) return;
    setSelected([]); // Solo reiniciar la selección CUANDO se abre
    fetchGifts();
  }, [open]);

  if (!open) return null;

  const handleToggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    onSaveGifts(selected);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl relative border-[2px] border-[#D4C49A]">
        {/* BOTÓN CERRAR */}
        <button className="absolute right-4 top-4 text-xl" onClick={onClose}>
          ✕
        </button>

        <h2 className="text-2xl font-[Playfair_Display] text-[#A28E67] text-center mb-6">
          Lista de Regalos
        </h2>

        <div className="max-h-80 overflow-y-auto space-y-4 pr-2">
          {gifts.map((gift) => (
            <div
              key={gift.id}
              className={`p-4 rounded-xl border ${
                gift.status === "selected"
                  ? "bg-gray-200 border-gray-300 opacity-60"
                  : "border-[#D4C49A]"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Checkbox solo si está disponible */}
                {gift.status === "available" ? (
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 accent-[#A28E67]"
                    checked={selected.includes(gift.id)}
                    onChange={() => handleToggle(gift.id)}
                  />
                ) : (
                  <span className="mt-1 text-[#A28E67]">🤍</span>
                )}

                <div>
                  <p className="font-semibold">{gift.name}</p>
                  <p className="text-sm text-gray-600">{gift.description}</p>

                  {gift.status === "selected" && (
                    <p className="text-xs mt-1 text-red-600">
                      Ya fue escogido por: {gift.guests?.full_name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN GUARDAR */}
        <button
          onClick={handleSave}
          className="mt-6 w-full bg-gradient-to-b from-[#E4C77F] to-[#B79240] text-white py-3 rounded-full shadow-md font-semibold active:scale-95 transition-all"
        >
          Confirmar regalos seleccionados
        </button>
      </div>
    </div>
  );
}
