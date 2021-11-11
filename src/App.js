import React, { useState, useEffect } from "react";
import Header from "./componenets/Header";
import DeliveryForm from "./componenets/DeliveryForm";
import DeliveriesList from "./componenets/DeliveriesList";
import "./App.css";

function App() {
  const [ordersList, setOrdersList] = useState(null);
  const [ordersAmount, setOrdersAmount] = useState(0);

  const addOrder = (order) => {
    console.log(order);
    ordersList ? setOrdersList([...ordersList, order]) : setOrdersList([order]);
    if (ordersList) {
      setOrdersAmount(ordersList.length);
    }
  };

  const removeOrder = (order) => {
    let tempArr = [...ordersList];
    let pos = tempArr.indexOf(order);
    let removedItemArr = tempArr.splice(pos, 1);
    setOrdersList([...removedItemArr]);
  };

  const editOrder = (order) => {
    // let tempArr=[...ordersList]
    // let pos = tempArr.indexOf(order)
    // let removedItemArr = tempArr.splice(pos, 1)
    // setOrdersList([...removedItemArr]);
  };

  useEffect(() => {
    ordersList && setOrdersAmount(ordersList.length);
    // console.log(ordersList);
  }, [ordersList]);

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <DeliveryForm add={addOrder} edit={editOrder} />
        <DeliveriesList
          remove={removeOrder}
          orders={ordersList}
          ordersNumber={ordersAmount}
        />
      </div>
    </div>
  );
}

export default App;
