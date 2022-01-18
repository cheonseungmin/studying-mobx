import React from 'react';

export interface ContextInterface {
    count: number;
    setCount: (currentCount: number) => void;
    examplePageProp: string;
    time: {
      hour: number,
      minute: number
    };
    setTime: (newTime: {
      hour: number,
      minute: number
    }) => void;
    setHourMinute: (newHour?: number, newMinute?: number) => void;
}

const Context = React.createContext<ContextInterface>({
  count: 0,
  setCount: () => {},
  examplePageProp: '',
  time: {
    hour: 0,
    minute: 0
  },
  setTime: () => {},
  setHourMinute: () => {},
});

export default Context;
