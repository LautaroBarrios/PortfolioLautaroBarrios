import { useRef, useEffect, useState } from "react";
import { Close, Gmail } from "../icons";

const Contact = ({ changeModal }) => {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const [message, setMessage] = useState("");
  const copyText = () => {
    const text = "barrios.g.lautaro@gmail.com";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMessage("Texto copiado!");
        setTimeout(() => setMessage(""), 2000);
      })
      .catch((err) => console.error("Error al copiar el texto:", err));
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
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl">Contact</h2>
            <button
              type="button"
              onClick={closeModal}
              title="Cerrar"
              className="bg-[#0c7075] active:scale-105 p-0.5 rounded-md transition-all"
            >
              <Close />
            </button>
          </div>

          <article className="flex flex-col items-center justify-center bg-[#0c7075] shadow p-1 rounded-md">
            {message && (
              <span className="bg-[#0c7075f8] border rounded-md px-2 py-1 absolute z-10">
                {message}
              </span>
            )}
            <div className="flex w-full md:flex-row flex-col items-center justify-between md:space-x-1 space-x-0 p-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=barrios.g.lautaro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Enviar correo electrónico"
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
                  title="Copiar dirección de correo electrónico"
                  className="md:w-auto w-full bg-[#ffffff] text-[#0c7075] rounded-md py-[3px] px-2 hover:scale-105 transition-all"
                >
                  Copiar
                </button>
              </div>
            </div>
          </article>
          {/* <p className="text-sm text-center">sino</p> */}
        </article>
      </div>
    </section>
  );
};

export default Contact;
