import React, { useContext } from 'react';
import Context from './Context';

interface Props {
  exampleContentProp: string
}

const ContentComponent: React.FC<Props> = ({
  exampleContentProp
}) => {
  const {
    count
  } = useContext(Context);

  console.log('ContentComponent render');

  return (
    <>
      <div>
        ContentComponent Count: {count}
      </div>
    </>
  );
};

export default ContentComponent;
