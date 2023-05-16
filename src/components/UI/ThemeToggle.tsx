import React, { useState, useEffect } from 'react';
import { Icons } from '../icon';

export const ToggleTheme: React.FC = () => {
    const [theme, setTheme] = useState<string>('light');
    const [icon, setIcon] = useState<JSX.Element | null>(
        <Icons.system className="text-white" size={24} stroke={1} />
    );
    const [dropDownState, setdropDownState] = useState<string>('hidden');

    // Set icon based on theme
    useEffect(() => {
        const iconToggle = () => {
            if (theme === 'darktheme') {
                setIcon(<Icons.darkTheme className="text-white" size={24} stroke={1} />);
            } else if (theme === 'lightTheme') {
                setIcon(<Icons.lightTheme className="text-white" size={24} stroke={1} />);
            } else {
                setIcon(<Icons.system className="text-white" size={24} stroke={1} />);
            }
        };
        iconToggle();
    }, [theme]);

    // Toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        setdropDownState((prevState) => (prevState === 'hidden' ? 'block' : 'hidden'));

    };

    // Handle click events for list items
    const handleThemeSelection = (selectedTheme: string) => {
        setTheme(selectedTheme);
        setdropDownState((prevState) => (prevState === 'hidden' ? 'block' : 'hidden'));
    };

    // Check system preference and set initial theme
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkMode ? 'dark' : 'light');
    }, []);

    // Update CSS class based on theme
    // for now commenting this code to set light,dark and system theme using class
    // useEffect(() => {
    //     document.body.className = theme;
    // }, [theme]);

    return (
        <div className='absolute right-[2.5%]'>
            <button onClick={toggleTheme} className="flex text-white font-bold">
                <span>{icon}</span><span className='text-[14px] ml-[3px]'>Theme</span> 
            </button>
            <ul className={dropDownState}>
                <li onClick={() => handleThemeSelection('lightTheme')}>
                    <span>
                        <Icons.lightTheme className="text-white" size={24} stroke={1} />
                    </span>
                    light
                </li>
                <li onClick={() => handleThemeSelection('darktheme')}>
                    <span>
                        <Icons.darkTheme className="text-white" size={24} stroke={1} />
                    </span>
                    dark
                </li>
                <li onClick={() => handleThemeSelection('system')}>
                    <span>
                        <Icons.system className="text-white" size={24} stroke={1} />
                    </span>
                    OS default
                </li>
            </ul>
        </div>
    );
};