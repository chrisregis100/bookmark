const FrequentlyQuestions = () => {
  return (
    <div className="flex flex-col bg-secondary-content items-center justify-center gap-10 mt-20">
      <h1 className="text-center text-4xl font-bold">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-500 max-w-md">
        Here are some of our FAQs. Of you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div className="">
        <div className="collapse hover:text-primary-content collapse-arrow  rounded-none  border-t border-b-gray-600">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-normal">What is Bookmark ?</div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse hover:[--collapse-arrow-text:bg-primary] hover:text-primary-content collapse-arrow rounded-none  border-t border-b-gray-600">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-normal">
            How can I request a new browser?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse hover:text-primary-content collapse-arrow  rounded-none border-t border-b-gray-600">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-normal">
            Is there a mobile app?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse hover:text-primary-content collapse-arrow border-b  rounded-none border-t border-b-gray-400">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-normal">
            What about other Chromium browsers?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>

      <button className="text-white btn btn-primary">More Info</button>
    </div>
  );
};

export default FrequentlyQuestions;
