import ProfileData from "@/app/components/ProfileData";
import { formatDate } from "@/app/utils/formatDate";
import React from "react";

interface Params {
  slug: string;
}

const BlogDetail = async ({ params }: { params: Params }) => {
  const req = await fetch(
    `https://dev-bien.pantheonsite.io/wp-json/wp/v2/posts?_fields=id,slug,title,date,content&slug=${params.slug}`,
    { cache: "no-store" }
  );
  const posts = await req.json();
  const post = posts[0];

  return (
    <div className='mt-16 sm:mt-20'>
      <div className='twocols'>
        <div className='twocols__content'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl text-left mb-5'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
              {post.title.rendered}
            </span>
          </h1>
          <time
            dateTime={post.date}
            className='text-gray-500 text-base dark:text-violet-400'>
            {formatDate(post.date)}
          </time>
          <div
            className='mt-6 text-lg text-zinc-600 dark:text-zinc-300'
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}></div>
        </div>
        <div className='twocols__sidebar'>
          <ProfileData />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
