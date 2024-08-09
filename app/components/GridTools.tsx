import React from "react";
import Image from "next/image";
import js from "../assets/tools/js.svg";
import bootstrap from "../assets/tools/bootstrap.svg";
import docker from "../assets/tools/docker.svg";
import git from "../assets/tools/git.svg";
import drupal from "../assets/tools/drupal.png";
import php from "../assets/tools/php.png";
import reactjs from "../assets/tools/reactjs.png";
import wordpress from "../assets/tools/wordpress.png";
import mongo from "../assets/tools/mongo.svg";
import mysql from "../assets/tools/mysql.svg";
import nextjs from "../assets/tools/nextjs.svg";
import nodejs from "../assets/tools/nodejs.svg";
import ps from "../assets/tools/ps.svg";
import tailwind from "../assets/tools/tailwind.svg";
import ts from "../assets/tools/ts.svg";
import xd from "../assets/tools/xd.svg";
import vite from "../assets/tools/vite.png";
import shopify from "../assets/tools/shopify.png";

const GridTools = () => {
  return (
    <div className='flex justify-center mx-auto mt-4 mb-10 flex-wrap'>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={drupal}
          width={100}
          height={100}
          alt='drupal'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={wordpress}
          width={100}
          height={100}
          alt='wordpress'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={shopify}
          width={100}
          height={100}
          alt='shopify'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={js}
          width={100}
          height={100}
          alt='js'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={ts}
          width={100}
          height={100}
          alt='ts'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={reactjs}
          width={100}
          height={100}
          alt='reactjs'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={vite}
          width={100}
          height={100}
          alt='vite'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={nextjs}
          width={100}
          height={100}
          alt='aaa'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={nodejs}
          width={100}
          height={100}
          alt='aaa'
        />
      </div>

      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={php}
          width={100}
          height={100}
          alt='aaa'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={mongo}
          width={100}
          height={100}
          alt='aaa'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={mysql}
          width={100}
          height={100}
          alt='aaa'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={docker}
          width={100}
          height={100}
          alt='aaa'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={git}
          width={100}
          height={100}
          alt='aaa'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={tailwind}
          width={100}
          height={100}
          alt='aaa'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={bootstrap}
          width={100}
          height={100}
          alt='bootstrap'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={ps}
          width={100}
          height={100}
          alt='aaa'
        />
      </div>
      <div className='w-28 h-28 p-2 '>
        <Image
          className='p-2 rounded-md border-violet-600 border-2 w-full h-full  bg-zinc-50'
          src={xd}
          width={100}
          height={100}
          alt='xd'
        />
      </div>
    </div>
  );
};

export default GridTools;
