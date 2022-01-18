import React from 'react';

export interface ContextInterface {
    count: number;
    setCount: (currentCount: number) => void;
    examplePageProp: string;
}

const Context = React.createContext<ContextInterface>({
  count: 0,
  setCount: () => {},
  examplePageProp: ''
});

export default Context;
