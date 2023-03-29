import React from 'react';
import { 
  IconBrandReact,
  IconBrandDeno,
  IconBrandJavascript,
  IconHtml,
  IconBrandCss3,
  IconBrandWordpress,
  IconBrandPhp,
  IconBrandNpm,
  IconBrandGatsby,
  IconBrandFigma,
  IconBrandGoogle,
  IconBrandGmail,
  IconBrandGooglePhotos,
  IconSeo
 } from '@tabler/icons-react';


export const CategoryListing = () => {
  return (
    <aside className='p-4 lg:basis-1/5 lg:block bg-dark-grey h-screen'>
      <h1 className='text-4xl font-bold mb-8 text-white'>Codex</h1>
      <div className="">
        <h2 className='text-sm mb-4 font-bold text-light-grey'>Snippets</h2>
        <ul className='border-solid rounded-xl border-ax-violet [&>:not(:last-child)]:mb-2 text-light-grey text-sm font-medium overflow-y-auto h-60 no-scrollbar::-webkit-scrollbar no-scrollbar'>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandReact color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>react</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>20</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandGoogle color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>Google Suite</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>5</span>
            </button>

            <div className='ml-6 mt-2 [&>:not(:last-child)]:mb-2'>
              <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
                <IconBrandGmail color="white" size={24} stroke={1} />
                <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>Gmail</span>
                <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>2</span>
              </button>
              <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
                <IconBrandGooglePhotos color="white" size={24} stroke={1} />
                <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>Google Photos</span>
                <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>3</span>
              </button>
            </div>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandJavascript color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>Javascript</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>240</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconHtml color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>HTML</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>100</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandCss3 color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>CSS</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>98</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandPhp color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>PHP</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>36</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandWordpress color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>WordPress</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>14</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandNpm color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>Node</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>55</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandGatsby color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>Gatsby</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>01</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandDeno color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>Docusaurus</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>35</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandFigma color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>Figma</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>64</span>
            </button>
          </li>
          <li>
            <button className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconSeo color="white" size={24} stroke={1} />
              <span className='capitalize ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left ml-2'>SEO</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>68</span>
            </button>
          </li>
        </ul>
      </div>
      <div className='mt-3'>
        <h2 className='text-sm mb-4 font-bold text-light-grey'>Tags</h2>
        <ul className='flex flex-wrap [&>:not(:last-child)]:mr-2 h-13 overflow-y-auto no-scrollbar::-webkit-scrollbar no-scrollbar'>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#react</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#redux</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#google</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#js</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#css</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#responsive</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#react</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#redux</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#google</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#js</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#css</button></li>
          <li><button className='md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full	text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#responsive</button></li>
        </ul>
      </div>
    </aside>
  )
}
