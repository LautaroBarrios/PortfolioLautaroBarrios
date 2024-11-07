import { useState } from "react";
import { Lights, NavBar } from "../components";
import { useTranslation } from "react-i18next";
import { Box, Language, ProjectsIco, User } from "../icons";

const Home = ({ changeModal }) => {
  const [showButton, setShowButton] = useState(false);
  const [t, i18n] = useTranslation("global");

  setTimeout(() => {
    setShowButton(true);
  }, 2100);

  const changeLanguage = () => {
    if (localStorage.getItem("i18nextLng") === "en") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full lg:h-screen h-[100dvh] md:p-0 p-4 bg-[radial-gradient(circle,_#f7f9fa_50%,_#040d0e_100%)] animate-fadeInFast">
      <Lights />

      {showButton && (
        <NavBar
          changeModal={changeModal}
          t={t}
          changeLanguage={changeLanguage}
        />
      )}

      <article className="flex flex-col bg-[radial-gradient(circle,_#061516_30%,_#040d0e_100%)] 2xl:p-52 xl:p-40 lg:p-20 p-10 max-w-[100vw] lg:max-w-[50vw] aspect-square rounded-full items-center justify-center space-y-1">
        <h1 className="lg:text-4xl sm:text-3xl s:text-xl text-lg text-center text-gray-50 animate-fadeIn cursor-default font-bold">
          {t("home.name")}
        </h1>
        <div className="flex flex-col items-center justify-center w-full space-y-1 animate-fadeInMedium">
          <button
            type="button"
            className="sm:text-xl s:text-lg text-base text-center text-gray-100 font-bold underline underline-offset-4"
            onClick={() => changeModal("projects")}
          >
            FULLSTACK DEVELOPER
          </button>
          <p className="text-center sm:text-base text-sm text-gray-100 font-bold cursor-default">
            {t("home.slogan")}
          </p>
        </div>
        <a
          href="./CV-BarriosLautaroG.pdf"
          download={""}
          className={`bg-[#f7f9fa] s:text-base text-sm py-1 px-4 rounded-full shadow active:scale-105 transition-all hover:animate-pulse ${
            !showButton ? "animate-fadeIn" : ""
          }`}
        >
          {t("home.cv")}
        </a>
      </article>
    </section>
  );
};

export default Home;
