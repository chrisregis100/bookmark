import logo from "../assets/logo-bookmark.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="bg-secondary items-center gap-8 py-5 flex-col md:flex-row justify-between min-h-20 text-white w-full flex lg:px-40">
      <div className="flex items-center flex-col md:flex-row justify-between gap-4 mt-10">
        <a href="#">
          <img src={logo} className="text-white bg-white" alt="logo" />
        </a>
        <nav className="flex items-center font-normal flex-col md:flex-row gap-7">
          <a href="/features" className="hover:text-primary-content">
            FEATURES
          </a>
          <a href="/pricing" className="hover:text-primary-content">
            PRICING
          </a>
          <a href="/contact" className="hover:text-primary-content">
            CONTACT
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <a href="#">
          <img
            src={facebook}
            className="hover:bg-primary-content"
            alt="facebook"
          />
        </a>
        <a href="#">
          <img
            src={twitter}
            className="hover:bg-primary-content"
            alt="twitter"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
