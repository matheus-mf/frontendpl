import React from 'react';
import { IIconParams } from './types';

export const Search: React.FC<IIconParams> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 41.012 41.012"
  >
    <g transform="translate(-186.771 -129.886)">
      <g transform="translate(-719.032 863.863) rotate(-45)">
        <g
          fill="none"
          stroke={color}
          strokeWidth="3px"
          transform="translate(1145 136)"
        >
          <circle stroke="none" cx="14.5" cy="14.5" r="14.5" />
          <circle fill="none" cx="14.5" cy="14.5" r="13" />
        </g>
        <path
          fill="none"
          stroke={color}
          strokeWidth="3px"
          d="M-5008.5,66.861V79.619"
          transform="translate(6168 97)"
        />
      </g>
    </g>
  </svg>
);
