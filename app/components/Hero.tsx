import React from "react";
import Image from "next/image";
import HeroImage from "../assets/image.jpg";
import Social from "./Social";

const Hero = () => {
  return (
    <div className='relative  mt-20 mb-10'>
      <div className='grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px] place-items-center'>
        <div className='md:col-span-5'>
          <div className='md:me-5'>
            <span className='font-bold text-2xl dark:text-violet-100'>
              A man is working as...
            </span>
            <h1 className='page-title text-left mb-5'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
                Fullstack developer
              </span>{" "}
              with{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
                Responsibility, Passion
              </span>{" "}
              and have a{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
                Big Dream.
              </span>
            </h1>
            <p className='text-normal'>
              {`I love coding and creating better products and websites.
              <br /> Let's work together on exciting projects, share ideas, and
              achieve great things.`}
            </p>
            <Social />
          </div>
        </div>

        <div className='md:col-span-7'>
          <div className='relative'>
            <Image
              src={HeroImage}
              width={675}
              height={375}
              className='h-auto w-auto rounded-lg mb-0'
              alt='Picture of the author'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
