import logo_white from "../assets/logo_white.png";
import CTA from "./CTA";

const Nav = () => {
  return (
    <div className="w-full bg-black">
      <nav className="h-20 flex items-center justify-between max-[450px]:justify-center max-[450px]:py-12 px-10">
        <div className="h-16">
          <img src={logo_white} alt="prest logo" className="w-full h-full" />
        </div>
        <CTA />
      </nav>
    </div>
  );
};

export default Nav;
