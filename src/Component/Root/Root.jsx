import React from "react";
import Navbar from "../Navbar";
import TitleSection from "../TitleSection";
import OrderCard from "../OrderCard";
import CurrentOrdersCard from "../CurrentOrdersCard ";

const OrderJson = fetch("/orders.json").then((res) => res.json());
const Root = () => {
  return (
    <div className="container mx-auto p-4 space-y-10 ">
      <Navbar></Navbar>
      <TitleSection>{"KitchenRoom"}</TitleSection>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <CurrentOrdersCard></CurrentOrdersCard>
      </div>
      <OrderCard OrderJson={OrderJson}></OrderCard>
    </div>
  );
};

export default Root;
