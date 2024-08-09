import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className='relative md:mt-24 p-10 w-full'>
      <div className='grid grid-cols-1 text-center'>
        <h3 className='mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'>
          Have Question ?
        </h3>

        <p className='text-normal max-w-xl mx-auto'>
          {`Get in touch with us!
          <br /> We're here to help and provide the answers you need. Feel free
          to reach out anytime!`}
        </p>

        <div className='mt-6'>
          <Link
            href='/contact'
            className='py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md'>
            <i className='uil uil-phone align-middle me-2'></i> Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
