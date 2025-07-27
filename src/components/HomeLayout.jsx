import { Outlet, useNavigation } from "react-router-dom";
import { useState } from "react";
import { AlignLeft, Share2, Bell, X } from "lucide-react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaMedium, FaTelegramPlane,FaInstagram } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";

const socials = [
  {
    url: "mailto:josephugochukwu240@gmail.com",
    icon: <MdOutlineMail size={30} />,
  },
  {
    url: "https://www.instagram.com/the_joewrites",
    icon: <FaInstagram size={30} />,
  },
  {
    url: "https://x.com/ResilentJoe",
    icon: <FaSquareXTwitter size={30} />,
  },
  {
    url: "https://www.linkedin.com/in/chinedu-joseph-028684187/",
    icon: <FaLinkedin size={30} />,
  },
  {
    url: "https://t.me/joewrite",
    icon: <FaTelegramPlane size={30} />,
  },
];

//todo
// Do the main layout
//create components for Home, Portfolio and Contact me
//add components to App.jsx
//implement in the sidebar

const HomeLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Before toggle:", isOpen); // Debugging
    setIsOpen(!isOpen);
    console.log("After toggle:", !isOpen); // Debugging
  };

  return (
    <section className="relative items-center md:bg-[url(/images/image.jpg)] bg-no-repeat bg-cover md:py-16 bg-black">
      {/* Sidebar (Hidden by default) */}
      <SidebarMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Overlay (closes menu when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      <div className=" bg-black shadow-md md:rounded-3xl w-full md:w-5/6 lg:w-3/5 md:mx-auto min-h-screen md:px-12 py-4">
        <header className="relative md:static flex justify-between items-center h-8 z-10 px-5 md:px-0">
          <button
            className="flex bg-white rounded-xl p-4 text-gray-600 h-full justify-center items-center"
            onClick={() => setIsOpen(true)}
          >
            <AlignLeft className="" />
          </button>
          <div className="flex h-full gap-2 w-2/5 justify-end">
            <a
              href="#"
              className="flex justify-between space-x-2 items-center bg-white rounded-xl p-4 text-gray-600"
            >
              <Bell /> <span className="">Youtube</span>
            </a>

            <a
              href="#"
              className="flex justify-center items-center p-4 bg-white rounded-xl text-gray-600"
            >
              <Share2 />
            </a>
          </div>
        </header>

        <main className="absolute md:static top-0 w-full">
          <div className="relative w-full md:w-5/6 lg:w-3/5 md:mx-auto md:mt-6 h-[480px]  md:h-[480px]">
            <img
              src="/images/joe-new-image.jpg"
              alt="Background"
              className="h-full opacity-100 md:rounded-2xl z-0 object-fill md:object-cover w-full"
              data-aos="fade"
            />

            <div
              className="absolute bottom-0 w-full h-24"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)",
              }}

           
            >
              <div className="flex flex-col z-10 text-white justify-center items-center gap-4">
                <h1 className="text-3xl font-bold tracking-widest font-poppins">
                  JOSEPH
                </h1>
                <div className="flex gap-2 px-2">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex justify-center items-center p-2 "
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full md:w-full mx-auto md:mx-0">
          <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default HomeLayout;
