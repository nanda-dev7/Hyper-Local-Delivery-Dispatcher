import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

import { getOrders } from "../../api/orderApi";
import { getPartners } from "../../api/userApi";
import { assignDelivery } from "../../api/deliveryApi";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const ordersRes = await getOrders();
      const partnersRes = await getPartners();

      setOrders(ordersRes.data);
      setPartners(partnersRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAssign = async (
    orderId,
    partnerId
  ) => {
    if (!partnerId) return;

    try {
      await assignDelivery(orderId, partnerId);

      alert("Delivery Assigned");

      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card>
          <h3 className="text-lg font-semibold">
            Total Orders
          </h3>

          <p className="text-3xl font-bold">
            {orders.length}
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">
            Partners
          </h3>

          <p className="text-3xl font-bold">
            {partners.length}
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">
            Pending Orders
          </h3>

          <p className="text-3xl font-bold">
            {
              orders.filter(
                (o) => o.status === "pending"
              ).length
            }
          </p>
        </Card>
      </div>

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

                <p>
                  <strong>Parcel:</strong>{" "}
                  {order.parcelType}
                </p>

                <p>
                  <strong>Weight:</strong>{" "}
                  {order.weight} kg
                </p>
              </div>

              <Badge status={order.status} />
            </div>

            {order.status === "pending" && (
              <div className="mt-4">
                <select
                  className="border rounded px-3 py-2"
                  defaultValue=""
                  onChange={(e) =>
                    handleAssign(
                      order._id,
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Select Partner
                  </option>

                  {partners.map((partner) => (
                    <option
                      key={partner._id}
                      value={partner._id}
                    >
                      {partner.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;