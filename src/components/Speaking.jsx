import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const speakingData = [
  {
    image: "src/assets/student-buzz.jpg",
    url: "#",
  },
  {
    image: "src/assets/social-media-tea.jpg",
    url: "#",
  },
  {
    image: "src/assets/social-switch.jpg",
    url: "#",
  },
  {
    image: "src/assets/qna-with-joe.jpg",
    url: "#",
  },
  {
    image: "src/assets/anambra-web3-bootcamp.jpg",
    url: "#",
  },
  {
    image: "src/assets/ai-powered-business.jpg",
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
