import React from 'react';

import { GLASS_PATH } from '../lib/paths';

export default function Glass(props) {
  return (
    <path
      className="glass"
      d={GLASS_PATH}
			{...props}
    />
  );
}
