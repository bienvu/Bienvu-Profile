"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Root = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    // document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    if (darkMode === true) {
      localStorage.setItem("darkMode", false.toString());
    } else {
      localStorage.setItem("darkMode", true.toString());
    }
  };

  return (
    <html
      lang='en'
      className={
        darkMode
          ? "dark h-full antialiased js-focus-visible"
          : "h-full antialiased js-focus-visible"
      }>
      <body className='flex flex-col h-full bg-zinc-50 dark:bg-zinc-900 dark:scrollbar-thumb-violet-700 scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-violet-300 dark:scrollbar-track-violet-800'>
        <>
          <Header toggleTheme={toggleTheme} />
          <main className='container'>{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
};

export default Root;
