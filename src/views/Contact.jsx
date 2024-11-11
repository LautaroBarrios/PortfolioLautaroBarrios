import { useRef, useEffect, useState } from "react";
import { Gmail } from "../icons";
import { useTranslation } from "react-i18next";
import { HeaderModal } from "../components";

const Contact = ({ changeModal }) => {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const [t] = useTranslation("global");

  const [message, setMessage] = useState("");
  const copyText = () => {
    const text = "barrios.g.lautaro@gmail.com";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMessage(t("contact.text_copy"));
        setTimeout(() => setMessage(""), 2000);
      })
      .catch((err) => console.error(t("contact.text_not_copy"), err));
  };
  const closeModal = () => {
    setIsClosing(true);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        changeModal("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing, changeModal]);

  return (
    <section
      className={`flex flex-col h-full w-full items-center justify-center md:p-6 p-4 text-white z-20 absolute 
    ${isClosing ? "animate-fadeOutFast" : "animate-fadeInFast"}`}
    >
      <div className="flex flex-col h-full w-full items-center justify-center">
        <article
          className="bg-[radial-gradient(circle,_#061516_50%,_#040d0e_100%)] 2xl:w-1/3 xl:w-1/2 lg:w-1/2 md:w-2/3 rounded-2xl px-4 pt-4 pb-5 space-y-4 overflow-auto border-[0.5px] border-[#585d5e]"
          ref={modalRef}
        >
          <HeaderModal
            title={t("buttons.contact")}
            buttonClose={t("buttons.titles.close")}
            closeModal={closeModal}
          />

          <article className="flex flex-col items-center justify-center bg-[#0c7075] bg-opacity-10 shadow p-1 rounded-md">
            {message && (
              <span className="bg-[#032224f8] border rounded-md px-2 py-1 absolute z-10">
                {message}
              </span>
            )}
            <div className="flex w-full md:flex-row flex-col items-center justify-between md:space-x-1 space-x-0 p-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=barrios.g.lautaro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title={t("buttons.titles.gmail")}
                className="md:h-11 md:w-11 h-9 w-9 md:pr-1 pr-0 hover:scale-105 transition-all"
              >
                <Gmail />
              </a>
              <p className="md:pt-0 pt-1 md:pb-0 pb-2 md:px-2 px-0">
                barrios.g.lautaro@gmail.com
              </p>
              <div className="flex md:w-auto w-full items-center justify-center space-x-2">
                <button
                  type="button"
                  onClick={copyText}
                  title={t("buttons.titles.copy")}
                  className="md:w-auto w-full bg-[#ffffff] text-[#051a1c] rounded-md py-[3px] px-2 hover:scale-105 transition-all font-bold"
                >
                  {t("buttons.copy")}
                </button>
              </div>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
};

export default Contact;
