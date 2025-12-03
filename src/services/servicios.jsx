import apiClient from "./apiClient";

export const traerDatosInvitado = async (code) => {
  const response = await apiClient.get(`/guests/${code}`);
  return response.data;
};

export const confirmarAsistencia = async ({ code, attending }) => {
  const response = await apiClient.patch(`/guests/confirm`, {
    code,
    attending
  });
  return response.data;
};
