import React from 'react';
import { IIconParams } from './types';

export const Trash: React.FC<IIconParams> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 13.641 15.046"
  >
    <g transform="translate(-4 -2.5)">
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5,9H17.141"
        transform="translate(0 -3.191)"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.332,5.809v9.832a1.4,1.4,0,0,1-1.4,1.4H8.9a1.4,1.4,0,0,1-1.4-1.4V5.809m2.107,0V4.4a1.4,1.4,0,0,1,1.4-1.4H13.82a1.4,1.4,0,0,1,1.4,1.4v1.4"
        transform="translate(-1.595)"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15,16.5v4.214"
        transform="translate(-5.584 -7.18)"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21,16.5v4.214"
        transform="translate(-8.775 -7.18)"
      />
    </g>
  </svg>
);
