import React from "react";
import Lottie from "lottie-react";
import RocketLoader from "../assets/RocketLoader.json";

const ALoader = ({ isLoading }) => {
  if (!isLoading) return <></>;

  return (
    <div className=" fixed h-screen w-screen top-0 left-0 bg-black/90 z-30  flex items-center justify-center ">
      <Lottie animationData={RocketLoader} className="absolute h-2/4 w-2/4" />
    </div>
  );
};

export default ALoader;
