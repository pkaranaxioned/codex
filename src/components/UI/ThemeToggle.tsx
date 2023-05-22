import React, { useState, useEffect } from 'react';
import { Icons } from '../icon';

export const ToggleTheme: React.FC = () => {
    const [theme, setTheme] = useState<string>('dark');
    const [icon, setIcon] = useState<JSX.Element | null>(
        <Icons.system className="text-white" size={24} stroke={1} />
    );
    const [dropDownState, setDropDownState] = useState<boolean>(false);

    // Set icon based on theme
    useEffect(() => {
        setIcon(
            theme === 'dark' ? <Icons.darkTheme className="text-pink" size={24} stroke={1} /> : theme === 'light'
                ? <Icons.lightTheme className="text-pink" size={24} stroke={1} />
                : <Icons.system className="text-pink" size={24} stroke={1} />
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
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkMode ? 'dark' : 'system');
    }, []);

    // Update CSS class based on theme
    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme);
    }, [theme]);

    return (
        <div className={`w-full fixed bottom-0 py-2 bg-black border-t-[1px] border-light-grey`}>
            <button onClick={toggleThemeDropdown} className="flex mx-2 items-center text-white font-bold">
                <span>{icon}</span>
                <span className="text-[14px] ml-[3px]">Theme</span>
            </button>
            <ul
                className={`${dropDownState ? 'animate-theme-shutter-in' : 'animate-theme-shutter-out'
            } [&>:not(:last-child)]:border-b-[1px] [&>:not(:last-child)]:border-light-grey w-[90%] bg-slate-800 overflow-hidden rounded text-left absolute z-10 left-[15px] list-none pl-0`}
        
            >
               <li
                    className={`cursor-pointer m-0 p-1 hover:bg-slate-500 ${theme === 'light' ? 'bg-slate-500 text-white font-bold' : ''}`}
                    onClick={() => handleThemeSelection('light')}
                >
                    <span>
                        <Icons.lightTheme className={`${theme === 'light' ? 'text-[#E41C79] font-bold' : 'text-white'} px-1 inline-block`} size={28} stroke={1} />
                    </span>
                    <span className="text-[15px]">Light</span>
                </li>
                <li
                    className={`cursor-pointer m-0 p-1 hover:bg-slate-500 ${theme === 'dark' ? 'bg-slate-500 text-white font-bold' : ''}`}
                    onClick={() => handleThemeSelection('dark')}
                >
                    <span>
                        <Icons.darkTheme className={`${theme === 'dark' ? 'text-[#E41C79] font-bold' : 'text-white'} px-1 inline-block`} size={28} stroke={1} />
                    </span>
                    <span className="text-[15px]">Dark</span>
                </li>
                <li
                    className={`cursor-pointer m-0 p-1 hover:bg-slate-500 ${theme === 'system' ? 'bg-slate-500 text-white font-bold' : ''}`}
                    onClick={() => handleThemeSelection('system')}
                >
                    <span>
                        <Icons.system className={`${theme === 'system' ? 'text-[#E41C79] font-bold' : 'text-white'} px-1 inline-block`} size={28} stroke={1} />
                    </span>
                    <span className="text-[15px]">System</span>
                </li>
            </ul>
        </div>
    );
};