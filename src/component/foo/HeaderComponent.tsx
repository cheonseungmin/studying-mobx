import { observer } from 'mobx-react';
import React from 'react';
import Store from './Store';

interface Props {
}

const HeaderComponent: React.FC<Props> = observer(({
}) => {

  const {
    count,
    setCount
  } = Store.instance;

  const onClickButton = (currentCount: number) => {
    setCount(currentCount + 1);
  };

  console.log('HeaderComponent render');

  return (
    <>
      <div>
        HeaderComponent Count: {count}
        <button
          type="button"
          onClick={() => onClickButton(count)}
        >
          renderTest
        </button>
      </div>
    </>
  );
});


export default HeaderComponent;
