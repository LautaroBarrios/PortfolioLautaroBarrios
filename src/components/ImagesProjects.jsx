import { useRef, useState } from "react";
import { picturesCT } from "../assets/images/projects/indexCT";

const ImagesProjects = ({ setImages }) => {
  const containerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  return (
    <section className="flex items-center justify-center w-full h-full top-0 left-0 absolute z-50 bg-black bg-opacity-90 p-6">
      <article className="flex flex-col items-center justify-center w-full h-full">
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex snap-x snap-mandatory h-auto w-full overflow-x-hidden scroll-smooth"
        >
          {picturesCT.length > 0 ? (
            picturesCT.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`image-${index}`}
                className="h-full min-w-full snap-center object-contain"
              />
            ))
          ) : (
            <p>No images available</p>
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
            Anterior
          </button>
          <button
            type="button"
            onClick={() => setImages(null)}
            className="bg-[#0c7075] text-white active:scale-95 rounded py-1.5 px-6 transition-all"
          >
            Cerrar
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Image"
            className="md:flex hidden bg-[#0c7075] text-white active:scale-95 rounded py-1.5 px-6 transition-all"
          >
            Siguiente
          </button>
        </nav>
      </article>
    </section>
  );
};

export default ImagesProjects;
