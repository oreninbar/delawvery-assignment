import React, { useState, useEffect } from "react";
import "../css/deliveryForm.css";
import validation from "../validation/validation";

const DeliveryForm = (props) => {
  const [errors, setErrors] = useState({});
  const [inputValues, setOrder] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempErrors = await validation(inputValues);
    setErrors(tempErrors);
    tempErrors && setIsSubmitted(true);
    e.target.reset();
  };

  const handleInput = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setOrder({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      props.isEditOrder
        ? props.editOrder(props.orderNumber, inputValues)
        : props.addOrder(inputValues);
      setIsSubmitted(false);
      setOrder({
        firstName: "",
        lastName: "",
        date: "",
      });
    }
  }, [isSubmitted, errors, inputValues, props]);

  return (
    <div className="form-container">
      <div className="neworder-title">
        {!props.isEditOrder ? "הזמנה חדשה" : ` ${props.orderNumber + 1} הזמנה `}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper privat-name">
          <label htmlFor="userName " className="form-label">
            שם פרטי
          </label>
          <input
            type="text"
            dir="rtl"
            className="form-private-name form-input"
            values={inputValues.firstName}
            name="firstName"
            onChange={handleInput}
            placeholder={props.isEditOrder && props.order.firstName}
          />
          {errors.firstName && (
            <p className="error-message">
              {errors.firstName}
              <span id="Asterisk">*</span>
            </p>
          )}
        </div>
        <div className="input-wrapper family-name">
          <label htmlFor="userFamily" className="form-label">
            שם משפחה
          </label>
          <input
            type="text"
            dir="rtl"
            className="form-family-name form-input"
            name="lastName"
            values={inputValues.lastName}
            placeholder={props.isEditOrder && props.order.lastName}
            onChange={handleInput}
          />
          {errors.lastName && (
            <p className="error-message">
              {errors.lastName}
              <span id="Asterisk">*</span>
            </p>
          )}
        </div>
        <div className="input-wrapper date">
          <label htmlFor="date" className="form-label">
            תאריך
          </label>
          <input
            type="date"
            className="form-date form-input"
            name="date"
            dir="rtl"
            values={inputValues.date}
            placeholder={props.isEditOrder && props.order.date}
            onChange={handleInput}
          />
          {errors.date && (
            <p className="error-message">
              {errors.date}
              <span id="Asterisk">*</span>
            </p>
          )}
        </div>
        <button className="form-input-btn" type="submit">
          {!props.isEditOrder ? "הוספה" : "עדכון"}
        </button>
        {!props.isEditOrder ? null : (
          <button
            onClick={() => props.newOrderForm()}
            className={"form-input-btn cancel"}
          >
            ביטול
          </button>
        )}
      </form>
    </div>
  );
};

export default DeliveryForm;
