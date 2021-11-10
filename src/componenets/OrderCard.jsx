import React from "react";
import "../css/ordercard.css";

const OrderCard = () => {
  return (
    <div className="card-container">
      <div className="buttons_card-wrapper">
        <i className="fas fa-times"></i>
        <i className="fas fa-pencil-alt"></i>
      </div>
      <div className="person-detail">
        <div className="order_number-title">הזמנה 1</div>
        <div className="detail">פרטים</div>
        <div className="fullname">אורן צ'אקי</div>
        <div className="date">02/03/2021</div>
      </div>
    </div>
  );
};

export default OrderCard;
