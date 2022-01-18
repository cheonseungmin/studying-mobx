import React, { useMemo } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import Context, { ContextInterface } from './Context';
import Store from './Store';

interface Props {
  examplePageProp: string
}

const PageComponent: React.FC<Props> = observer(({
  examplePageProp,
  ...rest
}) => {
  const {
    children
  } = rest;

  const {
    count,
    setCount,
    time,
    setTime,
    setHourMinute
  } = useLocalObservable(() => Store.instance);

  const ContextModel: ContextInterface = useMemo(() => ({
    count,
    setCount,
    examplePageProp,
    time,
    setTime,
    setHourMinute
  }), [
    count,
    setCount,
    examplePageProp,
    time,
    setTime,
    setHourMinute
  ]);

  return (
    <Context.Provider value={ContextModel}>
      {children}
    </Context.Provider>
  );
});

export default PageComponent;
