import React from 'react';
import { snippetsData } from '../data/SnippetsData';
import { CategoryBtn } from './CategoryBtn';

export const CategoryListing = () => {
  return (
    <aside className='lg:basis-1/5 lg:block  bg-red-200 md:bg-green-200 lg:bg-indigo-200'>
      <h2 className='text-4xl font-bold'>Snippets</h2>
      <ul className='p-4 border-solid rounded-xl border-ax-violet [&>:not(:last-child)]:mb-3'>
        {
          snippetsData.map(( categoryData, index ) => {
            return <CategoryBtn category={ categoryData.category } key={ index } />
          })
        }
      </ul>
    </aside>
  )
}
