import { Gem, Headset, Info, Sparkles } from "lucide-react";
import CTA from "./CTA";

const Nav = () => {
  return (
    <nav className="absolute flex items-center justify-between bg-black text-blue-50 w-[96%] left-[2%] top-2 p-2 px-7 rounded-xl backdrop-blur-xl">
      <div className="h-[3.5rem] flex items-center justify-center">
        <h1 className="relative font-extrabold text-3xl group/logo px-2">
          <span className="text-4xl">P</span>
          <span className="before:absolute before:top-[0.62rem] before:bg-white before:w-3/5 before:h-[0.15rem] before:rounded-lg group-hover/logo:before:scale-x-0 before:origin-right before:duration-100">
            rest
          </span>
        </h1>
      </div>
      <ul className="flex items-center justify-between w-2/5">
        <li className="nav-link">
          <Info className="hover:-scale-x-100 duration-75" />
          <a href="#about">About</a>
        </li>
        <li className="nav-link">
          <Sparkles className="hover:-scale-x-100 duration-75" />
          <a href="#features">Features</a>
        </li>
        <li className="nav-link">
          <Gem className="hover:-scale-x-100 duration-75" />
          <a href="#pricing">Pricing</a>
        </li>
        <li className="nav-link">
          <Headset className="hover:-scale-x-100 duration-75" />
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <CTA />
    </nav>
  );
};

export default Nav;
