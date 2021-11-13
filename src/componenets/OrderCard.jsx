import React, { useEffect } from "react";
import "../css/ordercard.css";

const OrderCard = (props) => {
  // useEffect(() => {
  //   return;
  // }, [props.firstName, props.lastName, props.date]);

  return (
    <div className="card-container">
      <div className="buttons_card-wrapper">
        <i
          className="fas fa-times"
          onClick={() => props.removeOrder(props.orderNumber)}
        ></i>
        <i
          className="fas fa-pencil-alt"
          onClick={() => props.changeToEditForm(props.orderNumber)}
        ></i>
      </div>
      <div className="person-detail">
        <div className="order_number-title">הזמנה {props.orderNumber + 1}</div>
        <div className="detail">פרטים</div>
        <div className="fullname">
          {props.firstName},{props.lastName}
        </div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
};

export default OrderCard;
