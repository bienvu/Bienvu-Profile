import React from "react";
import Card from "../components/Card";
import ProjectsList from "./ProjectsList";
import { caseStudies } from "../data/data";

interface CardItem {
  title: string;
  content: string;
  link: {
    url: string;
  };
  type: string[];
  image: string;
}

const Page = async () => {
  // const req = await fetch(
  //   `https://dev-bien.pantheonsite.io/wp-json/wp/v2/pages?slug=projects&_fields=id,slug,title,date,content,acf&_=${new Date().getTime()}`,
  //   { cache: "no-store" }
  // );
  // const pages = await req.json();
  // const page = pages[0];
  // const card = page.acf.components[0].card;

  // console.log("Project page data:", card);

  return (
    <div className='pt-20 pb-10'>
      <h1 className='page-title'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
          Browser My Projects contributed
        </span>
      </h1>
      <p
        className='mt-6 text-normal text-center'
        dangerouslySetInnerHTML={{ __html: "Happy to contribute to all projects, and I’m proud to share all of it with you!" }}></p>
      {caseStudies && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <ProjectsList projects={caseStudies} />
        </React.Suspense>
      )}
    </div>
  );
};

export default Page;
