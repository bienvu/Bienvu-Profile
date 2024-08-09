import React from "react";
import FocusImage from "../assets/focus2.png";
import Image from "next/image";
import TextHeader from "./TextHeader";

const WhatWeDo = () => {
  return (
    <div className='container relative mt-20'>
      <TextHeader
        title='What I Love'
        body='I concentrate on coding and improving my skills, while also valuing time with family and friends. I’m forward-thinking, committed to a healthy lifestyle, and always eager to learn and grow.'
        align='text-center'
        link=''
      />
      <div className='grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-[30px] items-center'>
        <div className='lg:col-span-4 md:col-span-6 lg:order-1 order-2'>
          <div className='grid grid-cols-1 gap-[30px]'>
            <div className='group flex duration-500 xl:p-3 items-center'>
              <div className='icon-rounded md:order-2 order-1'>💻</div>
              <div className='flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4'>
                <h4 className='mb-0 text-lg font-medium'>Coding {"</>"}</h4>
                <p className='text-small mt-3'>
                  Enhancing programming skills and exploring new technologies.
                </p>
              </div>
            </div>

            <div className='group flex duration-500 xl:p-3 items-center'>
              <div className='icon-rounded md:order-2 order-1'>❤️</div>
              <div className='flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4'>
                <h4 className='mb-0 text-lg font-medium'>Family</h4>
                <p className='text-small mt-3'>
                  Spending quality time with family and nurturing relationships.
                </p>
              </div>
            </div>

            <div className='group flex duration-500 xl:p-3 items-center'>
              <div className='icon-rounded md:order-2 order-1'>🏋️‍♂️</div>
              <div className='flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4'>
                <h4 className='mb-0 text-lg font-medium'>Healthy</h4>
                <p className='text-small mt-3'>
                  Planning and preparing for upcoming opportunities and
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:col-span-4 md:col-span-12 lg:mx-8 lg:order-2 order-1'>
          <Image
            src={FocusImage}
            width={450}
            height={450}
            className='h-250 w-250 rounded-full mb-0'
            alt='Picture of the author'
          />
        </div>

        <div className='lg:col-span-4 md:col-span-6 order-3'>
          <div className='grid grid-cols-1 gap-[30px]'>
            <div className='group flex duration-500 xl:p-3 items-center'>
              <div className='icon-rounded'>🚀</div>
              <div className='flex-1 ms-4'>
                <h4 className='mb-0 text-lg font-medium'>Future</h4>
                <p className='text-small mt-3'>
                  Maintaining a healthy lifestyle through exercise and balanced
                  nutrition.
                </p>
              </div>
            </div>

            <div className='group flex duration-500 xl:p-3 items-center'>
              <div className='icon-rounded'>🧠</div>
              <div className='flex-1 ms-4'>
                <h4 className='mb-0 text-lg font-medium'>Leaning</h4>
                <p className='text-small mt-3'>
                  Continuously expanding knowledge and skills.
                </p>
              </div>
            </div>

            <div className='group flex duration-500 xl:p-3 items-center'>
              <div className='icon-rounded'>🤝</div>
              <div className='flex-1 ms-4'>
                <h4 className='mb-0 text-lg font-medium'>Friends</h4>
                <p className='text-small mt-3'>
                  Building and maintaining strong friendships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
