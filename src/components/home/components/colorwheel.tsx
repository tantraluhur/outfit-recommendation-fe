import React from 'react';
import  Wheel from "@uiw/react-color-wheel";
import { ColorWheelProps } from '../types';
  

export const ColorWheel: React.FC<ColorWheelProps> = ({ baseColor, width, height, isAbsolute }) => {

  if(isAbsolute) {
    return (
      <Wheel
      color={baseColor}
      width={width}
      height={height}
      style={{position: 'absolute'}}
      />  
  );  }
  
  return (
        <Wheel
        color={baseColor}
        width={width}
        height={height}
        />  
    );
};