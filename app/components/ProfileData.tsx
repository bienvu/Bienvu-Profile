import Image from "next/image";
import Avarta from "../assets/avarta.png";
import Social from "./Social";

const ProfileData = () => {
  return (
    <>
      <div className='max-w-80 lg:max-w-none mb-5 mx-auto'>
        <figure className='flex justify-center'>
          <Image
            src={Avarta}
            width={200}
            height={200}
            className='h-200 w-200 rounded-full mb-0 border-double border-8 border-violet-400 rounded-full shadow-2xl'
            alt='Picture of the author'
          />
        </figure>
      </div>
      <h2 className='w-full mx-auto font-bold text-center mb-2 dark:text-violet-100'>
        BienVu
      </h2>
      <h2 className='w-full mx-auto font-semibold text-center mb-5 dark:text-violet-100'>
        Web Developer
      </h2>
      <Social />
    </>
  );
};

export default ProfileData;
