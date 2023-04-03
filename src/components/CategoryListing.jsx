import React from 'react';
import { useStore } from '@nanostores/react';
import { slideCatListing } from '../store/snippetCatListing';
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
  IconSeo,
  IconX
 } from '@tabler/icons-react';

export const CategoryListing = () => {
  const $slideCatListing = useStore(slideCatListing);
  return (
    <aside className={`${$slideCatListing ? 'animate-slide-in' : 'animate-slide-out'} lg:animate-none p-4 w-2/6 lg:w-auto top-0 left-0 -translate-x-full lg:translate-x-0 ease-in-out absolute lg:relative lg:basis-1/5 block bg-dark-grey h-screen`}>
      <div className='py-4 flex items-center justify-between lg:justify-center'>
        <h1 className='text-4xl font-bold text-white'>Codex</h1>
        <span className='lg:hidden block' onClick={() => slideCatListing.set(!$slideCatListing)} >
          <IconX color="white" size={24} stroke={1} />
        </span>
      </div>
      <div className='h-[calc(100vh_-_80px)] overflow-y-auto no-scrollbar::-webkit-scrollbar no-scrollbar'>
        <h2 className='text-sm mb-4 font-bold text-light-grey'>Snippets</h2>
        <ul className='border-solid rounded-xl border-ax-violet [&>:not(:last-child)]:mb-2 text-light-grey text-sm font-medium'>
          <li>
            <a href="#FIXME" title="React" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandReact color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>React</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>20</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="Google Suite" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandGoogle color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>Google Suite</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>5</span>
            </a>

            <div className='ml-6 mt-2 [&>:not(:last-child)]:mb-2'>
              <a href="#FIXME" title="Gmail" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
                <IconBrandGmail color="white" size={24} stroke={1} />
                <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>Gmail</span>
                <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>2</span>
              </a>
              <a href="#FIXME" title="Google Photos" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
                <IconBrandGooglePhotos color="white" size={24} stroke={1} />
                <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>Google Photos</span>
                <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>3</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#FIXME" title="Javascript" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandJavascript color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>Javascript</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>240</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="HTML" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconHtml color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>HTML</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>100</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="CSS" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandCss3 color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>CSS</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>98</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="PHP" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandPhp color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>PHP</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>36</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="WordPress" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandWordpress color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>WordPress</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>14</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="Node" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandNpm color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>Node</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>55</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="Gatsby" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandGatsby color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>Gatsby</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>01</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="Docusaurus" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandDeno color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>Docusaurus</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>35</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="Figma" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconBrandFigma color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>Figma</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>64</span>
            </a>
          </li>
          <li>
            <a href="#FIXME" title="SEO" className='w-full items-center md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white transition-all flex p-3 rounded-xl relative'>
              <IconSeo color="white" size={24} stroke={1} />
              <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap w-2/4 block text-left'>SEO</span>
              <span className='rounded-full	text-pink bg-light-pink py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs'>68</span>
            </a>
          </li>
        </ul>
        <div className='mt-3'>
          <h2 className='text-sm font-bold text-light-grey'>Tags</h2>
          <ul className='py-4 flex flex-wrap [&>:not(:last-child)]:mr-2'>
            <li><a href="#FIXME" title="#react" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#react</a></li>
            <li><a href="#FIXME" title="#redux" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#redux</a></li>
            <li><a href="#FIXME" title="#google" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#google</a></li>
            <li><a href="#FIXME" title="#js" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#js</a></li>
            <li><a href="#FIXME" title="#css" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#css</a></li>
            <li><a href="#FIXME" title="#responsive" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#responsive</a></li>
            <li><a href="#FIXME" title="#react" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#react</a></li>
            <li><a href="#FIXME" title="#redux" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#redux</a></li>
            <li><a href="#FIXME" title="#google" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#google</a></li>
            <li><a href="#FIXME" title="#js" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#js</a></li>
            <li><a href="#FIXME" title="#css" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#css</a></li>
            <li><a href="#FIXME" title="#responsive" className='block md:hover:bg-ax-violet md:hover:font-bold md:hover:text-white rounded-full text-light-grey text-sm bg-light-pink py-1 px-3 mb-2'>#responsive</a></li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
