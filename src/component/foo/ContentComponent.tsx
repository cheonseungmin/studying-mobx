import React, { useContext } from 'react';

interface Props {
}

const ContentComponent: React.FC<Props> = ({
}) => {

  console.log('ContentComponent render');

  return (
    <>
      <div>
        ComtentComponent doesn't have Context
      </div>
    </>
  );
};

export default ContentComponent;
