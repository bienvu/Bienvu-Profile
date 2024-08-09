import Link from "next/link";
import { formatDate } from "../utils/formatDate";
interface PostProps {
  date: string;
  title: string;
  body: string;
  link: string;
}

const Post = ({ date, title, body, link }: PostProps) => {
  return (
    <article className='border border-gray-200 rounded-md p-5 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 mb-5'>
      <div className='group relative'>
        <h3 className='text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-violet-100'>
          <Link href={`/blogs/${link}`}>
            <span className='absolute inset-0' />
            {title}
          </Link>
        </h3>
        <time
          dateTime={date}
          className='text-gray-500 text-xs dark:text-violet-400'>
          {formatDate(date)}
        </time>
        <div
          className='mt-2 text-small mb-0'
          dangerouslySetInnerHTML={{
            __html: body,
          }}></div>
        <Link className='text-small' href={`/blogs/${link}`}>
          Read More...
        </Link>
      </div>
    </article>
  );
};

export default Post;
