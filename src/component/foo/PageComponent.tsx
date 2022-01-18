import React, { useMemo } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { CountContext, CountContextInterface, TimeContext, TimeContextInterface  } from './Context';
import { HeaderComponent, ContentComponent, FooterComponent } from '.';
import {CountStore, TimeStore} from './Store';

interface Props {
}

const PageComponent: React.FC<Props> = observer(() => {

  console.log('PageComponent render');

  return (
    <>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </>
  );
});

export default PageComponent;
