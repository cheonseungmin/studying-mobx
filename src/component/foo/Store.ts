
import { makeAutoObservable } from 'mobx';

class Store {
  static instance: Store;
  count: number = 0;
  time = {
    hour: 0,
    minute: 0
  }

  constructor() {
    makeAutoObservable(this);
  }

  setCount = (newCount: number): void => {
    this.count = newCount;
  };

  setTime = (newTime: {
    hour: number,
    minute: number
  }) => {
    this.time = newTime;
  }

  setHourMinute = (newHour?: number, newMinute?: number) => {
    if(newHour) this.time.hour = newHour;
    if(newMinute) this.time.minute = newMinute;
  }
}

Store.instance = new Store();

export default Store;
