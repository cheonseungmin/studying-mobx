import React from 'react';
import { useContext } from 'react';
import {CountContext} from './Context';

interface Props {
}

const HeaderComponent: React.FC<Props> = ({
}) => {
  const {
    count,
    setCount
  } = useContext(CountContext);

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
};


export default HeaderComponent;
