import type React from "react";
import { useStore } from "@nanostores/react";
import { isCategory, isSnippets } from "../store/toggleState";
import { Icons } from "./icon";

export const SnippetsListing: React.FC = (): JSX.Element => {
  const $isCategory = useStore(isCategory);
  const $isSnippet = useStore(isSnippets);

  const changeListingState = () => {
    isCategory.set(!$isCategory);
    isSnippets.set(false);
  };
  return (
    <>
      <div
        className={`md:visible ${$isSnippet === null ? 'invisible' : $isSnippet ? "animate-slide-in-right" : "animate-slide-out-right"
          } border-0 lg:border-r-[1px] border-border border-solid absolute w-11/12 sm:w-1/2 md:w-auto md:static lg:animate-none top-0 right-0 md:top-[unset] md:right-[unset] basis-2/6 xl:basis-1/5 lg:basis-1/4 border-r-[1px] lg:min-w-[300px] z-10 bg-background lg:bg-inherit`}
      >
        <div className="block md:hidden"></div>
        <div className="flex flex-col py-5">
          <div className="flex flex-col items-start lg:flex-row w-4/5 m-auto justify-between lg:justify-center">
            <button className="mr-2 w-10 h-10 lg:hidden block" onClick={() => changeListingState()}>
              <img src="/assets/Codex-logo.svg" alt="Codex" className="bg-secondary-hover" />
            </button>
            <h2 className="flex justify-center py-4 text-foreground">
              <Icons.googlePhotos className="stroke-foreground" size={24} stroke={1} />
              <span className="px-2">Google Photos</span>
            </h2>
            <span
              className="md:hidden block cursor-pointer relative top-[-40px] left-[93%] "
              title="Close"
              onClick={() => changeListingState()}
            >
              <Icons.close className="stroke-foreground" size={24} stroke={1} />
            </span>
          </div>
          <form action="#FIXME" name="Search" method="post" className="w-4/5  mx-[auto]">
            <div className="w-full">
              <input
                type="text"
                name="text"
                placeholder="Search"
                className="w-full outline-none bg-input border border-border text-sm rounded-lg focus:ring-ring focus:border-border dark:border-gray-600 block p-1.5 placeholder-gray-400 text-foreground"
              />
            </div>
          </form>
        </div>
        <ul className="mx-[auto] mt-4 h-[calc(100vh_-_100px)] overflow-y-auto scrollbar">
          <li className="border-b-[1px] border-border border-solid py-3 cursor-pointer transition-property duration-[0.3s] group md:hover:bg-foreground px-6">
            <button className="text-foreground md:group-hover:text-background font-semibold text-lg mb-3">Clip</button>
            <p className="line-clamp text-muted-foreground text-sm">
              Clips that you save using the Google Clips app will appear in Google Photos or your phone's gallery.
            </p>
          </li>
          <li className="border-b-[1px] border-border border-solid cursor-pointer py-3 group transition-property duration-[0.3s] md:hover:bg-foreground px-6 active">
            <button className="font-semibold text-lg mb-3 flex md:group-hover:text-background">Sign In</button>
            <p className="line-clamp text-muted-foreground text-sm transition-all duration-[0.3s]">
              Go to Google Photos. If you aren't signed in to your Google Account, click Go to Google Photos and sign
              in.
            </p>
            <ul className="mt-3 flex flex-wrap text-ellipsis [&>:not(:last-child)]:mr-2 overflow-hidden">
              <li>
                <a
                  href="#FIXME"
                  title="#react"
                  className="block md:hover:bg-secondary-hover md:hover:font-bold md:hover:text-hover-color rounded-full  text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
                >
                  #react
                </a>
              </li>
              <li>
                <a
                  href="#FIXME"
                  title="#redux"
                  className="block md:hover:bg-secondary-hover md:hover:font-bold md:hover:text-hover-color rounded-full  text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
                >
                  #redux
                </a>
              </li>
              <li>
                <a
                  href="#FIXME"
                  title="#google"
                  className="block md:hover:bg-secondary-hover md:hover:font-bold md:hover:text-hover-color rounded-full  text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
                >
                  #google
                </a>
              </li>
              <li>
                <a
                  href="#FIXME"
                  title="#js"
                  className="block md:hover:bg-secondary-hover md:hover:font-bold md:hover:text-hover-color rounded-full  text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
                >
                  #js
                </a>
              </li>
              <li>
                <a
                  href="#FIXME"
                  title="#css"
                  className="block md:hover:bg-secondary-hover md:hover:font-bold md:hover:text-hover-color rounded-full  text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
                >
                  #css
                </a>
              </li>
            </ul>
          </li>
          <li className="border-b-[1px] border-border border-solid py-3 cursor-pointer transition-property group duration-[0.3s] md:hover:bg-foreground px-6">
            <button className="text-foreground font-semibold text-lg mb-3 md:group-hover:text-background">
              Access{" "}
            </button>
            <p className="line-clamp text-muted-foreground text-sm">
              To access Google Photos on your phone, download Google Photos from the Google Play Store or iOS App Store.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
