import logo from "../assets/logo-bookmark.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex items-center relative justify-between h-20 mx-auto ">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>

      <div className=" items-center gap-5 hidden md:flex">
        <nav className="flex items-center font-normal gap-7">
          <a
            href="/features"
            className="hover:text-primary-content focus:text-primary-content transition delay-150 duration-300 ease-in-out"
          >
            FEATURES
          </a>
          <a
            href="/pricing"
            className="hover:text-primary-content focus:text-primary-content"
          >
            PRICING
          </a>
          <a
            href="/contact"
            className="hover:text-primary-content focus:text-primary-content"
          >
            CONTACT
          </a>
        </nav>
        <button className="btn bg-primary-content px-8 transition delay-150 duration-300 ease-in-out text-white hover:btn-outline hover:bg-white hover:text-primary-content hover:border-primary-content">
          LOGIN
        </button>
      </div>
      <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
        <img src={hamburger} alt="hamburger" />
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full transition-all duration-200 delay-150 ease-in-out h-screen bg-secondary opacity-95 px-6 py-8 z-50 md:hidden">
          <div className="flex items-center justify-between mb-10">
            <img src={logo} alt="logo" />
            <button onClick={() => setIsMenuOpen(false)}>
              <img src={close} alt="close" />
            </button>
          </div>
          <div className="text-white space-y-6">
            <nav className="flex flex-col space-y-6 text-xl">
              <a
                href="/features"
                className="border-b border-white/35 text-center pb-2"
              >
                FEATURES
              </a>
              <a
                href="/pricing"
                className="border-b border-white/35 text-center  pb-2"
              >
                PRICING
              </a>
              <a
                href="/contact"
                className="border-b border-white/35 text-center pb-2"
              >
                CONTACT
              </a>
            </nav>
            <button className="w-full border-2 border-white text-center py-2 mt-6 text-white hover:bg-white hover:text-secondary">
              LOGIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
