import { useEffect, useRef, useState } from "react";
import { picturesCT } from "../assets/images/projects/indexCT";
import { picturesGV } from "../assets/images/projects/indexGV";
import { picturesIE } from "../assets/images/projects/indexIE";
import { ArrowLeft, ArrowRight, Close } from "../icons";
import { useTranslation } from "react-i18next";

const ImagesProjects = ({ images, setImages }) => {
  const containerRef = useRef(null);
  const [t] = useTranslation("global");
  const [isClosing, setIsClosing] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let gallery = null;

  switch (images) {
    case 1:
      gallery = picturesIE;
      break;
    case 2:
      gallery = picturesCT;
      break;
    case 3:
      gallery = picturesGV;
      break;
    default:
      gallery = [];
      break;
  }

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setImages(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : gallery.length - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < gallery.length - 1 ? prevIndex + 1 : 0
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section
      className={`flex items-center justify-center w-full h-full top-0 left-0 absolute z-50 bg-black bg-opacity-90 p-6 ${
        isClosing ? "animate-fadeOutFast" : "animate-fadeInFast"
      }`}
    >
      <article className="flex flex-col items-center justify-center w-full h-full">
        <div
          ref={containerRef}
          className="flex h-auto w-full overflow-hidden relative"
        >
          {gallery.length > 0 ? (
            <img
              key={currentImageIndex}
              src={gallery[currentImageIndex]}
              alt={`image-${currentImageIndex}`}
              className={`h-full min-w-full object-contain transition-transform duration-300 ${
                isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            />
          ) : (
            <p className="text-center w-full">No images available</p>
          )}
        </div>
        <nav
          className="flex flex-row space-x-2 justify-center items-center w-full pt-2"
          aria-label="Image navigation"
        >
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous Image"
            className="bg-[#f7f9fa] text-white active:scale-95 rounded py-1.5 px-6 transition-all"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => setIsClosing(true)}
            title={t("buttons.titles.close")}
            className="bg-[#f7f9fa] text-white active:scale-95 rounded py-1 px-4 transition-all"
          >
            <Close />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Image"
            className="bg-[#f7f9fa] text-white active:scale-95 rounded py-1.5 px-6 transition-all"
          >
            <ArrowRight />
          </button>
        </nav>
      </article>
    </section>
  );
};

export default ImagesProjects;
