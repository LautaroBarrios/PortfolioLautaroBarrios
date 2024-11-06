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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  let gallery = null;

  switch (images) {
    case 1:
      gallery = picturesCT;
      break;
    case 2:
      gallery = picturesIE;
      break;
    case 3:
      gallery = picturesGV;
      break;

    default:
      gallery = [];
      break;
  }

  const handleNext = () => {
    if (containerRef.current) {
      const width = containerRef.current.getBoundingClientRect().width;
      const maxScrollLeft = width * (picturesCT.length - 1);
      const currentScrollLeft = containerRef.current.scrollLeft;

      if (currentScrollLeft >= maxScrollLeft) {
        containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        containerRef.current.scrollBy({ left: width, behavior: "smooth" });
      }
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      const width = containerRef.current.getBoundingClientRect().width;
      const currentScrollLeft = containerRef.current.scrollLeft;

      if (currentScrollLeft <= 0) {
        containerRef.current.scrollTo({
          left: width * (picturesCT.length - 1),
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({ left: -width, behavior: "smooth" });
      }
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrevious();
    }
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setImages(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  return (
    <section
      className={`flex items-center justify-center w-full h-full top-0 left-0 absolute z-50 bg-black bg-opacity-90 p-6 ${
        isClosing ? "animate-fadeOutFast" : "animate-fadeInFast"
      }`}
    >
      <article className="flex flex-col items-center justify-center w-full h-full">
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex snap-x snap-mandatory h-auto w-full overflow-x-hidden scroll-smooth"
        >
          {gallery.length > 0 ? (
            gallery.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`image-${index}`}
                className="h-full min-w-full snap-center object-contain"
              />
            ))
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
            className="md:flex hidden bg-[#0c7075] text-white active:scale-95 rounded py-1.5 px-6 transition-all"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => setIsClosing(true)}
            title={t("buttons.titles.close")}
            className="bg-[#0c7075] text-white active:scale-95 rounded py-1 px-4 transition-all"
          >
            <Close />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Image"
            className="md:flex hidden bg-[#0c7075] text-white active:scale-95 rounded py-1.5 px-6 transition-all"
          >
            <ArrowRight />
          </button>
        </nav>
      </article>
    </section>
  );
};

export default ImagesProjects;
