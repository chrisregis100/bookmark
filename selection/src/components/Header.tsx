import logo from "../assets/logo-bookmark.svg";
import hamburger from "../assets/icon-hamburger.svg";
const Header = () => {
  return (
    <div className="flex items-center justify-between h-20 mx-auto ">
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
      <button className="md:hidden">
        <img src={hamburger} alt="hamburger" />
      </button>
    </div>
  );
};

export default Header;
