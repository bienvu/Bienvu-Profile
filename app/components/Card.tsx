import React from "react";

interface Card {
  key: number;
  id: number;
  title: string;
  content: string;
  link: string;
  type: string[];
}

const Card = ({ id, title, content, link, type }: Card) => {
  return (
    <li className='group relative flex flex-col items-start'>
      <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100 uppercase'>
        <div className='absolute z-0 transition scale-95 bg-white  -inset-y-6 -inset-x-4 shadow-xl group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
        <a target='_blank' href={link}>
          <span className='absolute inset-0 z-20'></span>
          <span className='relative z-10 mr-2 border-slate-500 border-2 rounded-full inline-block text-center w-[28px]'>
            {id + 1}
          </span>
          <span className='relative z-10'>{title}</span>
        </a>
      </h2>
      <p
        className='relative z-10 mt-5 text-small'
        dangerouslySetInnerHTML={{
          __html: content,
        }}></p>

      <div className='relative z-10 flex text-tiny mb-2'>
        <svg
          viewBox='0 0 24 24'
          aria-hidden='true'
          className='flex-none w-6 h-6'>
          <path
            d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
            fill='currentColor'></path>
        </svg>
        <span className='ml-2'>{link}</span>
      </div>
      <span className='relative z-10 text-tiny flex'>
        <span className='flex-none w-6 h-6 text-center'>#</span>
        <span className='ml-2'>{type.join(", ")}</span>
      </span>
    </li>
  );
};

export default Card;
