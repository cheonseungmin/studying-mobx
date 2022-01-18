import React, { useMemo } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { CountContext, CountContextInterface, TimeContext, TimeContextInterface  } from './Context';
import { HeaderComponent, ContentComponent, FooterComponent } from '.';
import {CountStore, TimeStore} from './Store';

interface Props {
}

const PageComponent: React.FC<Props> = observer(() => {

  const {
    count,
    setCount
  } = CountStore.instance;

  const {
    time,
    setTime,
    setHourMinute
  } = TimeStore.instance;

  

  const CountContextModel: CountContextInterface = useMemo(() => ({
    count,
    setCount,
  }), [
    count,
    setCount
  ]);

  const TimeContextModel: TimeContextInterface = useMemo(() => ({
    time,
    setTime,
    setHourMinute
  }), [
    time,
    setTime,
    setHourMinute
  ]);

  console.log('PageComponent render');

  return (
    <>
    <CountContext.Provider value={CountContextModel}>
      <HeaderComponent />
      <ContentComponent />
    </CountContext.Provider>
    <TimeContext.Provider value={TimeContextModel}>
      <FooterComponent />
    </TimeContext.Provider>
    </>
  );
});

export default PageComponent;
