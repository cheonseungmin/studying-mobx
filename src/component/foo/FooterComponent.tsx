import React, { useContext } from 'react';

import { TimeContext } from './Context'

interface Props {
}

const FooterComponent: React.FC<Props> = ({
}) => {

  const {
    time,
    setTime,
    setHourMinute
  } = useContext(TimeContext);

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
