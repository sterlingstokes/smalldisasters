import React from "react";

export const HeaderImages = ({}) => {
  return (
    <div className="flex flex-row items-center w-full h-96 bg-black max-w-screen">
      <div
        className="hidden lg:flex bg-[url('/band-at-brewery.jpg')] bg-cover bg-center bg-no-repeat w-full h-96"
        alt="Band outside at brewery"
      />
      <div
        className="flex lg:flex bg-[url('/octopus-art.jpg')] bg-cover bg-center bg-no-repeat w-full h-96"
        alt="Octopus art from Gasoline EP"
      />
      <div
        className="hidden lg:flex bg-[url('/hummingbird-art.jpg')] bg-cover bg-center bg-no-repeat w-full h-96"
        alt="Hummingbird art from demo ep"
      />{" "}
      <div
        className="hidden lg:flex bg-[url('/band-photo-black-and-white.png')] bg-cover bg-center bg-no-repeat w-full h-96"
        alt="Band outside on main street"
      />
    </div>
  );
};
export default HeaderImages;
