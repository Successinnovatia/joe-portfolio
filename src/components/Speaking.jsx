import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const speakingData = [
  {
    image: "/speaking/first-img.jpg",
    url: "#",
  },
  {
    image: "/speaking/second-img.jpg",
    url: "#",
  },
  {
    image: "/speaking/after-second-img.jpg",
    url: "#",
  },
  {
    image: "/speaking/third-img.jpg",
    url: "#",
  },
  {
    image: "/speaking/fourth-img.jpg",
    url: "#",
  },
  {
    image: "/speaking/fifth-img.jpg",
    url: "#",
  },
  {
    image: "/speaking/sixth-img.jpg",
    url: "#",
  },
  {
    image: "/speaking/student-buzz.jpg",
    url: "#",
  },
  {
    image: "/speaking/social-media-tea.jpg",
    url: "https://open.spotify.com/episode/69dfUMLuoop0mwkiRx9yLO?si=cLm68urOR1mwLwSYsszF8A",
  },
  {
    image: "/speaking/social-switch.jpg",
    url: "https://open.spotify.com/episode/017bzp06okJQvvNGqgpKaN?si=21KiqD_oQV216z8bnMiCQA",
  },
  {
    image: "/speaking/qna-with-joe.jpg",
    url: "#",
  },
  {
    image: "/speaking/anambra-web3-bootcamp.jpg",
    url: "#",
  },
  {
    image: "/speaking/ai-powered-business.jpg",
    url: "#",
  },
];

function Speaking() {
  return (
    <div className="mt-4 h-full bg-black" data-aos="fade-up">
      <h1 className="text-xl font-bold text-center text-white">
        SPEAKING APPEARANCES
      </h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView={1.5}
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
        {speakingData.map((item, index) => (
          <SwiperSlide key={index} className="pt-4 pb-8 md:pb-4">
            <Link
              to={item.url}
              className="flex flex-col space-y-2 justify-center h-auto  md:w-full bg-[#2A2A2A] rounded-lg shadow-md text-white"
            >
              <img
                src={item.image}
                alt={`project ${index + 1}`}
                className="h-56 md:h-48 w-full rounded-lg object-fill"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Speaking;
