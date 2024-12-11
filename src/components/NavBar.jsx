import { useState } from "react";
import { Box, Language, ProjectsIco, User } from "../icons";

const NavBar = ({ changeModal, t, changeLanguage }) => {
  const [option, setOption] = useState(null);

  return (
    <nav className="absolute text-center lg:bottom-1.5 bottom-0.5 animate-fadeInFast bg-[#061112] lg:border-y border-y-[1.5px] border-[#575d5e] px-2 py-1 rounded-full lg:scale-100 scale-90">
      {option && (
        <p
          className="xl:block w-28 hidden absolute bottom-[56px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-[#f7f9fa] rounded-full animate-fadeInFast py-1"
          style={{
            backgroundColor: "rgba(6, 17, 18, 0.75)",
          }}
        >
          {option}
        </p>
      )}

      <button
        type="button"
        onClick={() => changeModal("aboutMe")}
        onMouseEnter={() => setOption(t("buttons.about"))}
        onMouseLeave={() => setOption(null)}
        className="bg-[#061617] text-bold m-1 shadow-sm shadow-[#203e41] active:border-white text-white rounded-full border-y hover:bg-[#091f20] border-[#575d5e] active:scale-95 p-3 font-bold transition-all hover:scale-105"
      >
        <User />
      </button>

      <button
        type="button"
        onClick={() => changeModal("projects")}
        onMouseEnter={() => setOption(t("buttons.projects"))}
        onMouseLeave={() => setOption(null)}
        className="bg-[#061617] text-bold m-1 shadow-sm shadow-[#203e41] active:border-white text-white rounded-full border-y hover:bg-[#091f20] border-[#575d5e] active:scale-95 p-3 font-bold transition-all hover:scale-105"
      >
        <ProjectsIco />
      </button>

      <button
        type="button"
        onClick={() => changeModal("contact")}
        onMouseEnter={() => setOption(t("buttons.contact"))}
        onMouseLeave={() => setOption(null)}
        className="bg-[#061617] text-bold m-1 shadow-sm shadow-[#203e41] active:border-white text-white rounded-full border-y hover:bg-[#091f20] border-[#575d5e] active:scale-95 p-3 font-bold transition-all hover:scale-105"
      >
        <Box />
      </button>

      <button
        type="button"
        onClick={() => changeLanguage()}
        onMouseEnter={() => setOption(t("buttons.language"))}
        onMouseLeave={() => setOption(null)}
        className="bg-[#061617] text-bold m-1 shadow-sm shadow-[#203e41] active:border-white text-white rounded-full border-y hover:bg-[#091f20] border-[#575d5e] active:scale-95 p-3 font-bold transition-all hover:scale-105"
      >
        <Language />
      </button>
    </nav>
  );
};

export default NavBar;
