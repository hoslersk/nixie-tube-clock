import React from 'react';

import Glass from './glass';

export default function Defs() {
  return (
    <defs>
      <filter width="20" id="resting-filament">
        <feColorMatrix
          in="specOut"
          type="luminanceToAlpha"
          result="alpha"
        />
      </filter>

      <filter id="active-filament">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="3"
          result="blur"
        />
        <feOffset
          in="blur"
          dx="1"
          dy="1"
          result="offsetBlur"
        />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="offsetBlur"/>
          <feMergeNode in="red-blur"/>
        </feMerge>
      </filter>

      <filter
        id="filaments"
        x="-10%"
        y="-70%"
        height="200%"
        width="120%"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur5"/>
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur10"/>
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur20"/>
        <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30"/>
        <feGaussianBlur in="SourceGraphic" stdDeviation="50" result="blur50"/>

        <feMerge result="blur-merged">
          <feMergeNode in="blur10"/>
          <feMergeNode in="blur20"/>
          <feMergeNode in="blur30"/>
          <feMergeNode in="blur50"/>
        </feMerge>

        <feColorMatrix
          result="red-blur"
          in="blur-merged"
          type="matrix"
          values="1 0 0 0 0
                  0 0.06 0 0 0
                  0 0 0.44 0 0
                  0 0 0 1 0"
        />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="red-blur"/>
        </feMerge>
      </filter>

      <filter id="glass-shine">
        {/* Shadow Offset */}
        <feOffset dx="3" dy="-2"/>
        {/* Shadow Blur */}
        <feGaussianBlur stdDeviation="2"  result="offset-blur"/>
        {/* Invert the drop shadow to create an inner shadow */}
        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
        {/* Color & Opacity */}
        <feFlood floodColor="#fff" floodOpacity="1" result="color"/>
        {/* Clip color inside shadow */}
        <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
        {/* Shadow Opacity */}
        <feComponentTransfer in="shadow" result="shadow">
            <feFuncA type="linear" slope=".75"/>
        </feComponentTransfer>
      </filter>

      <radialGradient
        id="mesh-gradient"
        cx="50%"
        cy="50%"
        r="0.8"
        fx="50%"
        fy="50%"
        spreadMethod="pad"
      >
       <stop offset="0%" stopColor="#999" />
       <stop offset="15%" stopColor="#000" />
       <stop offset="30%" stopColor="#999" />
       <stop offset="70%" stopColor="#000" />
      </radialGradient>

      <linearGradient id="base-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="30%" stopColor="#000" />
      </linearGradient>

			<clipPath id="clip-glass">
        <Glass />
      </clipPath>
    </defs>
  );
}
