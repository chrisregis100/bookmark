import heroImage from "../assets/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="relative min-w-full overflow-hidden py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex md:flex-col flex-col-reverse gap-10  lg:flex-row xl:gap-16 items-center justify-between">
          <div className="flex flex-col gap-6 items-start justify-start lg:w-1/2 z-10">
            <h1 className="font-bold text-4xl lg:text-5xl">
              A Simple Bookmark Manager
            </h1>
            <p className="text-gray-600 max-w-md">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free
            </p>
            <div className="flex items-center gap-4 mt-2">
              <button className="btn bg-primary px-4 py-2 rounded transition delay-150 duration-300 ease-in-out text-white hover:btn-outline hover:bg-white hover:text-primary hover:border-primary">
                Get it on Chrome
              </button>
              <button className="btn bg-secondary-content  shadow  px-4 py-2 rounded transition delay-150 duration-300 ease-in-out text-secondary hover:btn-outline hover:bg-white hover:text-secondary hover:border-secondary">
                Get it on Firefox
              </button>
            </div>
          </div>

          <div className="relative lg:w-1/2 mt-10 lg:mt-0 order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Bookmark Manager Interface"
                className=""
              />
            </div>
            <div className="absolute right-0 bottom-0 md:w-1/2 md:max-w-[720px] h-[60%] w-[80%] top-2/5 -translate-y-0 translate-x-28 md:translate-y-0 md:translate-x-12  md:h-[60%] bg-primary rounded-l-full z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
