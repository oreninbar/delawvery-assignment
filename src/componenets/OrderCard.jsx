import React ,{useState,useEffect}from "react";
import "../css/ordercard.css";

const OrderCard = (props) => {
  useEffect(() => {
    console.log(props.orderNumber);
    console.log(props.firstName);
  }, [props.orders])

  return (
    <div className="card-container">
      <div className="buttons_card-wrapper">
        <i className="fas fa-times"></i>
        <i className="fas fa-pencil-alt"></i>
      </div>
      <div className="person-detail">
        <div className="order_number-title">הזמנה {props.orderNumber}</div>
        <div className="detail">פרטים</div>
        <div className="fullname">{props.firstName},{props.lastName}</div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
};

export default OrderCard;
