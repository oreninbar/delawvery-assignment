import React, { useState, useEffect } from "react";
import Header from "./componenets/Header";
import DeliveryForm from "./componenets/DeliveryForm";
import DeliveriesList from "./componenets/DeliveriesList";
import "./App.css";

function App() {
  const [ordersList, setOrdersList] = useState([]);
  const [ordersAmount, setOrdersAmount] = useState(0);
  const [isEditOrder, setToEditOrder] = useState(false);
  const [editOrderNumber, setEditOrderNumer] = useState(false);

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
    setEditOrderNumer(orderNumber);
    console.log(isEditOrder);
    ordersList[orderNumber] = order;
    newOrderForm()
  };

  const changeToEditForm = (orderNumber) => {
    console.log("enter to edit");
    setEditOrderNumer(orderNumber);
    !isEditOrder && setToEditOrder((isEditOrder) => !isEditOrder);
  };
  const newOrderForm = () => {
    isEditOrder && setToEditOrder((isEditOrder) => !isEditOrder);
  };

  useEffect(() => {
    ordersList && setOrdersAmount(ordersList.length);
  }, [ordersList,isEditOrder]);

  useEffect(() => {}, [isEditOrder]);

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <DeliveryForm
          isEditOrder={isEditOrder}
          changeToEditForm={changeToEditForm}
          addOrder={addOrder}
          editOrder={editOrder}
          orderNumber={editOrderNumber}
          newOrderForm={newOrderForm}
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
