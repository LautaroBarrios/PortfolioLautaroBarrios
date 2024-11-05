import { useEffect, useRef, useState } from "react";
import { Close } from "../icons";
import items from "../assets/images/projects/items.js";
import ImagesProjects from "../components/ImagesProjects.jsx";

const Projects = ({ changeModal }) => {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const [hoveredItems, setHoveredItems] = useState({});
  const [images, setImages] = useState(null);
  const [privateProjects, setPrivateProjects] = useState(false);

  const handleImages = (id) => {
    setImages(id);
  };

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
        className="flex flex-col max-h-full w-full bg-[radial-gradient(circle,_#061516_50%,_#040d0e_100%)] border-[0.5px] border-[#585d5e] lg:w-1/2 md:w-2/3 rounded-2xl p-4 space-y-4"
        ref={images ? null : modalRef}
      >
        <div className="flex flex-row items-center justify-between pt-1 px-1">
          <h2 className="text-xl font-bold">Proyectos</h2>
          <button
            type="button"
            onClick={closeModal}
            title="Cerrar"
            className="bg-[#0c7075] active:scale-105 p-0.5 rounded-md transition-all"
          >
            <Close />
          </button>
        </div>
        {!privateProjects ? (
          <ol className="h-full grid lg:grid-cols-2 grid-cols-1 gap-4 overflow-auto px-1">
            {items.map((item) => (
              <li
                className="flex min-h-[280px] items-center justify-center lg:flex-row flex-col border border-[#585d5e3a] hover:border-[#585d5e] rounded-md relative"
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
                    <h3 className={`text-lg text-[#2cc9d1] font-bold`}>
                      {item?.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleImages(item?.id)}
                      className="text-center border border-[#2cc9d1] text-[#2cc9d1] md:w-auto w-full md:px-2 px-auto rounded-md transition-all active:scale-105 font-semibold"
                    >
                      Imágenes
                    </button>
                  </div>

                  <p className={`text-cyan-50 text-sm overflow-auto h-full`}>
                    {item?.description}
                  </p>

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
        ) : (
          <section className="flex flex-col justify-start items-center h-full w-full space-y-1 p-2 z-10 text-center text-white overflow-auto">
            <h5 className="text-2xl font-bold text-red-50">IMPORTANTE</h5>
            <p className="text-lg font-bold border-b pb-4 mx-4">
              Links de acceso no disponibles para el público. Para más
              información ponte en contacto.
            </p>
            <ol className="pt-4 px-2 lg:w-2/3 w-[90%] space-y-2">
              <li>
                <p className="text-[#6ed1d6] text-lg">
                  Sistema de gestión de empleados y contratos - Municipalidad de
                  la Calera, Córdoba, Argentina (2022).
                </p>
                <p className="text-gray-300">
                  Desarrollé el backend para la creación, edición y manejo de
                  datos de empleados de manera segura, haciendo uso de estos
                  para generar contratos y permitir la descarga automáticamente
                  de manera óptima, eficaz y rápida. También elaboré la base de
                  datos y realice la migración a partir de un documento (Excel)
                  que poseía los datos de los mismos.
                </p>
              </li>
              <li>
                <p className="text-[#6ed1d6] text-lg">
                  Sistema de análisis veterinario - (2023).
                </p>
                <p className="text-gray-300">
                  Desarrollo de un sistema que permite la carga de los datos de
                  análisis para veterinarias, pudiendo generar PDFs con la
                  información del análisis, permitiendo a las veterinarias tener
                  un documento con los datos necesarios del análisis del
                  paciente en un orden, formato accesible y cómodo para las
                  mismas. En este desarrollo pude aprender nuevos conceptos,
                  nuevas herramientas como React-PDF, pulir métodos y
                  herramientas de trabajo, además de superar las expectativas
                  del cliente.
                </p>
              </li>
            </ol>
          </section>
        )}
        <button
          type="button"
          onClick={() => setPrivateProjects(!privateProjects)}
          className="text-center border-[0.5px] border-[#585d5ec2] text-[#ffffff] w-full rounded-md transition-all active:border-[#8d8d8d81] active:scale-95"
        >
          Ver {privateProjects ? "públicos" : "privados"}
        </button>
      </article>
      {images && <ImagesProjects images={images} setImages={setImages} />}
    </section>
  );
};

export default Projects;
