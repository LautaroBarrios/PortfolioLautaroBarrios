import { useState } from "react";
import { AboutMe, Contact, Home, Projects } from "./views/index.js";

function App() {
  const [showModal, setShowModal] = useState("");

  const changeModal = (modal) => {
    setShowModal(modal);
  };

  return (
    <section className="flex flex-col h-full w-full items-center justify-center bg-[#051314] overflow-hidden">
      <Home changeModal={changeModal} />
      {showModal === "aboutMe" && <AboutMe changeModal={changeModal} />}
      {showModal === "projects" && <Projects changeModal={changeModal} />}
      {showModal === "contact" && <Contact changeModal={changeModal} />}
    </section>
  );
}

export default App;
