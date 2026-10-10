import React from "react";
import heroImg from '../../assets/book.png'
const Hero = () => {
  return (
    <div className="hero bg-base-200  rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="Tailwind CSS hero component"
          src={heroImg}
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Books to freshen up your bookshelf
          </p>
          <button className="my-custom-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
