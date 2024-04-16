import React from 'react';
import  Wheel from "@uiw/react-color-wheel";
import { ColorWheelProps } from '../types';
  

export const ColorWheel: React.FC<ColorWheelProps> = ({ baseColor }) => {
  
  return (
        <Wheel
        color={baseColor}
        width={200}
        height={200}
        />  
    );
};