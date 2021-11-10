import React from "react";
import OrderCard from "./OrderCard";
import "../css/deliveryList.css";

const DeliveriesList = () => {
  return (
    <div className="list-container">
      <div className="list-titles-wrapper">
        <h2 className="orders-title">רשימת ההזמנות</h2>
          <div className="orders-amount">
            <span> 3 </span>
            :מספר ההזמנות
        </div>
      </div>
      <div className="order_list_cards-container">
        <OrderCard />
      </div>
    </div>
  );
};

export default DeliveriesList;
