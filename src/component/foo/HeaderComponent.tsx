import React from 'react';
import { findFooData } from './Api';

interface Props {
  exampleHeaderProp: string
}

const HeaderComponent: React.FC<Props> = ({
  exampleHeaderProp
}) => {
  const onClickButton = (param: string) => {
    findFooData(param);
  };
  return (
    <>
      <div>
        Foo
        {exampleHeaderProp}
        Component
        <button
          type="button"
          onClick={() => onClickButton(exampleHeaderProp)}
        >
          requestTest
        </button>
      </div>
    </>
  );
};


export default HeaderComponent;
