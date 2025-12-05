import apiClient from "./apiClient";

export const traerDatosInvitado = async (code) => {
  const response = await apiClient.get(`/guests/${code}`);
  return response.data;
};

export const confirmarAsistencia = async ({
  code,
  attending,
  gifts,
  other_gift,
  dedication,
}) => {
  const response = await apiClient.patch(`/guests/confirm`, {
    code,
    attending,
    gifts,
    other_gift,
    dedication,
  });
  return response.data;
};

export const traerRegalos = async () => {
  const response = await apiClient.get("/gifts");
  return response.data;
};

export const actualizarDedicatoria = async ({
  code,
  dedication,
}) => {
  const response = await apiClient.patch(`/guests/dedication`, {
    code,
    dedication,
  });
  return response.data;
};