// "use client";
import { usePathname } from "next/navigation";
import { navMenu } from "../data/data";
import Link from "next/link";
import { useEffect, useState } from "react";
interface NavProps {
  isDropdownOpen: boolean;
  closeDropdown: () => void; // Adjust the function type if it takes parameters or returns something
}

export default function Nav({ isDropdownOpen, closeDropdown }: NavProps) {
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`${
          isDropdownOpen
            ? "block absolute z-10 top-full right-0 mt-2 w-48 bg-white"
            : "hidden"
        } pointer-events-auto md:block`}>
        <ul className='flex flex-wrap md:flex-nowrap px-3 text-base font-medium md:rounded-full shadow-lg bg-white/90 text-zinc-800 shadow-violet-800/5 ring-1 ring-violet-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
          {navMenu.map((item, i) => (
            <li className='w-full md:w-max' key={i}>
              <Link
                onClick={closeDropdown}
                className={`relative block px-5 py-3 transition hover:text-violet-500 dark:hover:text-violet-400 ${
                  pathname === item.href
                    ? "text-violet-500 dark:text-violet-400"
                    : "text-zinc-800 dark:text-zinc-200"
                }`}
                href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Dropdown */}
      {/* <div
        className={`absolute z-10 top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg dark:bg-zinc-800 dark:border-violet-700 ${
          isDropdownOpen ? "block" : "hidden"
        }`}>
        <ul>
          {navMenu.map((item, i) => (
            <li className='w-max' key={i}>
              <Link
                className={`relative block px-5 py-3 transition hover:text-violet-500 dark:hover:text-violet-400 ${
                  pathname === item.href
                    ? "text-violet-500 dark:text-violet-400"
                    : "text-zinc-800 dark:text-zinc-200"
                }`}
                href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
