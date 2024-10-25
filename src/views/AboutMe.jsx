import { useState } from "react";
import PictureProfile from "../assets/images/PhotoProfile.jpg";
import { GitHub, Gmail, LinkedIn } from "../icons";

const AboutMe = () => {
  const [message, setMessage] = useState("");

  const copiarTexto = () => {
    const text = "Texto a copiar";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMessage("Texto copiado!");
        setTimeout(() => setMessage(""), 2000);
      })
      .catch((err) => console.error("Error al copiar el texto:", err));
  };
  return (
    <section className="flex flex-col h-full w-full items-center justify-center p-6 text-white z-20">
      <div className="flex flex-col h-full w-full items-center justify-center">
        {message && (
          <div className="bg-[#0c7075f8] border rounded-md p-2 absolute">
            {message}
          </div>
        )}

        <article className="bg-[#1c5253] lg:w-1/2 md:w-2/3 rounded-2xl p-4 space-y-4">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl">Sobre mi</h2>
            <a
              href="./CV-BarriosLautaroG.pdf"
              download={""}
              className="bg-[#0c7075] py-1 px-3 rounded-lg shadow hover:scale-105 transition-all"
            >
              Descargar CV
            </a>
          </div>

          <div className="flex md:flex-row flex-col md:space-x-4 space-x-0 md:space-y-0 space-y-4 md:items-start items-center justify-center">
            <img
              src={PictureProfile}
              alt="Foto de perfil"
              className="h-40 w-40 border rounded-full border-white"
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

          <article className="flex flex-col items-center justify-center bg-[#0c7075] shadow p-2 rounded-lg">
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
                    onClick={copiarTexto}
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
                  title="Ver mi perfil de GitHub"
                >
                  <GitHub />
                </a>

                <a
                  href="https://www.linkedin.com/in/lautaro-g-barrios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:h-11 md:w-11 h-9 w-9 flex items-center justify-center hover:scale-105 transition-all"
                  title="Ver mi perfil de LinkedIn"
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
