import React, { useState } from 'react';

import { useInterval } from '../lib/hooks';
import { getCurrentTime } from '../lib/time';
import { INTERVAL_DELAY } from '../lib/constants';
import Defs from './defs';
import NixieTube from './nixie-tube';

export default function Clock() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const [isRunning/*, setIsRunning*/] = useState(true);

  useInterval(() => {
    const { hours, minutes, seconds } = getCurrentTime();

    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, isRunning ? INTERVAL_DELAY : null);

  return (
    <svg className="clock" viewBox="0 0 260 110">
      <Defs />

			<desc>
				The current time is {hours}:{minutes}:{seconds}
			</desc>

      <NixieTube x="-110" y="0" number={hours[0]} />
      <NixieTube x="-70" y="0" number={hours[1]} />

      <text x="79" y="65" fontSize="35" fill="white">
        :
      </text>

      <NixieTube x="-20" y="0" number={minutes[0]} />
      <NixieTube x="20" y="0" number={minutes[1]} />

      <text x="169" y="65" fontSize="35" fill="white">
        :
      </text>

      <NixieTube x="70" y="0" number={seconds[0]} />
      <NixieTube x="110" y="0" number={seconds[1]} />
    </svg>
  );
}
