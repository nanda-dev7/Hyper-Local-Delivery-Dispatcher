import api from "./axios";

export const assignDelivery = async (
  orderId,
  partnerId
) => {
  const response = await api.post(
    "/deliveries",
    {
      orderId,
      partnerId,
    }
  );

  return response.data;
};

export const getDeliveries = async () => {
  const response = await api.get(
    "/deliveries"
  );

  return response.data;
};

export const acceptDelivery = async (
  deliveryId
) => {
  const response = await api.patch(
    `/deliveries/${deliveryId}/accept`
  );

  return response.data;
};

export const completeDelivery = async (
  deliveryId
) => {
  const response = await api.patch(
    `/deliveries/${deliveryId}/complete`
  );

  return response.data;
};