import { useState, useEffect } from "react";
import PrimaryNav from "./PrimaryNav";
import SideNav from "./SideNav";

const MainContent = () => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [width, setWidth] = useState("");

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setWidth(window.innerWidth);
    } else if (window.innerWidth >= 768) {
      setWidth(window.innerWidth);
    }
  }, [width]);

  return (
    <>
      <div className="bg-gray-400 flex-auto flex text-center bg-white rounded-tl-xl border-l shadow-xl relative">
        <SideNav isMainOpen={isMainOpen} width={width} />
        <PrimaryNav isMainOpen={isMainOpen} width={width} />
        <div
          className={
            !isMainOpen && width >= 768
              ? "w-full md:flex-auto h-screen"
              : isMainOpen && width <= 768
              ? "w-12"
              : "w-full absolute z-10 h-screen inset-y-0 right-0 transform translate-x-0 transition-all duration-300 ease-in-out"
          }
        >
          <div className="flex flex-auto justify-between h-12 items-center pl-3 pr-3 border-b-2 border-b-slate-500">
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
            <h3
              className={
                isMainOpen && width <= 768
                  ? "hidden"
                  : isMainOpen && width <= 768
                  ? "block"
                  : "block"
              }
            >
              Main content
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
