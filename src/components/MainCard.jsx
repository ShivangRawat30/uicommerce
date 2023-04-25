import React from "react";
import img from "../img/1.jpg";
import cloth from "../img/cloth.jpg";

const ProductCard = () => {
  return (
    <div className="w-150px h-auto z-10 rounded overflow-hidden shadow-lg m-10 h-50px ">
      <div className="w-100% h-50%">
        <img className="w-100% h-50% object-cover" src={cloth} alt="Shirt" />
        <div className=" flex flex-col absolute px-4 text-lg text-white bottom-6 items-center justify-center w-full h-full mb-10">
          <h1 className="text-white text-8xl top-0 font-bold">
            Just Be YourSelf
          </h1>
          <p className=" p-10 text-4xl font-medium">
            Reach your full Potential{" "}
          </p>
          <button className="py-2 px-7 text-2x border-2 translate(50px) absolute bottom-0 right-40px font-medium text-2xl">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
