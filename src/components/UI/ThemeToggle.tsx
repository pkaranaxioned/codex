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
        if (theme === 'dark') {
            setIcon(<Icons.darkTheme className="text-white" size={24} stroke={1} />);
        } else if (theme === 'light') {
            setIcon(<Icons.lightTheme className="text-white" size={24} stroke={1} />);
        } else {
            setIcon(<Icons.system className="text-white" size={24} stroke={1} />);
        }
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
        setTheme(prefersDarkMode ? 'dark' : 'light');
    }, []);

    // Update CSS class based on theme
    useEffect(() => {
        const body = document.body;

        body.classList.remove('light', 'dark');

        if (theme === 'system') {
            body.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        } else {
            body.classList.add(theme);
        }
    }, [theme]);

    return (
        <div className="absolute w-36 right-[2.5%]">
            <div className="flex justify-end">
                <button onClick={toggleThemeDropdown} className="flex items-center text-white font-bold">
                    <span>{icon}</span>
                    <span className="text-[14px] ml-[3px]">Theme</span>
                </button>
            </div>
            <ul
                className={`${dropDownState ? 'block' : 'hidden'
                    } w-full bg-slate-800 overflow-hidden rounded text-left absolute top-[9px] right-[2.3%] list-none pl-0`}
            >
                <li
                    className={`cursor-pointer m-0 p-1 hover:bg-slate-500 ${theme === 'light' ? 'bg-slate-500' : ''}`}
                    onClick={() => handleThemeSelection('light')}
                >
                    <span>
                        <Icons.lightTheme className="text-white px-1 inline-block" size={28} stroke={1} />
                    </span>
                    <span className="text-[15px]">Light</span>
                </li>
                <li
                    className={`cursor-pointer m-0 p-1 hover:bg-slate-500 ${theme === 'dark' ? 'bg-slate-500' : ''}`}
                    onClick={() => handleThemeSelection('dark')}
                >
                    <span>
                        <Icons.darkTheme className="text-white px-1 inline-block" size={28} stroke={1} />
                    </span>
                    <span className="text-[15px]">Dark</span>
                </li>
                <li
                    className={`cursor-pointer m-0 p-1 hover:bg-slate-500 ${theme === 'system' ? 'bg-slate-500' : ''}`}
                    onClick={() => handleThemeSelection('system')}
                >
                    <span>
                        <Icons.system className="text-white px-1 inline-block" size={28} stroke={1} />
                    </span>
                    <span className="text-[15px]">OS default</span>
                </li>
            </ul>
        </div>
    );
};