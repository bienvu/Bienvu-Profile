import React from "react";
import Image from "next/image";
import Link from "next/link";
import GalleryImage from "../assets/gallery.png";
import TextHeader from "./TextHeader";

const Gallery = () => {
  return (
    <div className='my-10 lg:my-20'>
      <TextHeader title='View my Journey' align='text-center' body='' link='' />
      <Link href='/gallery'>
        <Image src={GalleryImage} width={1920} alt='My galleey' />
      </Link>
    </div>
  );
};

export default Gallery;
