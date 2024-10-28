import { useState } from "react";
import { AboutMe, Home, Projects } from "./views/index.js";

function App() {
  const [showModal, setShowModal] = useState("");

  const changeModal = (modal) => {
    setShowModal(modal);
  };

  return (
    <section className="flex flex-col h-full w-full items-center justify-center bg-[#051314]">
      <Home changeModal={changeModal} />
      {showModal === "aboutMe" && <AboutMe changeModal={changeModal} />}
      {/* <Projects /> */}
    </section>
  );
}

export default App;
