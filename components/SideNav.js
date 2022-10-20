import React from "react";

import {
  BeakerIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const SideNav = ({ isMainOpen }) => {
  const sideNavData = [
    {
      icon: <BeakerIcon />,
      text: "You",
    },
    {
      icon: <AcademicCapIcon />,
      text: "Snippet",
    },
    {
      icon: <BookmarkSquareIcon />,
      text: "Code",
    },
    {
      icon: <CalendarIcon />,
      text: "Blog",
    },
    {
      icon: <ChartPieIcon />,
      text: "Profile",
    },
    {
      icon: <Cog6ToothIcon />,
      text: "All",
    },
  ];

  return (
    <div
      className={`${
        isMainOpen ? "block" : "min-w-[5rem] hidden"
      } md:block w-auto md:shrink-0`}
    >
      <h3 className="font-bold text-lg p-[13px] border-b-2 border-b-slate-500">
        Items
      </h3>
      <ul className="bg-gray-200 overflow-y-auto overflow-x-hidden h-screen">
        {sideNavData.map((item, i) => {
          return (
            <li
              className="p-2 flex justify-center lg:justify-start border-b-2 border-gray-300 flex-col items-center"
              key={i}
            >
              <span className="w-6 h-6">{item.icon}</span>
              <h3
                className="overflow-hidden text-ellipsis max-w-[4rem] px-2 sm:px-0"
                title={item.text}
              >
                {item.text}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
