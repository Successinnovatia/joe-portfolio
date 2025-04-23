import React from "react";

function ContactCard({ icon, text, subtext, url }) {
  return (
    <a
      href={url}
      className="flex w-5/6 md:w-4/5 mx-auto bg-[#2A2A2A] rounded-lg shadow-md py-3 px-3 text-white hover:scale-103 transition-transform duration-200 ease-in-out"
      target="_blank"
      data-aos="fade-up"
    >
      <div className="flex justify-between md:justify-baseline md:gap-12 lg:gap-24 items-center ">
        <span className="h-10 w-10 md:w-24">{icon}</span>
        <div className="flex flex-col items-center justify-center w-48 md:w-32">
          <h2 className="text-center">{text}</h2>
          <p className="text-sm">{subtext}</p>
        </div>
        
      </div>
    </a>
  );
}

export default ContactCard;
