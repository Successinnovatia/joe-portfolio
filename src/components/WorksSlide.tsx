import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";


const WorksData = [
  {
    title: "Portfolio",

    image: "https://img.freepik.com/premium-photo/businesswoman-working-office_53876-23601.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_hybrid&w=740",
    url: "/portfolio",
  },

  {
    title: "Speaking and Apperances",

    image: "https://img.freepik.com/free-photo/close-up-microphone_107420-63821.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_hybrid&w=740",
    url: "#",
  },

  {
    title: "Digital Products and Services",

    image: "https://img.freepik.com/premium-photo/technology-e-commerce-internet-global-marketing-purchasing-plan-bank-concept_36325-2908.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_hybrid&w=740",
    url: "#",
  },

  {
    title: "Contact Me",

    image: "https://img.freepik.com/premium-photo/businessman-suit-clicking-blue-phone-icon_150455-2565.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_hybrid&w=740",
    url: "/contact",
  },
];

function WorksSlide() {
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
        {WorksData.map((work, index) => (
          <SwiperSlide key={index} className="pt-4 pb-8 md:pb-4">
            <Link
              to={work.url}
              target="_blank"
              className="flex flex-col space-y-2 justify-center h-64 w-full bg-[#2A2A2A] rounded-lg shadow-md text-white"
            >
              <img
                src={work.image}
                alt={`work ${index + 1}`}
                className="h-5/6 md:h-3/4 w-full rounded-t-lg"
              />
              <div className="flex flex-col pt-1 px-4 pb-4 h-1/4 text-center">
                <h2 className="font-semibold">{work.title}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WorksSlide;
