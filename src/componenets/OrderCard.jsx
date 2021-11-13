import React, { useEffect } from "react";
import "../css/ordercard.css";

const OrderCard = (props) => {
  function reverse(s) {
    let tempArr = [...s];
    let year = tempArr.splice(0, 4);
    let month = tempArr.splice(1, 2);
    let day = tempArr.splice(2, 2);
    tempArr.splice(0, 2);
    return `${day[0]}${day[1]}/${month[0]}${month[1]}/${year[0]}${year[1]}${year[2]}${year[3]}`;
  }

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
        <div className="date">{reverse(props.date)}</div>
      </div>
    </div>
  );
};

export default OrderCard;
