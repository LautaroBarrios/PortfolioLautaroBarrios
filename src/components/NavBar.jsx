import { Box, Language, ProjectsIco, User } from "../icons";

const NavBar = ({ changeModal, t, changeLanguage }) => {
  return (
    <nav className="absolute text-center lg:bottom-1.5 bottom-0.5 animate-fadeInFast bg-[#061112] lg:border-y border-y-[1.5px] border-[#575d5e] px-2 py-1 rounded-full lg:scale-100 scale-75">
      <button
        type="button"
        onClick={() => changeModal("aboutMe")}
        title={t("buttons.about")}
        className="text-bold m-1 shadow-sm shadow-[#203e41] active:border-white text-white rounded-full border-y hover:bg-[#061617] border-[#575d5e] active:scale-95 p-3 font-bold transition-all hover:scale-105"
      >
        <User />
      </button>

      <button
        type="button"
        onClick={() => changeModal("projects")}
        title={t("buttons.projects")}
        className="text-bold m-1 shadow-sm shadow-[#203e41] active:border-white text-white rounded-full border-y hover:bg-[#061617] border-[#575d5e] active:scale-95 p-3 font-bold transition-all hover:scale-105"
      >
        <ProjectsIco />
      </button>

      <button
        type="button"
        onClick={() => changeModal("contact")}
        title={t("buttons.contact")}
        className="text-bold m-1 shadow-sm shadow-[#203e41] active:border-white text-white rounded-full border-y hover:bg-[#061617] border-[#575d5e] active:scale-95 p-3 font-bold transition-all hover:scale-105"
      >
        <Box />
      </button>

      <button
        type="button"
        onClick={() => changeLanguage()}
        title={t("buttons.language")}
        className="text-bold m-1 shadow-sm shadow-[#203e41] active:border-white text-white rounded-full border-y hover:bg-[#061617] border-[#575d5e] active:scale-95 p-3 font-bold transition-all hover:scale-105"
      >
        <Language />
      </button>
    </nav>
  );
};

export default NavBar;
