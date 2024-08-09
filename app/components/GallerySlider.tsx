"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Correct import for default Swiper styles
import "swiper/css/navigation"; // Import additional styles as needed
import "swiper/css/pagination"; // Import additional styles as needed
import Image from "next/image";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  gallery_images: string[];
}

interface GallaeySlide {
  data: GalleryItem[];
}

const GallerySlider = ({ data }: GallaeySlide) => {
  return (
    <>
      {data &&
        data.map((item, i) => (
          <div className='mb-20' key={i}>
            <h2 className='mb-3 box-title'>{item.title}</h2>
            <div
              className='mb-5 text-small'
              dangerouslySetInnerHTML={{ __html: item.description }}></div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className='mySwiper'>
              {item.gallery_images.map((image, key) => (
                <SwiperSlide key={key}>
                  <Image
                    className='h-auto max-w-full rounded-lg mb-0'
                    src={image}
                    width={1500}
                    height={1000}
                    alt='gallery image'
                    loading='lazy'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
    </>
  );
};

export default GallerySlider;
