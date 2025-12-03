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
              Hi there 👋 — I&apos;m Bien!
            </span>
            <h1 className='page-title text-left mb-5 text-4xl'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
                A Fullstack developer
              </span>{" "}
              with{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
                12+ years experience
              </span>{" "}
              of {" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
                Web Development!
              </span>
            </h1>
            <p className='text-normal'>
              {`Skilled in React, Vue, Node.js, PHP, MySQL, MongoDB, and GraphQL, delivering fast and maintainable solutions. Experienced with Drupal, WordPress, Shopify, and cloud deployments. Strong in Git, CI/CD, UX/UI, Agile workflows, and mentoring. Passionate about problem-solving, continuous learning, and building high-quality digital experiences.`}
            </p>
            <Social />
          </div>
        </div>

        <div className='md:col-span-7'>
          <div className='relative'>
            <Image
              src={HeroImage}
              width={675}
              height={475}
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
