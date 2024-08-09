import Link from "next/link";
import Post from "./Post";
import ProfileData from "../components/ProfileData";

interface PostProps {
  key: number;
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
}

const Blogs = async () => {
  const req = await fetch(
    `https://dev-bien.pantheonsite.io/wp-json/wp/v2/posts?_fields=id,slug,title,date,excerpt&_=${new Date().getTime()}`,
    { cache: "no-store" }
  );
  const posts = await req.json();

  return (
    <div className='pt-20 pb-10'>
      <div className=''>
        <h1 className='page-title'>
          Read some{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
            Blogs & News
          </span>
        </h1>
        <p className='mt-6 text-normal max-w-2xl mx-auto text-center'>
          Chronological collection of my long-form thoughts on programming,
          photography, leadership, MMO, and more...
        </p>
      </div>

      <div className='mt-16 sm:mt-20'>
        <div className='twocols'>
          <div className='twocols__content'>
            {posts.map((item: PostProps) => (
              <Post
                key={item.id}
                title={item.title.rendered}
                date={item.date}
                body={item.excerpt.rendered}
                link={item.slug}
              />
            ))}
          </div>
          <div className='twocols__sidebar'>
            <ProfileData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
