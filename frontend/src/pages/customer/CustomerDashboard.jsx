import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Badge from "../../components/ui/Badge";

import {
  createOrder,
  getOrders,
} from "../../api/orderApi";

const CustomerDashboard = () => {
  const [orders, setOrders] = useState([]);

  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
    parcelType: "",
    weight: "",
  });

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const response = await getOrders();
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createOrder(formData);

      setFormData({
        pickupLocation: "",
        dropLocation: "",
        parcelType: "",
        weight: "",
      });

      loadOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout title="Customer Dashboard">
      <Card>
        <h2 className="text-xl font-semibold mb-4">
          Create Order
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <Input
            placeholder="Pickup Location"
            value={formData.pickupLocation}
            onChange={(e) =>
              setFormData({
                ...formData,
                pickupLocation: e.target.value,
              })
            }
          />

          <Input
            placeholder="Drop Location"
            value={formData.dropLocation}
            onChange={(e) =>
              setFormData({
                ...formData,
                dropLocation: e.target.value,
              })
            }
          />

          <Input
            placeholder="Parcel Type"
            value={formData.parcelType}
            onChange={(e) =>
              setFormData({
                ...formData,
                parcelType: e.target.value,
              })
            }
          />

          <Input
            type="number"
            placeholder="Weight"
            value={formData.weight}
            onChange={(e) =>
              setFormData({
                ...formData,
                weight: e.target.value,
              })
            }
          />

          <Button type="submit">
            Create Order
          </Button>
        </form>
      </Card>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">
          My Orders
        </h2>

        <div className="grid gap-4">
          {orders.map((order) => (
            <Card key={order._id}>
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <strong>Pickup:</strong>{" "}
                    {order.pickupLocation}
                  </p>

                  <p>
                    <strong>Drop:</strong>{" "}
                    {order.dropLocation}
                  </p>
                </div>

                <Badge
                  status={order.status}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;