import React, { use, useState } from "react";
import Navbar from "../Navbar";
import TitleSection from "../TitleSection";
import OrderCard from "../OrderCard";
import CurrentOrdersCard from "../CurrentOrdersCard ";

const OrderJson = fetch("/orders.json").then((res) => res.json());

const Root = () => {
  const allOrders = use(OrderJson);

  // State গুলো
  const [initialOrder, setInitialOrder] = useState(allOrders);
  const [cardOrder, setCardOrder] = useState([]);
  const [readyServe, setReadyServe] = useState([]);

  // Cook এ পাঠানো
  const handleOrder = (order) => {
    const isExist = cardOrder.find((item) => item.id === order.id);
    if (isExist) {
      alert("Already Cooked");
      return;
    }

    setCardOrder([...cardOrder, order]);

    // ✅ এখানে initialOrder থেকে remove
    const remaining = initialOrder.filter((item) => item.id !== order.id);
    setInitialOrder(remaining);
  };

  // Serve এ পাঠানো
  const handleServe = (order) => {
    setReadyServe([...readyServe, order]);

    // Cooking থেকে রিমুভ
    const remainingCard = cardOrder.filter((item) => item.id !== order.id);
    setCardOrder(remainingCard);
  };

  return (
    <div className="container mx-auto p-4 space-y-10 ">
      <Navbar />
      <TitleSection>{"KitchenRoom"}</TitleSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <CurrentOrdersCard
          initialOrder={initialOrder}
          cardOrder={cardOrder}
          readyServe={readyServe}
        />
      </div>

      <OrderCard
        initialOrder={initialOrder}   // ✅ পাঠালাম
        cardOrder={cardOrder}
        handleOrder={handleOrder}
        handleServe={handleServe}
        readyServe={readyServe}
      />
    </div>
  );
};

export default Root;
