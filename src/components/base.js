import React from 'react';

import { BASE_PATH } from '../lib/paths';

export default function Base(props) {
  return (
    <path
      className="base"
			d={BASE_PATH}
			{...props}
    />
  );
}
