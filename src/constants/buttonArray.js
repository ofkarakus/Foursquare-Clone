import React from 'react';
import {
  Breakfast,
  Lunch,
  Dinner,
  CoffeeTea,
  NightLife,
  ThingsToDo,
} from '../components/icons';

const iconSize = '45';
const iconColor = '#4f5659';

const buttonArray = [
  {
    id: 1,
    text: 'Breakfast',
    icon: <Breakfast width={iconSize} height={iconSize} fill={iconColor} />,
    style: 'firstBtn',
  },
  {
    id: 2,
    text: 'Lunch',
    icon: <Lunch width={iconSize} height={iconSize} fill={iconColor} />,
    style: 'secondBtn',
  },
  {
    id: 3,
    text: 'Dinner',
    icon: <Dinner width={iconSize} height={iconSize} fill={iconColor} />,
    style: 'thirdBtn',
  },
  {
    id: 4,
    text: 'Coffee & Tea',
    icon: <CoffeeTea width={iconSize} height={iconSize} fill={iconColor} />,
    style: 'fourthBtn',
  },
  {
    id: 5,
    text: 'Night Life',
    icon: <NightLife width={iconSize} height={iconSize} fill={iconColor} />,
    style: 'fifthBtn',
  },
  {
    id: 6,
    text: 'Things to do',
    icon: <ThingsToDo width={iconSize} height={iconSize} fill={iconColor} />,
    style: 'sixthBtn',
  },
];

export default buttonArray;
