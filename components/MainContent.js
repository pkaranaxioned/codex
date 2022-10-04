import { useState } from "react";
import PrimaryNav from "./PrimaryNav";

const MainContent = () => {
  const [isMainOpen, setIsMainOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-400 flex-auto flex text-center bg-white rounded-tl-xl border-l shadow-xl relative">
        <PrimaryNav />
        <div
          className={
            isMainOpen
              ? "pt-3 pb-3 w-full absolute z-10 bg-slate-600 h-full inset-y-0 left-0 transform translate-x-0 transition duration-200 ease-in-out"
              : "pt-3 pb-3 w-12 md:flex-auto"
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
            <h3 className="hidden md:block">Main content</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
