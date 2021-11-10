import { action, observable, makeObservable } from "mobx";

export class OrdersStore {
  order={
    orderFirstName='',
    orderFamilyName='',
    orderDate='',
  }


orders=[]
  
  
  constructor() {
    makeObservable(this, {
      order: observable,
      orders: observable,
    });
  }

}

export class Order {

}
