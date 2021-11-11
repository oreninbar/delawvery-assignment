import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import "../css/deliveryList.css";

const DeliveriesList = (props) => {
  const [orders, setOrders] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.orders && console.log(props.orders);
    // props.orders && setOrders([...props.orders]);
    // props.loading && console.log(orders);
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
        {props.orders && (
          <OrderCard
            orderNumber={1}
            firstName={props.orders[0].firstName}
            lastName={props.orders[0].lastName}
            date={props.orders[0].date}
          />
        )}
        {props.ordersNumber === 2 && (
          <OrderCard
            orderNumber={2}
            firstName={props.orders[1].firstName}
            lastName={props.orders[1].lastName}
            date={props.orders[1].date}
          />
        )}
        {props.ordersNumber === 2 &&
          props.orders.map((order, index) => {
            <OrderCard
              key={index}
              orderNumber={index}
              firstName={order.lastName}
              lastName={order.lastName}
              date={order.date}
            />;
          })}
      </div>
    </div>
  );
};

export default DeliveriesList;
