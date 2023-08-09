import Image from "next/image";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbarBg("#FF9900"); // Change to your desired color
      } else {
        setNavbarBg("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`bg-orange-500 py-16 ${navbarBg}`}>
      <div className="lg:max-w-screen-xl sm:max-w-screen-sm mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1 flex justify-between items-center">
            <div className="w-full flex flex-col lg:items-start items-center">
              <div>
                <h2 className="lg:text-5xl sm:text-left sm:text-3xl  text-center text-xl font-semibold text-white mb-4 lg:max-w-[15ch] max-w-[20ch] mx-auto">
                  Delicious home cooking recipes for everyone
                </h2>
                <p className="text-white lg:text-base text-sm mb-6 max-w-[40ch] lg:mx-0 mx-auto sm:text-left sm:max-w-[50ch] text-center">
                  A great recipe is at the heart of every memorable meal. Browse
                  our themed recipes for inspiration.
                </p>
                <div className="flex justify-center sm:block">
                  <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-full mx-auto text-center">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 hidden md:flex md:justify-center">
            <Image
              src="/hero1.jpg"
              alt="hero image"
              width={500}
              height={500}
              className="w-full h-full border-4 border-white rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
