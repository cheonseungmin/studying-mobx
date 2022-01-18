import React, { useContext } from 'react';

import Context from './Context';

interface Props {
  exampleFooterProp: string
}

const FooterComponent: React.FC<Props> = ({
  exampleFooterProp
}) => {
  const {
    count
  } = useContext(Context);

  return (
    <>
      <div>
        Foo
        {exampleFooterProp}
        Component
        Count:
        {' '}
        {count}
      </div>
    </>
  );
};


export default FooterComponent;
