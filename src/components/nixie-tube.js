import React from 'react';

import Base from './base';
import Filament from './filament';
import Glass from './glass';
import Mesh from './mesh';

export default function NixieTube({ x, y, number, ...etc }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 79.374998 211.66666"
      {...{ x, y, ...etc }}
    >
      <g transform="translate(0,-85.333334)">
        <Mesh fill="url(#mesh-gradient)" />
       	<g
          id="filaments"
          filter="url(#filaments)"
          clipPath="url(#clip-glass)"
        >
          <Filament currentNumber={number} number="0" />
          <Filament currentNumber={number} number="1" />
          <Filament currentNumber={number} number="2" />
          <Filament currentNumber={number} number="3" />
          <Filament currentNumber={number} number="4" />
          <Filament currentNumber={number} number="5" />
          <Filament currentNumber={number} number="6" />
          <Filament currentNumber={number} number="7" />
          <Filament currentNumber={number} number="8" />
          <Filament currentNumber={number} number="9" />
        </g>
        <Glass filter="url(#glass-shine)" />
        <Base fill="url(#base-gradient)" />
      </g>
    </svg>
  );
}







