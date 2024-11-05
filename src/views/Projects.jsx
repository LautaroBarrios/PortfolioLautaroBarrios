import { useEffect, useRef, useState } from "react";
import { Close } from "../icons";
import items from "../assets/images/projects/items.js";

const Projects = ({ changeModal }) => {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const [hoveredItems, setHoveredItems] = useState({});

  const handleMouseEnter = (id) => {
    setHoveredItems((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoveredItems((prev) => ({ ...prev, [id]: false }));
  };

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
      className={`flex flex-col h-full w-full items-center justify-center p-6 text-white z-20 animate-fadeInFast absolute ${
        isClosing ? "animate-fadeOutFast" : "animate-fadeInFast"
      }`}
    >
      <article
        className="flex flex-col max-h-full w-full bg-[radial-gradient(circle,_#061516_50%,_#040d0e_100%)] border-[0.5px] border-[#585d5e] lg:w-1/2 md:w-2/3 rounded-2xl p-3 space-y-4"
        ref={modalRef}
      >
        <div className="flex flex-row items-center justify-between pt-1 px-1">
          <h2 className="text-xl">Proyectos</h2>
          <button
            type="button"
            onClick={closeModal}
            title="Cerrar"
            className="bg-[#0c7075] active:scale-105 p-0.5 rounded-md transition-all"
          >
            <Close />
          </button>
        </div>
        <ol className="h-full grid lg:grid-cols-2 grid-cols-1 gap-4 overflow-auto px-1">
          {items.map((item) => (
            <li
              className="flex min-h-[280px] items-center justify-center lg:flex-row flex-col border border-[#585d5e] rounded-md relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              {!hoveredItems[item.id] && (
                <img
                  src={item?.src}
                  className="h-full w-full object-cover rounded-md absolute"
                />
              )}
              <div className="flex flex-col h-full py-2 px-4 space-y-1">
                <div className="flex md:flex-row flex-col md:space-x-0 space-y-1 items-center justify-between">
                  <h3 className={`text-lg text-[#2cc9d1]`}>{item?.title}</h3>
                  <button
                    type="button"
                    className="text-center border border-[#2cc9d1] text-[#2cc9d1] md:w-auto w-full md:px-2 px-auto rounded-md transition-all active:scale-105"
                  >
                    Imágenes
                  </button>
                </div>

                <p className={`text-gray-50 text-sm overflow-auto h-full`}>
                  {item?.description}
                </p>
                {/* <p className="text-[#c9b0ff]">
                  {item?.details}
                  </p> */}
                <div
                  className={`grid sm:gap-3 gap-2 sm:pt-0 pt-2 w-full ${
                    item?.web && item?.repo
                      ? "sm:grid-cols-2 grid-cols-1"
                      : "grid-cols-1"
                  }`}
                >
                  {item?.web && (
                    <a
                      href={item?.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visitar sitio web"
                      className="text-center border border-[#2cc9d1] text-[#2cc9d1] w-full px-auto rounded-md transition-all active:scale-105"
                    >
                      Sitio Web
                    </a>
                  )}
                  {item?.repo && (
                    <a
                      href={item?.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visitar repositorio"
                      className="text-center border border-[#2cc9d1] text-[#2cc9d1] w-full px-auto rounded-md transition-all active:scale-105"
                    >
                      Repositorio
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
};

export default Projects;
