import { useState } from "react";
import PictureProfile from "../assets/images/PhotoProfile.png";
import { GitHub, Gmail, LinkedIn } from "../icons";

const AboutMe = ({ refScroll }) => {
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
  return (
    <section
      className="flex flex-col h-full w-full items-center justify-center p-6 text-white z-20 animate-fadeInFast"
      ref={refScroll}
    >
      <div className="flex flex-col h-full w-full items-center justify-center">
        <article className="bg-[#1c5253] lg:w-1/2 md:w-2/3 rounded-md p-4 space-y-4">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl">Sobre mí</h2>
            <a
              href="./CV-BarriosLautaroG.pdf"
              download={""}
              className="bg-[#0c7075] py-1 px-3 rounded-md shadow hover:scale-105 transition-all"
            >
              Descargar CV
            </a>
          </div>

          <div className="flex md:flex-row flex-col md:space-x-4 space-x-0 md:space-y-0 space-y-4 md:items-start items-center justify-center">
            <img
              src={PictureProfile}
              alt="Foto de perfil"
              className="h-40 w-40  rounded-full border-white hover:scale-110 transition-all bg-[#0c7075]"
            />
            <div className="flex flex-col justify-between items-end md:px-2">
              <p className="orbi-font">
                Programador residente en Córdoba, Argentina al que le apasiona
                transformar retos complejos en soluciones de diseño sencillas,
                elegantes y efectivas.
              </p>
              <p className="orbi-font">
                Su trabajo va desde interfaces digitales, experiencias
                interactivas, automatización de procesos, la convergencia de
                diseño y tecnología.
              </p>
              <p className="orbi-font">
                Posee conocimientos y experiencia en metodologías ágiles,
                estructuras de datos, algoritmos, frameworks y con años de
                experiencia como desarrollador.
              </p>
            </div>
          </div>

          <article className="flex flex-col items-center justify-center bg-[#0c7075] shadow p-1 rounded-md">
            {message && (
              <div className="bg-[#0c7075f8] border rounded-md p-2 absolute z-10">
                {message}
              </div>
            )}
            <div className="flex w-full md:flex-row flex-col items-center justify-between md:space-x-3 space-x-0">
              <div className="flex md:flex-row flex-col items-center justify-center md:space-x-1 space-x-0 p-2">
                <div className="md:h-11 md:w-11 h-9 w-9 md:pr-1 pr-0">
                  <Gmail />
                </div>
                <p className="md:pt-0 pt-1 md:pb-0 pb-2 md:px-2 px-0">
                  barrios.g.lautaro@gmail.com
                </p>
                <div className="flex md:w-auto w-full items-center justify-center space-x-2">
                  <button
                    type="button"
                    onClick={copyText}
                    title="Copiar dirección de correo electrónico"
                    className="md:w-auto w-full bg-[#1d5354] rounded-md py-1 px-2 shadow hover:scale-105 transition-all"
                  >
                    Copiar
                  </button>
                  <button
                    type="button"
                    className="md:w-auto w-full bg-[#1d5354] rounded-md py-1 px-2 shadow hover:scale-105 transition-all"
                  >
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=barrios.g.lautaro@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Enviar correo electrónico"
                    >
                      Enviar
                    </a>
                  </button>
                </div>
              </div>
              <article className="flex flex-row space-x-4 items-center justify-center  p-2 rounded-md">
                <a
                  href="https://github.com/LautaroBarrios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:h-11 md:w-11 h-9 w-9 flex items-center justify-center hover:scale-105 transition-all"
                  title="Perfil de GitHub"
                >
                  <GitHub />
                </a>

                <a
                  href="https://www.linkedin.com/in/lautaro-g-barrios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:h-11 md:w-11 h-9 w-9 flex items-center justify-center hover:scale-105 transition-all"
                  title="Perfil de LinkedIn"
                >
                  <LinkedIn />
                </a>
              </article>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
