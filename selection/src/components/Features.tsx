import React, { useState } from "react";
import illustration_1 from "../assets/illustration-features-tab-1.svg";
import illustration_2 from "../assets/illustration-features-tab-2.svg";
import illustration_3 from "../assets/illustration-features-tab-3.svg";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      label: "Simple Bookmarking",
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: illustration_1,
    },
    {
      label: "Speedy Searching",
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: illustration_2,
    },
    {
      label: "Easy Sharing",
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: illustration_3,
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">
            Features
          </h1>
          <p className="text-center text-gray-500 max-w-md text-lg">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        {/* Navigation des tabs */}
        <div role="tablist" className="flex justify-center mb-12">
          <div className="tabs tabs-boxed tabs-border flex flex-col md:flex-row w-full border-b border-gray-400">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`tab tab-lg border-b border-gray-200 font-normal hover:text-primary-content ${
                  activeTab === index
                    ? "tab-active text-black font-medium  [--tab-text-color:black] [--tab-border-color:red] "
                    : " hover:[--tab-text-color:primary-content]"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="relative lg:w-1/2 order-2 lg:order-1">
            <div className="relative z-10 max-w-lg mx-auto lg:mx-0">
              <img
                src={tabsData[activeTab].image}
                className="w-full h-auto"
                alt={`${tabsData[activeTab].label} illustration`}
              />
            </div>

            <div className="absolute left-0 md:translate-y-20 translate-10 bottom-0 w-full h-[80%] bg-primary rounded-r-full z-0 transform -translate-x-[45%]" />
          </div>

          {/* Section texte */}
          <div className="flex flex-col gap-6 lg:w-1/2 max-w-lg mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl text-black font-bold">
              {tabsData[activeTab].title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {tabsData[activeTab].description}
            </p>
            <div>
              <button className="btn btn-primary btn-lg text-white">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
