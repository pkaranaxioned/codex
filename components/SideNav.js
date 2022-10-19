import React from "react";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
} from "../assets/icons/Icon1";

const SideNav = ({ isMainOpen }) => {
  const sideNavData = [
    {
      icon: <Icon1 />,
      text: "You",
    },
    {
      icon: <Icon2 />,
      text: "Snippet",
    },
    {
      icon: <Icon3 />,
      text: "Code",
    },
    {
      icon: <Icon4 />,
      text: "Blog",
    },
    {
      icon: <Icon5 />,
      text: "Profile",
    },
    {
      icon: <Icon6 />,
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
              <span>{item.icon}</span>
              <h3 className="overflow-hidden text-ellipsis max-w-[4rem] px-2 sm:px-0">
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
