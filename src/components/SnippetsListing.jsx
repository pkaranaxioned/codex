import React from 'react'
import { IconBrandGooglePhotos } from '@tabler/icons-react';
import { useStore } from '@nanostores/react';
import { slideCatListing } from '../store/snippetCatListing';
import { slideSubCatListing } from '../store/snippetSubCatListing';
import { IconX } from '@tabler/icons-react';

export const SnippetsListing = () => {
  const $slideCatListing = useStore(slideCatListing);
  const $slideSubCatListing = useStore(slideSubCatListing);

  const changeListingState = () => {
    slideCatListing.set(!$slideCatListing);
    slideSubCatListing.set(false);
  }
  return (
    <>
      <div className={`${$slideSubCatListing ? 'animate-slide-in-right' : 'animate-slide-out-right'} border-0 lg:border-r-[1px] border-light-grey border-solid bg-dark-grey absolute w-11/12 sm:w-1/2 md:w-auto md:static lg:animate-none top-0 right-0 md:top-[unset] md:right-[unset] basis-2/6 lg:basis-1/5 text-light-grey bg-zinc-950 border-r-[1px] border-[#1d1f1e]`}>
        <div className='flex  flex-col py-5'>
          <div className="flex flex-col items-start lg:flex-row w-4/5 m-auto justify-between lg:justify-center">
            <button className='mr-2 w-10 h-10 lg:hidden block' onClick={() => changeListingState() }>
              <img src="assets/Codex-logo.svg" alt="Codex" />
            </button>
            <h2 className='flex justify-center py-4 '>
              <IconBrandGooglePhotos color="white" size={24} stroke={1} />
              <span className='px-2'>Google Photos</span>
            </h2>
            <span className='md:hidden block cursor-pointer relative top-[-40px] left-[93%] ' title='Close' onClick={() => slideSubCatListing.set(!$slideSubCatListing)} >
          <IconX color="white" size={24} stroke={1} />
        </span>
          </div>
          <form action="#FIXME" name='Search' method='post' className='w-4/5  mx-[auto]'>
            <div className='w-full'>
              <input type="text" name="text" placeholder='Search' className='w-full outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-600 dark:focus:border-fuchsia-600' />
            </div>
          </form>
        </div>
        <ul className='mx-[auto] py-8 h-[calc(100vh_-_100px)] overflow-y-auto no-scrollbar::-webkit-scrollbar no-scrollbar [&>:not(:last-child)]:border-b-1 [&>:not(:last-child)]:border-white [&>:not(:last-child)]:border-solid'>
          <li className='border-b-[1px] py-2 cursor-pointer  px-6'>
            <button className='text-white font-semibold text-lg'>Clip</button>
            <p className='text-sm py-3'>Clips that you save using the Google Clips app will appear in Google Photos or your phone's gallery.</p>
          </li>
          <li className='border-b-[1px] group cursor-pointer text-white py-2 md:hover:font-bold  md:hover:border-b-purple-400 transition-all duration-[0.3s] md:hover:bg-ax-violet px-6'>
            <button className='font-semibold text-lg flex '>Sign In</button>
            <p className='text-sm py-3 text-light-grey  transition-all duration-[0.3s]'>Go to Google Photos. If you aren't signed in to your Google Account, click Go to Google Photos and sign in.</p>
            <div className='mt-3 h-0 overflow-hidden  group-hover:h-full   transition-all duration-[0.3s]'>
              <h2 className='font-semibold text-lg '>Tags</h2>
              <ul className='py-4 flex flex-wrap [&>:not(:last-child)]:mr-2'>
                <li><a href="#FIXME" title="#react" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:font-bold md:hover:text-purple-400  rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#react</a></li>
                <li><a href="#FIXME" title="#redux" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:font-bold md:hover:text-purple-400 rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#redux</a></li>
                <li><a href="#FIXME" title="#google" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:font-bold md:hover:text-purple-400  rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#google</a></li>
                <li><a href="#FIXME" title="#js" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:font-bold md:hover:text-purple-400  rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#js</a></li>
                <li><a href="#FIXME" title="#css" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:font-bold md:hover:text-purple-400  rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#css</a></li>
              </ul>
            </div>
          </li>
          <li className='border-b-[1px] py-2 cursor-pointer px-6'>
            <button className='text-white font-semibold text-lg'>Access </button>
            <p className='text-sm py-3'>To access Google Photos on your phone, download Google Photos from the Google Play Store or iOS App Store.</p>
          </li>
        </ul>
      </div>
    </>
  )
}
