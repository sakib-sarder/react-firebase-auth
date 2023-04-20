import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation-home.json";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">
            <span>Shop Your Heart Out</span>: Discover the Best Deals on Our Online
            Marketplace
          </h1>
        </div>
              <div>
              <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>  
        </div>
      </div>
  );
};

export default Home;
