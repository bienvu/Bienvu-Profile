import React from "react";

const Intro2 = () => {
  return (
    <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 pt-24 pb-24'>
      <div className='lg:pl-20'>
        <div className='max-w-xs lg:max-w-none'>
          <figure className='border-double border-8 border-sky-400 shadow-2xl rounded-full overflow-hidden'>
            <Image width='450' height='450' src={Avarta} alt='Avarta' />
          </figure>
        </div>
      </div>
      <div className='lg:order-first lg:row-span-2'>
        <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
          I'm{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-500'>
            Bien
          </span>
          , The person who is always become better by his way to make a{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
            better world
          </span>
          .{" "}
        </h1>
        <div className='mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-300'>
          <p className='mb-16 text-lg sm:mb-20'>
            As a software engineer with 8 years of experience in developing
            quality website, I use my knowledge to help businesses transform
            their operations and achieve their goals. I'm passionate about using
            technology to make a real difference.
          </p>
          <h2 className='text-3xl font-semibold tracking-tight text-zinc-800 dark:text-violet-100'>
            Look at into my Story
          </h2>
          <p>
            I've loved making things for as long as I can remember and started
            tinkering with computers when I was just 6 years old, and I quickly
            fell in love with them. I spent countless hours teaching myself to
            code in various languages, from Visual Basic to JavaScript.
          </p>
          <p>
            As a kid, I was always fascinated by the power of technology to
            connect people and make the world a better place. I dreamed of
            creating software that could help solve some of the world's biggest
            problems, from climate change to poverty to healthcare.
          </p>
          <p>
            That passion led me to study computer science at university, where I
            honed my skills and worked on various exciting projects. It was my
            6th semester when I joined a startup that aimed to digitalize small
            businesses, where I helped build web applications that replaced
            paper-based files.
          </p>
        </div>
      </div>
      <div className='lg:pl-20'>
        <ul role='list'>
          <li className='flex'>
            <a
              target='_blank'
              className='flex text-sm font-medium transition group text-zinc-800 hover:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-500'
              href='https://twitter.com/hassibmoddasser'>
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='flex-none w-6 h-6 transition fill-violet-500 group-hover:fill-violet-500'>
                <path d='M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z'></path>
              </svg>
              <span className='ml-4'>Follow on Twitter</span>
            </a>
          </li>
          <li className='mt-4 flex'>
            <a
              target='_blank'
              className='flex text-sm font-medium transition group text-zinc-800 hover:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-500'
              href='https://github.com/hassibmoddasser'>
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='flex-none w-6 h-6 transition fill-violet-500 group-hover:fill-violet-500'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z'></path>
              </svg>
              <span className='ml-4'>Follow on GitHub</span>
            </a>
          </li>
          <li className='mt-4 flex'>
            <a
              target='_blank'
              className='flex text-sm font-medium transition group text-zinc-800 hover:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-500'
              href='https://linkedin.com/in/hassibmoddasser'>
              <svg
                viewBox='0 0 24 24'
                className='flex-none w-6 h-6 transition fill-violet-500 group-hover:fill-violet-500'>
                <path d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z'></path>
              </svg>
              <span className='ml-4'>Follow on LinkedIn</span>
            </a>
          </li>
          <li className='mt-4 flex'>
            <a
              target='_blank'
              className='flex text-sm font-medium transition group text-zinc-800 hover:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-500'
              href='https://facebook.com/hassibmo'>
              <svg
                viewBox='0 0 24 24'
                className='flex-none w-6 h-6 transition fill-violet-500 group-hover:fill-violet-500'>
                <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'></path>
              </svg>
              <span className='ml-4'>Follow on Facebook</span>
            </a>
          </li>
          <li className='pt-8 mt-8 border-t border-violet-100 dark:border-violet-700/40 flex'>
            <a
              target='_blank'
              className='flex text-sm font-medium transition group text-zinc-800 hover:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-500'
              href='mailto:hassib.moddasser@gmail.com'>
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='flex-none w-6 h-6 transition fill-violet-500 group-hover:fill-violet-500'>
                <path
                  fillRule='evenodd'
                  d='M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z'></path>
              </svg>
              <span className='ml-4'>
                bienvuit@gmail.com | tienbienit1992@gmail.com
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro2;
