import type React from 'react';
import { useStore } from '@nanostores/react';
import {isSnippets}  from '../../store/toggleState';
import { Icons } from '../icon';

export const Hamburger: React.FC = (): JSX.Element => {
  const $isSnippets = useStore(isSnippets);
  return (
    <button className='mb-2 md:hidden inline-block cursor-pointer hamburger' onClick={() => isSnippets.set(!$isSnippets)}>
      <Icons.hamburger className='stroke-foreground' size={36} stroke={1} />
    </button>
  );
};
