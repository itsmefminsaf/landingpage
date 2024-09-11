import Slide from "./Slide";

const Hero = () => {
  return (
    <main className="relative h-96 bg-slate-400 flex flex-wrap items-center justify-between px-20">
      <h1 className="text-[4em] font-bold text-center">
        Welcome to <br />{" "}
        <span className="bg-textGrad bg-clip-text text-transparent hover:text-[1.1em] duration-200">
          Prest
        </span>
      </h1>
      <div className="w-2/5 aspect-video hover:scale-110 duration-500">
        <Slide />
      </div>
    </main>
  );
};

export default Hero;
