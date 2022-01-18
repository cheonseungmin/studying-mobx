import React, { useContext } from 'react';
import Context from './Context';

interface Props {
  exampleContentProp: string
}

const ContentComponent: React.FC<Props> = ({
  exampleContentProp
}) => {
  const {
    count,
    setCount,
    examplePageProp
  } = useContext(Context);

  const addOneToCount = (currentCount: number) => {
    setCount(currentCount + 1);
  };

  return (
    <>
      <div>
        {examplePageProp}
        {exampleContentProp}
        Component
        <button
          type="button"
          onClick={() => addOneToCount(count)}
        >
          count
        </button>
      </div>
    </>
  );
};

export default ContentComponent;
