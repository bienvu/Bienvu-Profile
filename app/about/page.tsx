import Intro from "../components/Intro";
import TimeLine from "../components/TimeLine";
import TextHeader from "../components/TextHeader";
import { timelineData } from "../data/data";
import Gallery from "../components/Gallery";


const Contact = async () => {
  // const req = await fetch(
  //   `https://dev-bien.pantheonsite.io/wp-json/wp/v2/components?slug=my-work-experience&_=${new Date().getTime()}`,
  //   { cache: "no-store" }
  // );
  // const pages = await req.json();
  // const page = pages[0];
  // const timelineData = page.acf.components[0].item;

  // map external data shape to TimeLineItem expected by TimeLine component
  const mappedTimelineData = timelineData.map((item: any) => ({
    date_time: item.date_time,
    position: item.position ?? item.company,
    content: item.content,
    company: item.company
  }));

  return (
    <div className='flex flex-col items-center justify-between pt-20 pb-10'>
      <Intro />
      <TextHeader
        title="Browse my work Experience"
        body="Detailed timeline showcasing my professional journey, highlighting key roles, achievements, and skills acquired throughout my career."
        align='text-left'
        link=''
      />
      <TimeLine timelineData={mappedTimelineData} />
      <Gallery />
    </div>
  );
};

export default Contact;
