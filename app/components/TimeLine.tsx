import React from "react";
import { timeLine } from "../data/data";

interface TimeLineItem {
  date: string;
  title: string;
  description: string;
  link: string;
  date_time: string;
  position: string;
  content: string;
  company: string;
}

// Define the props for TimeLine component
interface TimeLineProps {
  timelineData: TimeLineItem[]; // Adjust this based on the actual structure of timelineData
}

const TimeLine = ({ timelineData }: TimeLineProps) => {
  return (
    <div className='w-full'>
      <ol className='relative border-s border-gray-200 dark:border-gray-700'>
        {timelineData &&
          timelineData.map((item, i) => (
            <li className='mb-5 ms-4' key={i}>
              <div className='absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-500 dark:text-violet-100'>
                {item.date_time}
              </time>
              <h3 className='text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
                <b>{item.company}</b> - {item.position}
              </h3>
              <p
                className='mb-4 text-base font-normal text-gray-600 dark:text-violet-100'
                dangerouslySetInnerHTML={{ __html: item.content }}></p>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default TimeLine;
