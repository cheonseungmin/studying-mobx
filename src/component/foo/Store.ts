
import { makeAutoObservable } from 'mobx';

class Store {
  static instance: Store;
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCount = (newCount: number): void => {
    this.count = newCount;
  };
}

Store.instance = new Store();

export default Store;
