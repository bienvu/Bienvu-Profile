import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import TextHeader from "./components/TextHeader";
import IchigaiImage from "./assets/ichigai.png";
import Image from "next/image";
import GridTools from "./components/GridTools";

export default function Home() {
  return (
    <>
      <Hero />
      <GridTools />
      <div className='mb-5 lg:mb-20'>
        <Image
          className='w-full h-auto rounded-lg'
          src={IchigaiImage}
          width={1088}
          height={816}
          alt='ichigai'
        />
      </div>
      <Gallery />

      <TextHeader
        title='Get in touch with me?'
        body="Get in touch with us!
We're here to help and provide the answers you need.<br/> Feel free to reach out anytime!"
        align='text-center'
        link='/contact'
      />
    </>
  );
}
