import React from "react";
import PortfolioSlide from "./PortfolioSlide";
import BioCard from "./BioCard";

function Home() {
  return (
    <div className="bg-black px-6 md:px-0 pb-6" >
      <div className="w-full bg-[#2A2A2A] rounded-lg shadow-md py-8 px-5 text-white mx-auto md:mx-0" data-aos="zoom-in">
        <h1 className="font-bold">Christain</h1>
        <h1 className="font-bold">Start-up | Web3 | AI </h1>
        <h1 className="font-bold">Digital Marketer </h1>
        
      </div>

      <PortfolioSlide />

      <BioCard
        title={"The Joe Writes"}
        description={
          <>
          Hi, I’m Chinedu Joseph (popularly known as the Joewrites) - a multidisciplinary digital marketer helping early startups grow with clarity, ideas, and marketing.
          <br /><br />
          For the past 3+ years, I’ve worked at the intersection of content, strategy, marketing, and innovation - helping founders, startups, and tech brands move from idea to impact.
          <br /><br />
          My passion? Simplifying emerging technologies and creating meaningful growth through storytelling, public speaking, and a strong community-driven approach.
          I help founders and teams not just get started - but get seen, get clarity, and grow with purpose.
        </>
        }
      />
    </div>
  );
}

export default Home;
