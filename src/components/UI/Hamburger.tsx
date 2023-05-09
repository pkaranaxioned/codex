import type React from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import { useStore } from '@nanostores/react';
import {isSnippets}  from '../../store/toggleState';

export const Hamburger: React.FC = (): JSX.Element => {
  const $isSnippets = useStore(isSnippets);
  return (
    <button className='mb-2 md:hidden inline-block cursor-pointer hamburger' onClick={() => isSnippets.set(!$isSnippets)}>
      <IconMenu2 color="white" size={36} stroke={1} />
    </button>
  );
};
