import React from 'react';
import { slideSubCatListing } from '../store/snippetSubCatListing';
import { IconMenu2 } from '@tabler/icons-react'
import { useStore } from '@nanostores/react';

export const SnippetsContent = () => {
  const $slideSubCatListing = useStore(slideSubCatListing)
  return (
    <div className='md:basis-3/5 basis-full text-red p-4 h-screen'>
      <span className='pb-2 md:hidden block cursor-pointer ' onClick={() => slideSubCatListing.set(!$slideSubCatListing) }>
        <IconMenu2 color="white" size={36} stroke={1} />
      </span>
      SnippetsContent
    </div>
  )
}
