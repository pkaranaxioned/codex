import React from 'react'

export const CategoryBtn = ({ category }) => {
  return (
    <li className='p-3 bg-dark-grey-2 rounded-xl'>
      <button className='capitalize'>{ category }</button>
    </li>
  )
}
