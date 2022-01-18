import React, { useContext } from 'react';

import Context from './Context';

interface Props {
  exampleFooterProp: string
}

const FooterComponent: React.FC<Props> = ({
  exampleFooterProp
}) => {

  const {
    time,
    setTime,
    setHourMinute
  } = useContext(Context);

  console.log('FooterComponent render');

  const addOneHourByTime = (currentHour: number) => {
    const newTime = {
      hour: currentHour + 1,
      minute: 0
    }
    setTime(newTime)
  }

  const addOneHourByHour = (currentHour: number) => {
    setHourMinute(currentHour);
  }

  return (
    <>
      <div>
        Time: {time.hour} {time.minute}
        <button
          type="button"
          onClick={() => {
            addOneHourByTime(time.hour)
          }}
        >
          add Time observarble
        </button>
        <button
          type="button"
          onClick={() => {
            addOneHourByHour(time.hour + 1)
          }}
        >
          add Hour observarble
        </button>
      </div>
    </>
  );
};


export default FooterComponent;
