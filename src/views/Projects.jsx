import { useEffect, useRef, useState } from "react";
import items from "../assets/images/projects/items.js";
import ImagesProjects from "../components/ImagesProjects.jsx";
import { useTranslation } from "react-i18next";
import { HeaderModal } from "../components";

const Projects = ({ changeModal }) => {
  const modalRef = useRef(null);
  const [t] = useTranslation("global");
  const [isClosing, setIsClosing] = useState(false);
  const [hoveredItems, setHoveredItems] = useState({});
  const [images, setImages] = useState(null);
  const [privateProjects, setPrivateProjects] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImages = (id) => {
    setImages(id);
  };

  const handleMouseEnter = (id) => {
    setHoveredItems((prev) => ({ ...prev, [id]: true }));
    setShowTech(false);
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

  const handleShowTech = () => {
    setShowTech(!showTech);
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
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
        <HeaderModal
          title={t("buttons.projects")}
          buttonClose={t("buttons.titles.close")}
          closeModal={closeModal}
        />

        {!privateProjects ? (
          <ol className="h-full grid lg:grid-cols-2 grid-cols-1 gap-4 overflow-auto px-1">
            {items(t).map((item) => (
              <li
                key={item.id}
                className={`${
                  loadedImages[item.id] ? "flex" : "hidden"
                } min-h-[280px] items-center justify-center lg:flex-row flex-col border border-[#585d5e3a] hover:border-[#585d5e] rounded-md relative animate-fadeInFast`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                {!hoveredItems[item.id] && (
                  <img
                    src={item?.src}
                    onLoad={() => handleImageLoad(item.id)}
                    className="h-full w-full object-cover rounded-md absolute"
                  />
                )}
                <div className="flex flex-col h-full py-2 px-4 space-y-1">
                  <div className="flex md:flex-row flex-col md:space-x-0 space-y-1 items-center justify-between">
                    <h3 className={`text-lg text-[#f7f9fa] font-bold`}>
                      {item?.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleImages(item?.id)}
                      className="text-center bg-[#f7f9fa] text-[#040d0e] md:w-auto w-full md:px-2 px-auto rounded-md transition-all active:scale-105 font-semibold"
                    >
                      {t("buttons.images")}
                    </button>
                  </div>

                  <p
                    className={`text-gray-200 text-sm overflow-auto h-full px-1 py-0.5 whitespace-pre-line`}
                  >
                    {!showTech ? item?.description : item?.technologies}
                  </p>

                  <div className="flex flex-col w-full space-y-2">
                    <button
                      type="button"
                      onClick={handleShowTech}
                      className="text-center bg-[#f7f9fa] text-[#040d0e] w-full px-auto rounded-md transition-all active:scale-105 font-semibold"
                    >
                      {t("buttons.technologies")}
                    </button>
                    <div
                      className={`grid gap-2 w-full ${
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
                          className="text-center bg-[#f7f9fa] text-[#040d0e] w-full px-auto rounded-md transition-all active:scale-105 font-semibold"
                        >
                          {t("a.web")}
                        </a>
                      )}
                      {item?.repo && (
                        <a
                          href={item?.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center bg-[#f7f9fa] text-[#040d0e] w-full px-auto rounded-md transition-all active:scale-105 font-semibold"
                        >
                          {t("a.repo")}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <section className="flex flex-col justify-start items-center h-full w-full space-y-1 p-2 z-10 text-center text-white overflow-auto">
            <h5 className="text-2xl font-bold text-red-50">
              {t("projects.important")}
            </h5>
            <p className="text-lg font-bold border-b pb-4 mx-4">
              {t("projects.description")}
            </p>
            <ol className="pt-4 px-2 lg:w-2/3 w-[90%] space-y-2">
              <li>
                <p className="text-[#f7f9fa] text-lg font-semibold underline underline-offset-2">
                  {t("projects.item1.title")}
                </p>
                <p className="text-gray-200">
                  {t("projects.item1.description")}
                </p>
              </li>
              <li>
                <p className="text-[#f7f9fa] text-lg font-semibold underline underline-offset-2">
                  {t("projects.item2.title")}
                </p>
                <p className="text-gray-200">
                  {t("projects.item2.description")}
                </p>
              </li>
            </ol>
          </section>
        )}
        <button
          type="button"
          onClick={() => setPrivateProjects(!privateProjects)}
          className="text-center bg-[#f7f9fa] text-[#040d0e] w-full rounded-md transition-all active:scale-95"
        >
          {`${t("buttons.see")} ${
            privateProjects ? t("buttons.public") : t("buttons.private")
          }`}
        </button>
      </article>
      {images && <ImagesProjects images={images} setImages={setImages} />}
    </section>
  );
};

export default Projects;
