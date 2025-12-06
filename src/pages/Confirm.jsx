import { useEffect, useState } from "react";
import { traerInvitados } from "../services/servicios"; // ← tu endpoint para lista completa

export default function AdminInvitados() {
  const [invitados, setInvitados] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInvitados = async () => {
    try {
      const data = await traerInvitados(); // devuelve la estructura nueva
      setInvitados(data.guests);
    } catch (error) {
      console.error("Error cargando invitados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvitados();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Cargando invitados...</p>;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-6 font-[Poppins]">
      <h1 className="text-3xl font-[Playfair_Display] text-center text-[#9C7A00] mb-8">
        Lista de Invitados Confirmados
      </h1>

      <div className="space-y-6">
        {invitados.map((guest) => (
          <div
            key={guest.id}
            className="bg-white rounded-2xl shadow p-6 border border-[#E4D9B5]"
          >
            <h2 className="text-xl font-semibold text-[#6B5B3A]">
              {guest.full_name}
            </h2>

            <p className="text-sm text-gray-600">
              Código: <strong>{guest.code}</strong>
            </p>

            <p className="text-sm mt-2">
              Asistencia:{" "}
              <span
                className={
                  guest.attending ? "text-green-700 font-bold" : "text-red-600"
                }
              >
                {guest.attending ? "Sí asistirá" : "Sin confirmar"}
              </span>
            </p>

            {guest.confirmed_at && (
              <p className="text-sm text-gray-600">
                Confirmado el:{" "}
                {new Date(guest.confirmed_at).toLocaleString("es-PE")}
              </p>
            )}

            {/* DEDICATORIA */}
            {guest.dedication && (
              <div className="mt-4 p-4 bg-[#FFF8E8] rounded-xl border border-[#E3D3A6]">
                <p className="text-sm text-[#8A6C42]">💛 Dedicatoria:</p>
                <p className="text-gray-700 mt-1">{guest.dedication}</p>
              </div>
            )}

            {/* REGALOS SELECTOR */}
            {guest.gifts_selected_details?.length > 0 && (
              <div className="mt-4 p-4 bg-[#F7F4EA] rounded-xl border border-[#D9CBA6]">
                <p className="text-sm text-[#8A6C42] font-semibold">
                  🎁 Regalos elegidos:
                </p>

                <ul className="mt-2 space-y-1">
                  {guest.gifts_selected_details.map((gift) => (
                    <li key={gift.id} className="text-gray-700 text-sm">
                      • <strong>{gift.name}</strong>
                      <br />
                      <span className="text-xs text-gray-500">
                        {gift.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* OTRO REGALO */}
            {guest.other_gift && (
              <div className="mt-4 p-4 bg-[#FFF2F2] rounded-xl border border-[#E7B5B5]">
                <p className="text-sm text-[#995858]">🎁 Regalo adicional:</p>
                <p className="text-gray-700">{guest.other_gift}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
