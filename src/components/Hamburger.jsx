import React from 'react';
import { IconMenu2 } from '@tabler/icons-react'
import { useStore } from '@nanostores/react';
import { slideSubCatListing } from '../store/snippetSubCatListing';

export const Hamburger = () => {
const $slideSubCatListing = useStore(slideSubCatListing);

  return (
    <button class='mb-2 md:hidden inline-block cursor-pointer hamburger' onClick={() => slideSubCatListing.set(!$slideSubCatListing) }>
    <IconMenu2 color="white" size={36} stroke={1} />
  </button>
  )
}
