
import { makeAutoObservable } from 'mobx';

class CountStore {
  static instance: CountStore;
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

CountStore.instance = new CountStore();

class TimeStore {
  static instance: TimeStore;
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

TimeStore.instance = new TimeStore();

export {
  CountStore, 
  TimeStore
};
