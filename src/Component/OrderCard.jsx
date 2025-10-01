// import { UtensilsCrossed } from "lucide-react";
import { use } from "react";
import CurreOrderCard from "./CurreOrderCard";
import CookingCard from "./CookingCard";
import ServeCard from "./ServeCard";

const OrderCard = ({ OrderJson }) => {
  const orders = use(OrderJson);
  console.log(orders);

  return (
    <div className="grid grid-cols-12  ">
      <div className="col-span-7">
        {orders.map((order) => (
          <CurreOrderCard key={order.id} order={order}></CurreOrderCard>
        ))}
      </div>
      <div className="col-span-5 space-y-10" >
        <CookingCard></CookingCard>
        <ServeCard></ServeCard>
      </div>
    </div>
  );
};

export default OrderCard;
