import { useState } from "react";
import { Lights } from "../components";

const Home = ({ changeModal }) => {
  const [showButton, setShowButton] = useState(false);

  setTimeout(() => {
    setShowButton(true);
  }, 2100);

  return (
    <section className="flex flex-col items-center justify-center w-full lg:h-screen h-[100dvh] md:p-0 p-4 bg-[radial-gradient(circle,_#f7f9fa_50%,_#040d0e_100%)] animate-fadeInFast">
      <Lights />
      {showButton && (
        <button
          type="button"
          onClick={() => changeModal("aboutMe")}
          className="absolute text-bold border-y border-[#575d5e] active:border-white lg:w-[15%] sm:w-[20%] w-[50%] left-0 top-5 pl-4 pr-8 py-4 hover:bg-[#061617] animate-fadeIn bg-[#061112] text-white rounded-r-full font-bold transition-all"
        >
          About
        </button>
      )}
      {showButton && (
        <button
          type="button"
          onClick={() => changeModal("projects")}
          className="absolute text-bold border-y border-[#575d5e] active:border-white lg:w-[15%] sm:w-[20%] w-[50%] right-0 bottom-24 pl-8 pr-4 py-4 hover:bg-[#061617] animate-fadeIn bg-[#061112] text-white rounded-l-full font-bold transition-all"
        >
          Projects
        </button>
      )}
      {showButton && (
        <button
          type="button"
          onClick={() => changeModal("contact")}
          className="absolute text-bold border-y border-[#575d5e] active:border-white lg:w-[15%] sm:w-[20%] w-[50%] right-0 bottom-5 pl-8 pr-4 py-4 hover:bg-[#061617] animate-fadeIn bg-[#061112] text-white rounded-l-full font-bold transition-all"
        >
          Contact
        </button>
      )}

      <article className="flex flex-col bg-[radial-gradient(circle,_#061516_30%,_#040d0e_100%)] 2xl:p-52 xl:p-40 lg:p-20 p-10 max-w-[100vw] lg:max-w-[50vw] aspect-square rounded-full items-center justify-center space-y-1">
        <h1 className="sm:text-4xl s:text-xl text-lg text-center text-gray-50 animate-fadeIn cursor-default font-bold">
          I AM LAUTARO BARRIOS
          {/* SOY LAUTARO BARRIOS */}
        </h1>
        <div className="flex flex-col items-center justify-center w-full space-y-1 animate-fadeInMedium">
          <button
            type="button"
            className="sm:text-xl s:text-lg text-base text-center text-gray-100 font-bold underline underline-offset-4"
            onClick={() => changeModal("contact")}
          >
            FULLSTACK DEVELOPER
          </button>
          <p className="text-center sm:text-base text-sm text-gray-100 font-bold cursor-default">
            {/* TÚ VISIÓN DIGITAL, HECHA REALIDAD.  */}
            YOUR DIGITAL VISION, MADE REALITY.
          </p>
        </div>
        <a
          href="./CV-BarriosLautaroG.pdf"
          download={""}
          className={`bg-[#f7f9fa] s:text-base text-sm py-1 px-4 rounded-full shadow active:scale-105 transition-all hover:animate-pulse ${
            !showButton ? "animate-fadeIn" : ""
          }`}
        >
          {/* Descargar CV */}
          Download CV
        </a>
      </article>
    </section>
  );
};

export default Home;
