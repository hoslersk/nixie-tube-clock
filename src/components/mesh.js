import React from 'react';

import { MESH_PATH } from '../lib/paths';

export default function Mesh(props) {
  return (
    <path
      className="mesh"
			d={MESH_PATH}
      {...props}
    />
  );
}
