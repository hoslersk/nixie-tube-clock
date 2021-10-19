import React from 'react';
import classNames from 'classnames';

import {
	FILAMENT_ZERO_PATH,
	FILAMENT_ONE_PATH,
	FILAMENT_TWO_PATH,
	FILAMENT_THREE_PATH,
	FILAMENT_FOUR_PATH,
	FILAMENT_FIVE_PATH,
	FILAMENT_SIX_PATH,
	FILAMENT_SEVEN_PATH,
	FILAMENT_EIGHT_PATH,
	FILAMENT_NINE_PATH,
} from '../lib/paths';

import './filament.css'


const filamentPaths = [
	FILAMENT_ZERO_PATH,
	FILAMENT_ONE_PATH,
	FILAMENT_TWO_PATH,
	FILAMENT_THREE_PATH,
	FILAMENT_FOUR_PATH,
	FILAMENT_FIVE_PATH,
	FILAMENT_SIX_PATH,
	FILAMENT_SEVEN_PATH,
	FILAMENT_EIGHT_PATH,
	FILAMENT_NINE_PATH,
];


export default function Filament({ currentNumber, number }) {
	const isActive = currentNumber === number;
  return (
    <path
      className={classNames('filament', { 'filament--active': isActive })}
      d={filamentPaths[number]}
      fill="currentColor"
    />
  );
}
