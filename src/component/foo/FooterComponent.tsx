import React, { useContext } from 'react';

import Context from './Context';

interface Props {
  exampleFooterProp: string
}

const FooterComponent: React.FC<Props> = ({
  exampleFooterProp
}) => {

  console.log('FooterComponent render');

  return (
    <>
      <div>
        FooterComponent don't Count
      </div>
    </>
  );
};


export default FooterComponent;
