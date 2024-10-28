import { useState, useEffect } from "react";
import { Lights } from "../components";
import { DoubleArrowDown } from "../icons";

const Home = ({ scrollToAboutMe }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 3000);
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    const handleScroll = () => {
      setShowButton(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full lg:h-screen h-[100dvh] md:p-0 p-4 bg-[radial-gradient(circle,_#f7f9fa_50%,_#040d0e_100%)] animate-fadeInFast">
      <Lights />
      <article className="flex flex-col bg-[radial-gradient(circle,_#061516_30%,_#040d0e_100%)] 2xl:p-52 xl:p-40 lg:p-20 p-10 max-w-[100vw] lg:max-w-[50vw] aspect-square rounded-full items-center justify-center space-y-2">
        <h1 className="text-3xl sm:text-4xl text-center text-gray-50 animate-fadeIn cursor-default font-bold">
          I AM LAUTARO BARRIOS
        </h1>
        <div className="flex flex-col items-center justify-center w-full space-y-1 animate-fadeInMedium">
          <button className="text-xl text-center text-gray-100 font-bold underline underline-offset-4 hover:animate-pulse">
            CREATIVE FULLSTACK DEVELOPER
          </button>
          <p className="text-center sm:text-base text-sm text-gray-100 font-bold cursor-default">
            {/* TÚ VISIÓN DIGITAL, HECHA REALIDAD.  */}
            YOUR DIGITAL VISION, MADE REALITY.
          </p>
        </div>
      </article>
      {showButton && (
        <button
          type="button"
          className="absolute bottom-0 p-4 active:animate-pulse animate-fadeIn"
          onClick={() => {
            setShowButton(false);
            scrollToAboutMe();
          }}
        >
          <DoubleArrowDown />
        </button>
      )}
    </section>
  );
};

export default Home;
