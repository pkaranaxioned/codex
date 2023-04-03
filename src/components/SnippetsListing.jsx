import React from 'react'
import { IconBrandGooglePhotos } from '@tabler/icons-react';
import { useStore } from '@nanostores/react';
import { loadCatListing } from '../store/snippetCatListing';

export const SnippetsListing = () => {
  const isCatListingVisible = useStore(loadCatListing);
  return (
    <>
      <div className='basis-2/6 lg:basis-1/5 text-light-grey bg-zinc-950 border-r-[1px] border-[#1d1f1e]'>
        <div className='flex  flex-col py-5'>
          <div className="flex flex-col items-start lg:flex-row m-auto w-4/5 lg:w-auto justify-between lg:justify-center">
            <button className='mr-2 w-10 h-10 lg:hidden block' onClick={() => loadCatListing.set(!isCatListingVisible)}>
              <img src="assets/Codex-logo.svg" alt="Codex" />
            </button>
            <h2 className='flex justify-center py-4 '>
              <IconBrandGooglePhotos color="white" size={24} stroke={1} />
              <span className='px-2'>Google Photos</span>
            </h2>
          </div>
          <form action="#FIXME" name='Search' method='post' className='w-4/5  mx-[auto]'>
            <div className='w-full'>
              <input type="text" name="text" placeholder='Search' className='w-full outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500' />
            </div>
          </form>
        </div>
        <ul className='w-4/5  mx-[auto] py-8 h-[calc(100vh_-_100px)] overflow-y-auto no-scrollbar::-webkit-scrollbar no-scrollbar'>
          <li className='border-b-[1px] py-2 cursor-pointer '>
            <button className='text-white font-semibold text-lg'>Clip</button>
            <p className='text-sm py-3'>Clips that you save using the Google Clips app will appear in Google Photos or your phone's gallery.</p>
          </li>
          <li className='border-b-[1px] group cursor-pointer text-white py-2 md:hover:font-bold md:hover:text-purple-400 md:hover:border-b-purple-400 transition-all duration-[0.3s]'>
            <button className='font-semibold text-lg flex '>Sign In</button>
            <p className='text-sm py-3 text-light-grey group-hover:text-purple-400 transition-all duration-[0.3s]'>Go to Google Photos. If you aren't signed in to your Google Account, click Go to Google Photos and sign in.</p>
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
          <li className='border-b-[1px] py-2 cursor-pointer'>
            <button className='text-white font-semibold text-lg'>Access </button>
            <p className='text-sm py-3'>To access Google Photos on your phone, download Google Photos from the Google Play Store or iOS App Store.</p>
          </li>
        </ul>
      </div>
    </>
  )
}
