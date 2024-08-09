import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className='pt-24 pb-24'>
      <div className='max-w-2xl'>
        <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
          Do you want to build{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-700'>
            quality Website or Product?
          </span>
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
            Hire me!
          </span>
        </h1>
        <p className='mt-6 text-lg text-zinc-600 dark:text-zinc-300'>
          Results-oriented software engineer with five years of experience
          working with international teams. Focused on design and
          implementation. Skilled in Agile processes, Back-end and Front-end
          development, and technical writing.
        </p>
      </div>
      <div className='mt-16 sm:mt-20'>
        <div className='max-w-2xl mt-16 sm:mt-20'>
          <h2 className='text-3xl font-semibold tracking-tight text-zinc-800 dark:text-violet-100'>
            Key highlights of how I provide value
          </h2>
          <p className='mt-4 text-base text-zinc-600 dark:text-zinc-300'>
            I strive to uphold the high standards and am committed to providing
            you with high value, ensuring that your investment in me is well
            worth it.
          </p>
          <ul
            role='list'
            className='mt-8 space-y-3 list-inside text-zinc-600 dark:text-zinc-300'>
            <li className='flex'>
              <span className='ml-4'>
                Building scalable, efficient, and secure web applications that
                are fully responsive, cross-browser compatible, accessible, and
                user-friendly.
              </span>
            </li>
            <li className='flex'>
              <span className='ml-4'>
                Using my deep understanding of programming languages,
                frameworks, and tools to write clean, efficient, and
                maintainable code.
              </span>
            </li>
            <li className='flex'>
              <span className='ml-4'>
                Using unit testing, integration testing, and automated testing,
                to catch bugs and errors before they impact the user experience.
              </span>
            </li>
            <li className='flex'>
              {/* <svg
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='flex-none w-6 h-6 text-violet-500'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'></path>
              </svg> */}
              <span className='ml-4'>
                Prioritizing open communication and teamwork, working closely
                with colleagues and clients to ensure that the software I
                develop meets their needs and expectations.
              </span>
            </li>
            <li className='flex'>
              {/* <svg
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='flex-none w-6 h-6 text-violet-500'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'></path>
              </svg> */}
              <span className='ml-4'>
                Staying up-to-date with the latest technologies and techniques
                to ensure my work is always cutting-edge.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
