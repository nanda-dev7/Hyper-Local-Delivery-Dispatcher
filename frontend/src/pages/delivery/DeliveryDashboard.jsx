import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

import {
  getDeliveries,
  acceptDelivery,
  completeDelivery,
} from "../../api/deliveryApi";

const DeliveryDashboard = () => {
  const [deliveries, setDeliveries] =
    useState([]);

  useEffect(() => {
    loadDeliveries();
  }, []);

  const loadDeliveries = async () => {
    try {
      const response =
        await getDeliveries();

      setDeliveries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccept = async (
    deliveryId
  ) => {
    await acceptDelivery(deliveryId);
    loadDeliveries();
  };

  const handleComplete = async (
    deliveryId
  ) => {
    await completeDelivery(
      deliveryId
    );

    loadDeliveries();
  };

  return (
    <DashboardLayout title="Delivery Dashboard">
      <div className="grid gap-4">
        {deliveries.map((delivery) => (
          <Card key={delivery._id}>
            <div className="flex justify-between">
              <div>
                <p>
                  <strong>Pickup:</strong>{" "}
                  {
                    delivery.order
                      ?.pickupLocation
                  }
                </p>

                <p>
                  <strong>Drop:</strong>{" "}
                  {
                    delivery.order
                      ?.dropLocation
                  }
                </p>
              </div>

              <Badge
                status={delivery.status}
              />
            </div>

            <div className="mt-4">
              {delivery.status ===
                "assigned" && (
                <Button
                  onClick={() =>
                    handleAccept(
                      delivery._id
                    )
                  }
                >
                  Accept Delivery
                </Button>
              )}

              {delivery.status ===
                "accepted" && (
                <Button
                  onClick={() =>
                    handleComplete(
                      delivery._id
                    )
                  }
                >
                  Mark Delivered
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default DeliveryDashboard;