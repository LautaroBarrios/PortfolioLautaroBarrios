import { Lights } from "../components";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen md:p-0 p-4 bg-[radial-gradient(circle,_#ffffff_50%,_#040d0e_100%)]">
      <Lights />
      <article className="flex flex-col bg-[radial-gradient(circle,_#061516_30%,_#040d0e_100%)] 2xl:p-52 xl:p-40 lg:p-20 p-10 max-w-[100vw] lg:max-w-[50vw] aspect-square rounded-full items-center justify-center space-y-2">
        <h1 className="text-3xl sm:text-4xl text-center text-gray-50 animate-fadeIn cursor-default">
          I AM LAUTARO BARRIOS
        </h1>
        <div className="flex flex-col items-center justify-center w-full space-y-1 animate-fadeInMedium">
          <button className="text-xl text-center text-gray-100 underline underline-offset-4 hover:animate-pulse">
            CREATIVE FULLSTACK DEVELOPER
          </button>
          <h2 className="text-center sm:text-base text-sm text-gray-100 cursor-default">
            {/* TÚ VISIÓN DIGITAL, HECHA REALIDAD.  */}
            YOUR DIGITAL VISION, MADE REALITY.
          </h2>
        </div>
      </article>
    </section>
  );
};

export default Home;
