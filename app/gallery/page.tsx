import React from "react";
import GallerySlider from "../components/GallerySlider";

const Page = async () => {
  const req = await fetch(
    `https://dev-bien.pantheonsite.io/wp-json/wp/v2/pages?slug=gallery&_fields=id,slug,title,date,content,acf&acf_format=standard&_=${new Date().getTime()}`,
    { cache: "no-store" }
  );
  const pages = await req.json();
  const page = pages[0];
  const data = page.acf.components[0].item;

  return (
    <div className='pt-20 pb-10'>
      <h1 className='page-title'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
          {page.title.rendered}
        </span>
      </h1>
      <p
        className='mt-6 text-normal text-center'
        dangerouslySetInnerHTML={{
          __html: page.content.rendered,
        }}></p>
      <GallerySlider data={data} />
    </div>
  );
};

export default Page;
