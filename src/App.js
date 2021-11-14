import React, { useState, useEffect } from "react";
import Header from "./componenets/Header";
import DeliveryForm from "./componenets/DeliveryForm";
import DeliveriesList from "./componenets/DeliveriesList";
import "./App.css";

function App() {
  const [ordersList, setOrdersList] = useState([]);
  const [ordersAmount, setOrdersAmount] = useState(0);
  const [isEditOrder, setToEditOrder] = useState(false);
  const [orderNumber, setOrderNumer] = useState(null);
  const [order, setOrder] = useState({});

  const addOrder = (order) => {
    ordersList ? setOrdersList([...ordersList, order]) : setOrdersList([order]);
    setOrdersAmount(ordersList.length);
  };

  const removeOrder = (index) => {
    let tempArr1 = [...ordersList];
    tempArr1.splice(index, 1);
    setOrdersList([...tempArr1]);
    setToEditOrder(false);
  };

  const editOrder = (orderNumber, order) => {
    setOrderNumer(orderNumber);
    ordersList[orderNumber] = order;
    newOrderForm();
  };

  const changeToEditForm = (orderNumber) => {

    setOrder(ordersList[orderNumber]);
    setOrderNumer(orderNumber);
    !isEditOrder && setToEditOrder((isEditOrder) => !isEditOrder);
  };

  const newOrderForm = () => {
    isEditOrder && setToEditOrder((isEditOrder) => !isEditOrder);
  };

  useEffect(() => {
    ordersList && setOrdersAmount(ordersList.length);
  }, [ordersList, isEditOrder]);

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <DeliveryForm
          isEditOrder={isEditOrder}
          changeToEditForm={changeToEditForm}
          newOrderForm={newOrderForm}
          addOrder={addOrder}
          editOrder={editOrder}
          orderNumber={orderNumber}
          order={order}
        />
        <DeliveriesList
          removeOrder={removeOrder}
          changeToEditForm={changeToEditForm}
          orders={ordersList}
          ordersNumber={ordersAmount}
        />
      </div>
    </div>
  );
}

export default App;
