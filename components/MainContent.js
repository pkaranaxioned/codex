import { useState } from "react";
import PrimaryNav from "./PrimaryNav";
import SideNav from "./SideNav";

const MainContent = () => {
  const [isMainOpen, setIsMainOpen] = useState(false);

  return (
    <>
      <div className="flex-auto flex text-center bg-white rounded-tl-xl relative md:shrink-0 overflow-y-hidden h-screen">
        <SideNav isMainOpen={isMainOpen} />
        <PrimaryNav isMainOpen={isMainOpen} />
        <div
          className={` ${
            isMainOpen ? "w-12 md:w-full" : "w-full"
          } h-screen inset-y-0 right-0 transform translate-x-0 transition-all duration-500 ease-in-out`}
        >
          <div className="flex flex-auto justify-between h-14 items-center px-3 border-b-2 border-b-slate-500 overflow-y-auto overflow-x-hidden">
            <div onClick={() => setIsMainOpen((item) => !item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="w-6 h-6 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <div className="overflow-y-auto overflow-x-hidden">
            <h3 className={`${isMainOpen ? "hidden" : "block"} md:block`}>
              Main content
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
