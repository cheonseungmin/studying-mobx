import React from 'react';
import { useContext } from 'react';
import { findFooData } from './Api';
import Context from './Context';

interface Props {
  exampleHeaderProp: string
}

const HeaderComponent: React.FC<Props> = ({
  exampleHeaderProp
}) => {
  const {
    count,
    setCount
  } = useContext(Context);

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
