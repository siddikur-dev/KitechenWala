// import { UtensilsCrossed } from "lucide-react";
import { use } from "react";
import CurreOrderCard from "./CurreOrderCard";
import CookingCard from "./CookingCard";
import ServeCard from "./ServeCard";

const OrderCard = ({
  OrderJson,
  handleOrder,
  cardOrder,
  handleServe,
  readyServe,
}) => {
  const orders = use(OrderJson);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5  ">
      <div className="col-span-7">
        {orders.map((order) => (
          <CurreOrderCard
            handleOrder={handleOrder}
            key={order.id}
            order={order}
          ></CurreOrderCard>
        ))}
      </div>
      <div className="col-span-5 space-y-10">
        <h2 className="text-3xl font-bold">Cooking Now</h2>
        {cardOrder.map((card) => (
          <CookingCard
            order={card}
            key={card.id}
            handleServe={handleServe}
          ></CookingCard>
        ))}
        <h2 className="text-3xl font-bold">Ready Serve</h2>

        {readyServe.map((serveFood) => (
          <ServeCard order={serveFood}></ServeCard>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
