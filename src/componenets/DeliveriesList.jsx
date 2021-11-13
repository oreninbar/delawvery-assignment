import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import "../css/deliveryList.css";

const DeliveriesList = (props) => {
  useEffect(() => {
    props.orders && console.log(props.orders);
  }, [props.orders, props.loading]);

  return (
    <div className="list-container">
      <div className="list-titles-wrapper">
        <h2 className="orders-title">רשימת ההזמנות</h2>
        <div className="orders-amount">
          <span> {props.ordersNumber} </span>
          :מספר ההזמנות
        </div>
      </div>
      <div className="order_list_cards-container">
        {props.orders.map((order, index) => (
          <OrderCard
            key={index}
            orderNumber={index}
            firstName={order.firstName}
            lastName={order.lastName}
            date={order.date}
            removeOrder={props.removeOrder}
            editOrder={props.editOrder}
            changeToEditForm={props.changeToEditForm}
          />
        ))}
      </div>
    </div>
  );
};

export default DeliveriesList;
