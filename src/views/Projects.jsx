import { useEffect, useRef, useState } from "react";
import { Close } from "../icons";

const Projects = ({ changeModal }) => {
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
      className={`flex flex-col h-full w-full items-center justify-center p-6 text-white z-20 animate-fadeInFast absolute ${
        isClosing ? "animate-fadeOutFast" : "animate-fadeInFast"
      }`}
    >
      <article
        className="flex flex-col h-full w-full bg-[radial-gradient(circle,_#061516_50%,_#040d0e_100%)] border-[0.5px] border-[#585d5e] lg:w-1/2 md:w-2/3 rounded-2xl p-3 space-y-4"
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
        <ol className="grid md:grid-cols-2 grid-cols-1 gap-4 overflow-auto px-1">
          <li className="border rounded-md p-4">1</li>
          <li className="border rounded-md p-4">1</li>
          
        </ol>
      </article>
    </section>
  );
};

export default Projects;
