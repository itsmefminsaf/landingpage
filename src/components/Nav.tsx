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
      <button className="shadow-xxl absolute right-16 w-20 min-w-fit rounded-full bg-white px-3 py-2 text-xl font-bold text-theme-1 shadow-white/50 duration-100 active:translate-y-1 md:static md:order-3">
        Edit Now !
      </button>
      <ul
        className={`${isNavItemOpened ? "animate-transtateY absolute right-1 top-[4.5rem] flex w-40 flex-col rounded-2xl bg-theme-1 p-2" : "hidden"} justify-evenly gap-2 md:static md:order-2 md:flex md:w-auto md:flex-row md:items-center md:rounded-none md:bg-transparent md:p-0`}
      >
        {navItems.map<ReactNode>((item) => {
          return (
            <li className="rounded-full px-3 py-2 duration-500 hover:bg-white hover:text-theme-1">
              <a href={item.link}>{item.text}</a>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setIsNavItemOpened(!isNavItemOpened);
        }}
        className="flex aspect-square w-10 items-center justify-center active:animate-ping md:hidden"
      >
        {isNavItemOpened ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

export default Nav;
