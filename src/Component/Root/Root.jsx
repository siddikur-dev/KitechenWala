import React, { useState } from "react";
import Navbar from "../Navbar";
import TitleSection from "../TitleSection";
import OrderCard from "../OrderCard";
import CurrentOrdersCard from "../CurrentOrdersCard ";

const OrderJson = fetch("/orders.json").then((res) => res.json());
const Root = () => {
  // Show Title Increase Decrease
  const [cardOrder, setCardOrder] = useState([]);
  const handleOrder = (order) => {
    const newOrder = [...cardOrder, order];
    setCardOrder(newOrder);
  };

  // ready to serve card show  from cooking card button card data
  const [readyServe, setReadyServe] = useState([]);
  const handleServe = (order) => {
    const newServe = [...readyServe, order];
    setReadyServe(newServe);
  };

  return (
    <div className="container mx-auto p-4 space-y-10 ">
      <Navbar></Navbar>
      <TitleSection>{"KitchenRoom"}</TitleSection>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <CurrentOrdersCard
          OrderJson={OrderJson}
          cardOrder={cardOrder}
          readyServe={readyServe}
        ></CurrentOrdersCard>
      </div>
      <OrderCard
      
        cardOrder={cardOrder}
        handleOrder={handleOrder}
        OrderJson={OrderJson}
        handleServe={handleServe}
        readyServe={readyServe}
      ></OrderCard>
    </div>
  );
};

export default Root;
