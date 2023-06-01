import React, { useState, useEffect } from "react";
import { Icons } from "../icon";

export const ToggleTheme: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  const [icon, setIcon] = useState<JSX.Element | null>(
    <Icons.system className="text-foreground" size={24} stroke={1} />
  );
  const [dropDownState, setDropDownState] = useState<boolean | null >(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  // Set icon based on theme
  useEffect(() => {
    setIcon(
      theme === "dark" ? (
        <Icons.darkTheme className="text-secondary-hover" size={24} stroke={1} />
      ) : theme === "light" ? (
        <Icons.lightTheme className="text-secondary-hover" size={24} stroke={1} />
      ) : (
        <Icons.system className="text-secondary-hover" size={24} stroke={1} />
      )
    );
  }, [theme]);

  // Toggle the theme dropdown
  const toggleThemeDropdown = () => {
    setDropDownState((prevState) => !prevState);
  };

  // Handle click events for list items
  const handleThemeSelection = (selectedTheme: string) => {
    setTheme(selectedTheme);
    setDropDownState(false);
  };

  // Check system preference and set initial theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    storedTheme ? setTheme(storedTheme) : setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "system");
    setInitialized(true);
  }, []);

  // Update CSS class based on theme
  useEffect(() => {
    if (initialized) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(
        theme === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : theme
      );
      localStorage.setItem('theme', theme)
    }
  }, [theme, initialized]);

  return (
      <div className="w-full bg-background fixed bottom-0 border-t-[1px] border-border">
        <button onClick={toggleThemeDropdown} className={`flex w-full p-2 items-center text-foreground font-bold`}>
          <span className={`${initialized ? 'visible' : 'invisible'}`}>{icon}</span>
          <span className="text-[14px] ml-[3px]">Theme</span>
        </button>
        <ul
          className={`${dropDownState === true && "animate-theme-fade-in"} ${dropDownState === false && "animate-theme-fade-out"}
            } ${theme === "system" || theme === "light" ? "shadow-light" : theme === "dark" ? "shadow-dark" : ""} [&>:not(:last-child)]:border-b-[1px] [&>:not(:last-child)]:border-muted-foreground w-[90%] bg-background text-foreground overflow-hidden rounded text-left absolute z-10 left-[15px] list-none pl-0`}
        >
          <li
            className={`cursor-pointer m-0 p-1 hover:bg-theme ${theme === "light" ? "bg-foreground text-background font-bold" : ""
              }`}
            onClick={() => handleThemeSelection("light")}
          >
            <span>
              <Icons.lightTheme
                className={`${theme === "light" ? "text-secondary-hover font-bold" : "text-foreground"} px-1 inline-block`}
                size={28}
                stroke={1}
              />
            </span>
            <span className="text-[15px]">Light</span>
          </li>
          <li
            className={`cursor-pointer m-0 p-1 hover:bg-theme ${theme === "dark" ? "bg-foreground text-background font-bold" : ""
              }`}
            onClick={() => handleThemeSelection("dark")}
          >
            <span>
              <Icons.darkTheme
                className={`${theme === "dark" ? "text-secondary-hover font-bold" : "text-foreground"} px-1 inline-block`}
                size={28}
                stroke={1}
              />
            </span>
            <span className="text-[15px]">Dark</span>
          </li>
          <li
            className={`cursor-pointer m-0 p-1 hover:bg-theme ${theme === "system" ? "bg-foreground text-background font-bold" : ""
              }`}
            onClick={() => handleThemeSelection('system')}
          >
            <span>
              <Icons.system
                className={`${theme === 'system' ? "text-secondary-hover font-bold" : "text-foreground"} px-1 inline-block`}
                size={28}
                stroke={1}
              />
            </span>
            <span className="text-[15px]">System</span>
          </li>
        </ul>
      </div> 
  );
};