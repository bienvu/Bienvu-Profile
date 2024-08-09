"use client";
import Image from "next/image";
import Avarta from "../assets/avarta.png";
import Link from "next/link";
import Social from "./Social";
import ProfileData from "./ProfileData";

export default function Intro() {
  return (
    <>
      <div className='grid grid-cols-1 lg:gap-x-20 gap-0 lg:grid-cols-5 lg:grid-rows-[auto_1fr] w-full'>
        <div className='max-w-2xl lg:col-span-3 mb-10'>
          <h1 className='page-title text-left'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
              Hello 👋
            </span>
          </h1>
          <div className='mt-6 text-normal'>
            <p className='mb-3'>
              {`I'm Bien, a skilled web developer specializing in PHP with CMS
              like Drupal, Wordpress and JavaScript. I have expertise in
              ReactJS, NextJS, as well as experience NodeJS, VueJS and Shopify.
              My focus is on creating high-quality web applications with
              excellent user experiences.`}
            </p>
            <p className='mb-3'>
              {`I have a keen interest in UX/UI design, Blockchain technology,
              Docker, and modern JavaScript frameworks. Outside of work, I enjoy
              reading, running, and traveling, which help me stay inspired and
              innovative.`}
            </p>
            <hr className='mt-6 mb-6' />
            <p className='mb-8'>
              {`Let me know if this aligns with your vision or if there are any
              other changes you'd like. Thank you!`}
            </p>
            <Link className='button-gradient' href='#'>
              View my Resume
            </Link>
          </div>
        </div>
        <div className='col-span-2 mb-10'>
          <ProfileData />
          <blockquote className='text-center pt-5 font-bold dark:text-zinc-200'>
            “The only way to do great work is to love what you do.” <br />
            <br />
            <b>Steve Jobs</b>
          </blockquote>
        </div>
      </div>
    </>
  );
}
