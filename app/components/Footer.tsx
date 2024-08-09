import Social from "./Social";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='container pb-8 pt-10'>
      <div className='border-t border-gray-900/10 pt-8   md:flex md:items-center md:justify-between   dark:border-neutral-700'>
        <Social />
        <div className='mt-8 text-[13px] text-center md:text-left leading-5 text-gray-500 md:order-1 md:mt-0'>
          @2024{" "}
          <b>
            <Link target='_blank' href='https://github.com/bienvu'>
              Bienvu.it
            </Link>
          </b>
          , all rights reserved.
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='far'
            data-icon='code'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            className='w-5 px-1 svg-inline--fa inline-block fa-code fa-w-16'>
            <path
              fill='currentColor'
              d='M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z'></path>
          </svg>
          with{" "}
          <span className='inline-block w-4 w-5 px-1 '>
            <span className='sr-only'>love</span>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='heart'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='animate-ping heart-background text-red-300 z-10 svg-inline--fa fa-heart fa-w-16'>
              <path
                fill='currentColor'
                d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'></path>
            </svg>{" "}
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='heart'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='text-red-600 svg-inline--fa fa-heart fa-w-16'>
              <path
                fill='currentColor'
                d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'></path>
            </svg>
          </span>
          for a better web.
        </div>
      </div>
    </footer>
  );
}
