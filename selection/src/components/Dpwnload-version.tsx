import React from "react";
import bgDots from "../assets/bg-dots.svg";
import opera from "../assets/logo-opera.svg";
import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";

type CardProps = {
  title: string;
  image: string;
  version: string;
};
const Card: React.FC<CardProps> = ({ title, image, version }) => {
  return (
    <div className="card w-96 shadow-md bg-white">
      <figure className="px-10 pt-10">
        <img src={image} alt="image navigator" className="rounded-xl" />
      </figure>
      <div className="card-body justify-between items-center text-center">
        <h2 className="card-title mt-4"> Add to {title}</h2>
        <p className="card-subtitle">Minimum version {version}</p>
        <div className="flex gap-4 items-center justify-center flex-col mt-5">
          <img src={bgDots} alt="" />
          <div className="card-actions">
            <button className="btn btn-primary hover:bg-white hover:text-primary hover:border-primary text-white font-semibold">
              Add & install Extension
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Download = () => {
  return (
    <div className="flex flex-col items-center justify-between my-4 gap-4">
      <h1 className="text-center font-bold text-4xl">Download the extension</h1>
      <p>
        We've got more browser in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.{" "}
      </p>

      <div>
        <div className="flex flex-wrap  justify-center px-10 gap-4 md:gap-10 mt-10">
          <div>
            <Card title="Chrome" image={chrome} version="62" />
          </div>
          <div className="md:mt-16">
            <Card title="Firefox" image={firefox} version="55" />
          </div>
          <div className="md:mt-32">
            <Card title="Opera" image={opera} version="46" />
          </div>
        </div>
      </div>
    </div>
  );
};
