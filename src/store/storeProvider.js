import React from "react";
import { useLocalObservable } from "mobx-react";
import { OrderStore } from "./ordersStore";
const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const orders_store = useLocalObservable(() => new OrderStore());
  return (
    <StoreContext.Provider value={orders_store}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
