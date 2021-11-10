import React from "react";
import '../css/deliveryForm.css'

const DeliveryForm = () => {
  return (
    <div className="form-container">
      <div className="neworder-title">הזמנה חדשה</div>
      <form  className="form">
        <div className="input-wrapper privat-name">
          <label htmlFor="userName " className="form-label">
            שם פרטי
          </label>
          <input type="text" className="form-private-name form-input" />
        </div>
        <div className="input-wrapper family-name">
          <label htmlFor="userFamily" className="form-label">
            שם משפחה
          </label>
          <input type="text" className="form-family-name form-input" />
        </div>
        <div className="input-wrapper date">
          <label htmlFor="date" className="form-label">תאריך</label>
          <input type="date" className="form-date form-input"  />
        </div>
        <button className="form-input-btn" type="submit">
          הוספה
        </button>
      </form>
    </div>
  );
};

export default DeliveryForm;