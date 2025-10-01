import React from "react";
import { ChefHat, CookingPot, ScrollText, TicketCheck } from "lucide-react";

const CurrentOrdersCard = ({ cardOrder, readyServe, initialOrder }) => {
  return (
    <>
      <div className="border-4 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{initialOrder.length}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Currently Cooking
            <h2 className="text-6xl font-bold">{cardOrder.length}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted rounded-2xl border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <TicketCheck className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Ready To Serve
            <h2 className="text-6xl font-bold">{readyServe.length}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentOrdersCard;
