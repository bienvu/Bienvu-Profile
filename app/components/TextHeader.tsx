import React from "react";
import Link from "next/link";

interface TextHeader {
  title: string;
  body: string;
  align: string;
  link: string;
}

const TextHeader = ({ title, body, align, link }: TextHeader) => {
  return (
    <div className={`pb-8 w-full ${align}`}>
      <h3
        className={`box-title text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500`}>
        {title}
      </h3>
      {body && (
        <p
          className={`text-normal max-w-xl ${
            align == "text-center" ? "mx-auto" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: body }}></p>
      )}
      {link && (
        <Link className='button-gradient' href={link}>
          {`Let's talk`}
        </Link>
      )}
    </div>
  );
};

export default TextHeader;
