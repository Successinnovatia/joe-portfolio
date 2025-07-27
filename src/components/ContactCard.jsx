import React from "react";
import { Link } from "react-router-dom";

function ContactCard({ icon, text, subtext, url }) {
  return (
    <Link
      to={url}
      className="flex w-5/6 md:w-4/5 mx-auto bg-[#2A2A2A] rounded-lg shadow-md py-3 px-3 text-white hover:scale-103 transition-transform duration-200 ease-in-out"
      target="_blank"
      data-aos="fade-up"
    >
      <div className="flex justify-between md:justify-baseline gap-5 md:gap-0 xl:gap-12 items-center ">
        <span className="h-10 w-10 md:w-24">{icon}</span>
        <div className="flex flex-col items-center justify-center w-48 md:w-64">
          <h2 className="text-center">{text}</h2>
          <p className="text-sm">{subtext}</p>
        </div>
        
      </div>
    </Link>
  );
}

export default ContactCard;
