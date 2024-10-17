import CTA from "./CTA";

const Nav = () => {
  return (
    <nav className="absolute flex items-center justify-between bg-black text-blue-50 w-[96%] left-[2%] top-2 p-2 px-7 rounded-xl backdrop-blur-xl">
      <div className="h-[3.5rem] flex items-center justify-center">
        <h1 className="font-extrabold text-3xl">Prest</h1>
      </div>
      <ul className="flex items-center justify-between w-1/4">
        <li className="nav-link">
          <a href="features">Features</a>
        </li>
        <li className="nav-link">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="nav-link">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <CTA />
    </nav>
  );
};

export default Nav;
