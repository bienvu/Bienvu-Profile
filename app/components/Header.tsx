"use client";

import Nav from "./Nav";
import { useState } from "react";

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const handleClick = () => {
    toggleTheme(); // Toggles the theme mode in the Layout component
  };

  const [isOpen, SetIsOpen] = useState(false);

  const toggleDropdown = () => {
    SetIsOpen((prevState) => !prevState);
    // SetIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    SetIsOpen(false);
  };

  return (
    <>
      <header className='relative z-50 flex flex-col pointer-events-none'>
        <div className='top-0 z-10 h-16 pt-6'>
          <div className='sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full'>
            <div className='mx-auto max-w-7xl lg:px-8'>
              <div className='relative px-4 sm:px-8 lg:px-12'>
                <div className='max-w-2xl mx-auto lg:max-w-5xl'>
                  <div className='relative flex gap-4 items-center'>
                    <div className='flex flex-1'></div>
                    <div className='flex justify-end flex-1 md:justify-center'>
                      <div
                        className='pointer-events-auto md:hidden'
                        data-headlessui-state=''>
                        <button
                          className='flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group bg-white/90 text-zinc-800 shadow-violet-800/5 ring-1 ring-violet-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
                          id='headlessui-popover-button-:r0:'
                          type='button'
                          aria-expanded='false'
                          onClick={toggleDropdown}
                          data-headlessui-state=''>
                          Menu{" "}
                          <svg
                            viewBox='0 0 8 6'
                            aria-hidden='true'
                            className='w-2 h-auto ml-3 stroke-violet-500 group-hover:stroke-violet-700 dark:group-hover:stroke-violet-400'>
                            <path
                              d='M1.75 1.75 4 4.25l2.25-2.5'
                              fill='none'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'></path>
                          </svg>
                        </button>
                      </div>
                      <Nav
                        isDropdownOpen={isOpen}
                        closeDropdown={closeDropdown}
                      />
                    </div>
                    <div className='flex justify-end md:flex-1'>
                      <div className='pointer-events-auto'>
                        <button
                          onClick={handleClick}
                          type='button'
                          aria-label='Toggle dark mode'
                          className='px-3 py-3 transition rounded-full shadow-lg group bg-white/90 shadow-violet-800/5 ring-1 ring-violet-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'>
                          <svg
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            aria-hidden='true'
                            className='h-6 w-6 fill-violet-100 stroke-violet-500 transition group-hover:fill-violet-200 group-hover:stroke-violet-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-violet-50 [@media(prefers-color-scheme:dark)]:stroke-violet-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-violet-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-violet-600'>
                            <path d='M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z'></path>
                            <path
                              d='M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061'
                              fill='none'></path>
                          </svg>
                          <svg
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                            className='hidden h-6 w-6 fill-violet-700 stroke-violet-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-violet-400 [@media_not_(prefers-color-scheme:dark)]:fill-violet-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-violet-500'>
                            <path
                              d='M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
