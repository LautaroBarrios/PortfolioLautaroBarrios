import { useRef } from "react";
import { AboutMe, Home, Projects } from "./views/index.js";

function App() {
  const refScroll = useRef(null);

  const scrollToAboutMe = () => {
    const targetPosition =
      refScroll.current.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 400;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <section className="flex flex-col h-full w-full items-center justify-center overflow-auto bg-[#051314]">
      <Home scrollToAboutMe={scrollToAboutMe} />
      <AboutMe refScroll={refScroll} />
      <Projects />
    </section>
  );
}

export default App;
