import React from 'react';

export interface ContextInterface {
    examplePageProp: string;
}

const Context = React.createContext<ContextInterface>({
  examplePageProp: ''
});

export default Context;
