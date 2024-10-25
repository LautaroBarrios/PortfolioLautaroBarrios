import { AboutMe, Home } from "./views/index.js";

function App() {
  return (
    <section className="flex flex-col h-full w-full items-center justify-center overflow-auto bg-[#051314]">
      <Home />
      <AboutMe />
    </section>
  );
}

export default App;
