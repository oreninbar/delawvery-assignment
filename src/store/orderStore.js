import { action, observable, makeObservable } from "mobx";

export class OrderStore {

    firstName='';
    lastName='';
    date='';
  
  constructor() {
    makeObservable(this, {
      listLength: observable,
      ordersList: observable,
      addOrder: action,
      removeOrder: action,
      editOrder: action,
    });
  }

  addOrder = (order) => {
    this.ordersList=[...ordersList, order];
    this.listLength=ordersList.length();
  };

  removeOrder = (order) => {
    let pos = this.ordersList.indexOf(order);
    let removedItemArr = this.ordersList.splice(pos, 1);
  };

  editOrder = (order) => {
    
  };

}

