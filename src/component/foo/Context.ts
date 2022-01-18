import React from 'react';

export interface CountContextInterface {
    count: number;
    setCount: (currentCount: number) => void;
}

export const CountContext = React.createContext<CountContextInterface>({
  count: 0,
  setCount: () => {},
});

export interface TimeContextInterface {
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

export const TimeContext = React.createContext<TimeContextInterface>({
  time: {
    hour: 0,
    minute: 0
  },
  setTime: () => {},
  setHourMinute: () => {},
});

