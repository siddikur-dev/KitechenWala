import CurreOrderCard from "./CurreOrderCard";
import CookingCard from "./CookingCard";
import ServeCard from "./ServeCard";

const OrderCard = ({
  initialOrder, // get initial data here
  handleOrder,
  cardOrder,
  handleServe,
  readyServe,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* Current Orders */}
      <div className="col-span-7">
        {initialOrder.map((order) => (
          <CurreOrderCard
            handleOrder={handleOrder}
            key={order.id}
            order={order}
          />
        ))}
      </div>

      {/* Cooking */}
      <div className="col-span-5 space-y-10">
        <h2 className="text-3xl font-bold">Cooking Now</h2>
        {cardOrder.map((card) => (
          <CookingCard order={card} key={card.id} handleServe={handleServe} />
        ))}

        {/* Serve */}
        <h2 className="text-3xl font-bold">Ready Serve</h2>
        {readyServe.map((serveFood) => (
          <ServeCard order={serveFood} key={serveFood.id} />
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
