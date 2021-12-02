import React, { useMemo } from 'react';

import { Pencil } from './Pencil';
import { Search } from './Search';
import { Trash } from './Trash';
import { IIconParams } from './types';

type IconPros = IIconParams & {
  name: 'Pencil' | 'Search' | 'Trash';
};

export const Icon: React.FC<IconPros> = ({ name, size, color }) => {
  const registeredIcons = useMemo(
    () => ({
      Pencil,
      Search,
      Trash,
    }),
    [],
  );

  const IconComponent = useMemo<React.FC<IIconParams>>(
    () => registeredIcons[name],
    [registeredIcons, name],
  );

  return <IconComponent size={size} color={color} />;
};
