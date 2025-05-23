const CallToAction = () => {
  return (
    <div className="bg-primary flex flex-col items-center px-2 justify-center h-80 w-full mt-20 py-10 text-white">
      <h3 className="text-sm text-center font-medium">
        35, 000 + ALREADY JOINED
      </h3>
      <h1 className="font-bold text-center text-3xl mt-5">
        Stay up-tp-date with what we're doing
      </h1>
      <div className="flex gap-3 flex-col px-12 md:flex-row w-full justify-center items-center mt-5">
        <input
          type="email"
          className=" validator w-full md:w-auto  text-gray-600 input text-sm bg-white input-md "
          required
          placeholder="Enter your email address"
        />
        <button className="bg-primary-content w-full  md:w-auto hover:bg-white border-primary-content hover:text-primary-content hover:border-primary-content text-white btn ">
          Contact us
        </button>
        {/*         <div className="validator-hint">Enter valid email address</div>
         */}{" "}
      </div>
    </div>
  );
};

export default CallToAction;
