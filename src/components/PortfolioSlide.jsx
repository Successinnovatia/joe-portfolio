import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const projectsData = [
  {
    title: "Mithril Protocol",
    description:
      "Pioneering DeFi Innovation on @aothecomputer Creators of $NAB. Up only token.",
    image: "/images/mithril-protocol.jpg",
    url: "https://mithril-mint-token.ar.io/",
  },

  {
    title: "Clusttr",
    description:
      "Bringing utility and liquidity to real estate. Built on Solana! @solana hyperdrive hackathon winner",
    image: "/images/clusttr-img.jpg",
    url: "https://linktr.ee/clusttr",
  },

  {
    title: "Tribe Techie",
    description:
      "Driving conversations that shape the tech and startup landscape across the MENA region.",
    image: "/images/tribe-techie-img.jpg",
    url: "http://tribetechie.com",
  },

  {
    title: "Builder's Tribe",
    description:
      "Connecting talent, founders, and investors to build a thriving tech ecosystem in the MENA region.",
    image: "/images/builders-tribe-img.jpg",
    url: "https://www.builderstribe.xyz/",
  },
  {
    title: "Sacred Protocol",
    description:
      "A Decentralised Social Tipping Protocol Rewarding Communities everywhere! ",
    image: "/images/sacred-img.jpg",
    url: "http://linktr.ee/sacredprotocol",
  },
  {
    title: "Twenties Circle",
    description:
      "A Growth-driven community that helps the twenties to overcome their most difficult years",
    image: "/images/twenties-circle-img.jpg",
    url: "http://twentiescircle.com",
  },
  {
    title: "Savviwear",
    description:
      "An Eco-friendly swimwear and underwear for your period cycle. Making ladies period comfortable and worry-free.",
    image: "/images/savvi-wear-img.jpg",
    url: "https://savviwear.co/",
  },
  {
    title: "Terraverde Exports",
    description:
      "A Nigerian-based agro-commodity export company delivering quality and reliability agricultural produce from farm to the global market.",
    image: "/images/terra-verde-img.jpg",
    url: "https://www.linkedin.com/company/terraverde-exports/",
  },
];

function PortfolioSlide() {
  return (
    <div className="mt-4" data-aos="fade-up">
      <h1 className="text-xl font-bold text-center text-white">PORTFOLIO</h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoHeight={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        className="h-auto"
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index} className="pt-4 pb-8 md:pb-4">
            <a
              href={project.url}
              target="_blank"
              className="flex flex-col space-y-2 justify-center h-auto w-full bg-[#2A2A2A] rounded-lg shadow-md text-white"
            >
              <img
                src={project.image}
                alt={`project ${index + 1}`}
                className="h-56 md:h-48 w-full rounded-t-lg"
              />
              <div className="flex flex-col pt-1 px-4 pb-4">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-xs line-clamp-1">{project.description}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PortfolioSlide;
