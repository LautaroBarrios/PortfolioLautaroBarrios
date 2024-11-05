import { useRef, useEffect, useState } from "react";
import PictureProfile from "../assets/images/PhotoProfile.png";
import { Close, GitHub, LinkedIn } from "../icons";

const AboutMe = ({ changeModal }) => {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        changeModal("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing, changeModal]);

  return (
    <section
      className={`flex flex-col h-full w-full items-center justify-center md:p-6 p-4 text-white z-20 absolute 
    ${isClosing ? "animate-fadeOutFast" : "animate-fadeInFast"}`}
    >
      <div className="flex flex-col h-full w-full items-center justify-center">
        <article
          className="bg-[radial-gradient(circle,_#061516_50%,_#040d0e_100%)] 2xl:w-1/3 xl:w-1/2 lg:w-1/2 md:w-2/3 rounded-2xl px-4 pt-4 pb-5 space-y-4 overflow-auto border-[0.5px] border-[#585d5e]"
          ref={modalRef}
        >
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-bold">Sobre mí</h2>
            <button
              type="button"
              onClick={closeModal}
              title="Cerrar"
              className="bg-[#0c7075] active:scale-105 p-0.5 rounded-md transition-all"
            >
              <Close />
            </button>
          </div>

          <div className="flex xl:flex-row flex-col xl:space-x-4 space-x-0 xl:space-y-0 space-y-3 xl:items-start items-center justify-center">
            <div className="flex flex-col items-center w-full">
              <img
                src={PictureProfile}
                alt="Foto de perfil"
                className="h-40 w-40  rounded-full border-white hover:scale-110 transition-all bg-[#0c7075] animate-fadeIn"
              />
              <article className="flex flex-row space-x-4 items-center justify-center pt-3">
                <a
                  href="https://github.com/LautaroBarrios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:h-11 md:w-11 h-9 w-9 flex items-center justify-center hover:scale-105 transition-all"
                  title="Perfil de GitHub"
                >
                  <GitHub />
                </a>

                <a
                  href="https://www.linkedin.com/in/lautaro-g-barrios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:h-11 md:w-11 h-9 w-9 flex items-center justify-center hover:scale-105 transition-all"
                  title="Perfil de LinkedIn"
                >
                  <LinkedIn />
                </a>
              </article>
            </div>
            <div className="flex flex-col justify-between items-end md:pr-2 md:text-base text-sm">
              <p>
                Desarrollador de Córdoba, Argentina, entusiasta de convertir
                desafíos complejos en soluciones de diseño simples, elegantes y
                efectivas.
              </p>
              <p>
                Desde interfaces digitales y experiencias interactivas hasta la
                automatización de procesos y la integración de diseño con
                tecnología.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
