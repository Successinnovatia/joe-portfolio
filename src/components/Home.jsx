import React from "react";
import PortfolioSlide from "./PortfolioSlide";
import BioCard from "./BioCard";
import WorksSlide from "./WorksSlide";

function Home() {
  return (
    <div className="bg-black px-6 md:px-0 pb-6 flex flex-col gap-4">
      <div
        className="w-full bg-[#2A2A2A] rounded-lg shadow-md py-8 px-5 text-white mx-auto md:mx-0"
        data-aos="zoom-in"
      >
        <h1 className="font-bold">Christain</h1>
        <h1 className="font-bold">Start-up | Web3 | AI </h1>
        <h1 className="font-bold">Digital Marketer </h1>
      </div>

      {/* <PortfolioSlide /> */}
      <WorksSlide/>

      <BioCard
        title={"The Joe Writes"}
        description={
          <>
            <p>
              Welcome, you've found the Joseph with the coat of many colours. My
              father once said he wanted me to be a lecturer on the course I
              studied in my first degree.
            </p>
            <br />
            <p>
              Luckily for him, I became a passionate AI/Web3 educator and
              multidisciplinary digital marketer.
            </p>
            <br />
            <p>
              {" "}
              My name is Chinedu Joseph and I'm a popular known as The
              Joewrites. What that means is that my words are filled with
              unresistable value and strategic ideas.
            </p>
            <br />
            <p> And I'm great at wherever I find myself.</p>
            <br />
            <p>
              I started educating, building and marketing at the age of 16. And
              since then I've worked with different organisations.
            </p>
            <br />
            <p> My work experience covers:</p>
            <ul className="list-disc list-outside pl-5 space-y-2 mt-2">
              <li>Content Strategy & Storytelling</li>
              <li>Social Media Management & Growth</li>
              <li>Start-up builder and Idea guy</li>
              <li>AI-Powered Content Creation</li>
              <li>Strategic Planning & Execution</li>
              <li>Campaign Planning and Marketing Creativity.</li>
              <li>Influencer & Partner Collaborations</li>
              <li>Public Speaking & Tech Event Anchoring</li>
              <li>Branding & Online Presence Optimization</li>
              <li>Airdrop Hunting & Web3 Ecosystem Navigation</li>
              <li>AI || Web3 || Tech Education & Simplification</li>
              <li>Product Awareness & Early Tester's Contributor</li>
              <li>Personal Development Coaching and Advisor</li>
              <li>Project Representation & Digital Brand Evangelism</li>
            </ul>

            <br />

            <p>
              With a unique edge in Web3, AI, and startup ecosystems, I am that
              guy that brings clarity, energy, and strategy to the table.
            </p>
            <br />
            <p>
              If you’re building something meaningful and I’m not here just to
              give you advice but build with you.
            </p>
          </>
        }
      />

      <BioCard
        title={"PROUD MOMENTS SO FAR"}
        description={
          <ul className="list-disc list-outside space-y-2 px-3">
            <li>
              Branded and managed social media platforms from 1-4 figures (k)
              followers/ members.
            </li>
            <li>
              Co-founded a Web3 project pioneering Defi innovation on AO
              blockchain.
            </li>
            <li>
              {" "}
              Worked as a core team member to organise and anchor web3/ tech
              events reaching 243, 500 & 1000+ tech enthusiasts through
              webinars, virtual events, and in-person meetups across Africa
              proving the power of community in the digital era.
            </li>
            <li>
              Educated and tutored on AI niche to different communities and
              newbies reaching over 500-1000 participants
            </li>
            <li>
              Moderated major tech panels and ecosystem conversations, including
              sessions on Web3, AI, tech, and startup growth — bridging
              founders, builders, and funders with clarity and intent.
            </li>
            <li>
              Led successful content strategies for emerging brands like
              Clusttr.io, builder's Tribe, savviwear and TribeTechie helping
              them gain visibility, authority, and loyal followers across X,
              LinkedIn, and Instagram.
            </li>
            <li>
              Created viral Twitter threads and campaigns that not only hit
              engagement goals but also inspired builders to take action, join
              communities, or explore new tools.
            </li>

            <li>
              Built content systems for projects in Web3, AI, DeFi, and
              community-driven startups ensuring consistent output, clear brand
              voice, and measurable growth.
            </li>

            <li>
              Contributed to projects like Sacred Protocol, Ribh Finance and a
              lot more making technical products accessible to real users,
              especially in Africa.
            </li>
            <li>
              Helped shape “Twenties Circles” - a youth-focused community
              helping youth in their twenties to get it right on track.
            </li>
          </ul>
        }
      />
    </div>
  );
}

export default Home;
