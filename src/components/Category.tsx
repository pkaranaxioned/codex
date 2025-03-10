import type React from "react";
import { useStore } from "@nanostores/react";
import { isCategory } from "../store/toggleState";
import { Icons } from "./icon";
import { ToggleTheme } from "./UI/ThemeToggle";

export const Category: React.FC = (): JSX.Element => {
  const $isCategory = useStore(isCategory);
  return (
    <aside
      className={`lg:visible ${$isCategory === null ? "invisible" : $isCategory ? "animate-slide-in-left" : "animate-slide-out-left"} z-[12] border-0 lg:border-r-[1px] border-border border-solid lg:animate-none pt-4 w-11/12 sm:w-1/2 md:w-2/6 lg:w-auto top-0 left-0 -translate-x-full lg:translate-x-0 ease-in-out absolute lg:relative xl:basis-1/5 lg:basis-1/4 flex h-screen lg:min-w-[300px] bg-background lg:bg-inherit flex-col category`}
    >
      <div className="py-4 flex items-center justify-between lg:justify-center">
        <h1 className="text-4xl text-foreground font-bold ml-[3%]">Codex</h1>
        <span
          className="lg:hidden block cursor-pointer relative top-[2px] left-[-5%]"
          title="Close"
          onClick={() => isCategory.set(!$isCategory)}
        >
          <Icons.close className="stroke-foreground" size={24} stroke={1} />
        </span>
      </div>
      <div className="h-[calc(100vh_-_80px)] overflow-y-auto scrollbar px-3">
        <h2 className="text-sm mb-4 font-bold text-muted-foreground">Snippets</h2>
        <ul className="border-solid rounded-xl border-primary [&>:not(:last-child)]:mb-2 text-muted-foreground text-sm font-medium">
          <li>
            <a
              href="#FIXME"
              title="React"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.react className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                React
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                20
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="Google Suite"
              className="w-full basis-3 items-center group md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.google className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                Google Suite
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                5
              </span>
            </a>

            <div className="ml-6 mt-2 [&>:not(:last-child)]:mb-2">
              <a
                href="#FIXME"
                title="Gmail"
                className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
              >
                <Icons.gmail className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
                <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                  Gmail
                </span>
                <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                  2
                </span>
              </a>
              <a
                href="#FIXME"
                title="Google Photos"
                className="active w-full items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
              >
                <Icons.googlePhotos className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
                <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                  Google Photos
                </span>
                <span className="rounded-full ml-2 text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                  3
                </span>
              </a>
            </div>
          </li>
          <li>
            <a
              href="#FIXME"
              title="Javascript"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.javascript className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                Javascript
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                240
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="HTML"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.html className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                HTML
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                100
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="CSS"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.css className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                CSS
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                98
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="PHP"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.php className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                PHP
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                36
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="WordPress"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.wordpress className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                WordPress
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                14
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="Node"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.npm className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                Node
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                55
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="Gatsby"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.gatsby className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                Gatsby
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                01
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="Docusaurus"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.docusaurus className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                Docusaurus
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                35
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="Figma"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.figma className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                Figma
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                64
              </span>
            </a>
          </li>
          <li>
            <a
              href="#FIXME"
              title="SEO"
              className="w-full basis-3 items-center md:hover:bg-primary md:hover:font-bold md:hover:text-background group transition-all flex p-3 rounded-xl relative"
            >
              <Icons.seo className="stroke-foreground md:group-hover:stroke-background" size={24} stroke={1} />
              <span className="ml-2 text-ellipsis overflow-hidden basis-[70%] whitespace-nowrap block text-left">
                SEO
              </span>
              <span className="rounded-full ml-2 md:group-hover:bg-secondary-hover  md:group-hover:text-hover-color text-secondary-hover basis-3 bg-primary-hover py-0.5 px-2 absolute top-1/2 right-3 -translate-y-1/2 text-xs">
                68
              </span>
            </a>
          </li>
        </ul>
        <div className="mt-3">
          <h2 className="text-sm font-bold text-muted-foreground">Tags</h2>
          <ul className="py-4 flex flex-wrap [&>:not(:last-child)]:mr-2">
            <li>
              <a
                href="#FIXME"
                title="#react"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #react
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#redux"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #redux
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#google"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #google
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#js"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #js
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#css"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #css
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#responsive"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #responsive
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#react"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #react
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#redux"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #redux
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#google"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #google
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#js"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #js
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#css"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #css
              </a>
            </li>
            <li>
              <a
                href="#FIXME"
                title="#responsive"
                className="block md:hover:bg-secondary-hover md:hover:text-hover-color md:hover:font-bold rounded-full text-muted-foreground text-sm bg-secondary py-1 px-3 mb-2"
              >
                #responsive
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ToggleTheme />
    </aside>
  );
};
