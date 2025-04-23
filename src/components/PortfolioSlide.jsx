import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const projectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: "/images/main-image.jpg",
    url: "#",
  },

  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "/images/main-image.jpg",
    url: "#",
  },

  {
    title: "Project 3",
    description: "Description of Project 3",
    image: "/images/main-image.jpg",
    url: "#",
  },

  {
    title: "Project 4",
    description: "Description of Project 4 that can be crazy as hell oh my god what was i thinking",
    image: "/images/main-image.jpg",
    url: "#",
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
