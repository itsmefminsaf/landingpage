import { ReactNode, useState } from "react";
import { navItems } from "../data/constants.json";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isNavItemOpened, setIsNavItemOpened] = useState(false);

  return (
    <nav className="fixed left-[5%] top-2 flex h-16 w-[90%] items-center justify-between rounded-full bg-theme-1 px-5 text-neutral-50">
      <div className="h-full p-2">
        <img src={logo} alt="logo" className="h-full w-full" />
      </div>
      <button className="absolute right-16 z-50 w-20 min-w-fit rounded-full bg-white px-3 py-2 text-xl font-bold text-theme-1 shadow-xxl duration-100 hover:-translate-y-[0.15rem] hover:shadow-white/50 active:translate-y-[0.15rem] md:static md:order-3">
        Edit Now !
      </button>
      <ul
        className={`${isNavItemOpened ? "animate-scaleY absolute right-0 top-[2rem] z-0 flex w-40 origin-top flex-col rounded-2xl rounded-tr-none bg-theme-1 p-2 pt-10 before:absolute before:-left-10 before:top-8 before:aspect-square before:w-10 before:rounded-2xl before:shadow-inverted_radius before:shadow-theme-1" : "hidden"} justify-evenly gap-2 md:static md:order-2 md:flex md:w-auto md:flex-row md:items-center md:rounded-none md:bg-transparent md:p-0`}
      >
        {navItems.map<ReactNode>((item) => {
          return (
            <li className="rounded-full px-3 py-2 duration-500 hover:bg-white hover:text-theme-1 active:-translate-y-1">
              <a href={item.link} className="h-full w-full rounded-full">
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setIsNavItemOpened(!isNavItemOpened);
        }}
        className="z-50 flex aspect-square w-10 items-center justify-center active:animate-ping md:hidden"
      >
        {isNavItemOpened ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

export default Nav;
