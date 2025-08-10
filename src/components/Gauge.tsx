import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
export default function Gauge({ value, size=80 }:{ value:number; size?:number }){
  const stroke = 6; const r = (size - stroke)/2; const c = 2*Math.PI*r;
  const clamped = Math.max(0, Math.min(100, value)); const off = c*(1 - clamped/100);
  const color = clamped < 40 ? '#F55555' : clamped < 70 ? '#F4B740' : '#24D282';
  return (<View><Svg width={size} height={size}>
    <Circle cx={size/2} cy={size/2} r={r} stroke="#1E1E1E" strokeWidth={stroke} fill="none" />
    <Circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={stroke} fill="none"
      strokeDasharray={`${c} ${c}`} strokeDashoffset={off} strokeLinecap="round"
      transform={`rotate(-90 ${size/2} ${size/2})`} />
  </Svg></View>);
}
