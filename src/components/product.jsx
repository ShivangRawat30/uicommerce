import React from "react";
import tshirt from "../img/tshirt.jpg";
import bag from "../img/bag.jpg";
import i1 from "../img/i1.jpg";
import i2 from "../img/i2.jpg";
import i3 from "../img/i3.jpg";
import shoes from "../img/shoes.jpg";

const Card = () => {
  return (
    <div className="flex flex-row flex-wrap w-full justify-between gap-0 p-20">
      {/* product */}
      <div className=" m-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={tshirt} alt="product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            category
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-gray-700 text-base">rating</p>
          </div>
          <div className="font-bold text-xl mb-2">price</div>
        </div>
      </div>
      {/* Product end */}
      {/* product */}
      <div className=" m-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={i1} alt="product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            category
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-gray-700 text-base">rating</p>
          </div>
          <div className="font-bold text-xl mb-2">price</div>
        </div>
      </div>
      {/* Product end */}
      {/* product */}
      <div className=" m-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={shoes} alt="product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            category
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-gray-700 text-base">rating</p>
          </div>
          <div className="font-bold text-xl mb-2">price</div>
        </div>
      </div>
      {/* Product end */}
      {/* product */}
      <div className=" m-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={tshirt} alt="product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            category
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-gray-700 text-base">rating</p>
          </div>
          <div className="font-bold text-xl mb-2">price</div>
        </div>
      </div>
      {/* Product end */}
      {/* product */}
      <div className=" m-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={i2} alt="product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            category
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-gray-700 text-base">rating</p>
          </div>
          <div className="font-bold text-xl mb-2">price</div>
        </div>
      </div>
      {/* Product end */}
      {/* product */}
      <div className=" m-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={i3} alt="product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            category
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-gray-700 text-base">rating</p>
          </div>
          <div className="font-bold text-xl mb-2">price</div>
        </div>
      </div>
      {/* Product end */}
      {/* product */}
      <div className=" m-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={shoes} alt="product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            category
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-gray-700 text-base">rating</p>
          </div>
          <div className="font-bold text-xl mb-2">price</div>
        </div>
      </div>
      {/* Product end */}
      {/* product */}
      <div className=" m-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={i1} alt="product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            category
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-gray-700 text-base">rating</p>
          </div>
          <div className="font-bold text-xl mb-2">price</div>
        </div>
      </div>
      {/* Product end */}
      {/* product */}
      <div className=" m-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={i2} alt="product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            category
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0c-.59 0-1.16.11-1.69.33-.52.21-1.03.5-1.5.87-.88.7-1.58 1.66-2.05 2.8-.47 1.13-.71 2.39-.71 3.74 0 1.35.24 2.61.71 3.74.47 1.13 1.17 2.09 2.05 2.8.47.37.98.66 1.5.87.53.22 1.1.33 1.69.33.59 0 1.16-.11 1.69-.33.52-.21 1.03-.5 1.5-.87.88-.7 1.58-1.66 2.05-2.8.47-1.13.71-2.39.71-3.74 0-1.35-.24-2.61-.71-3.74-.47-1.13-1.17-2.09-2.05-2.8-.47-.37-.98-.66-1.5-.87-.53-.22-1.1-.33-1.69-.33zm0 17.5c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-gray-700 text-base">rating</p>
          </div>
          <div className="font-bold text-xl mb-2">price</div>
        </div>
      </div>
      {/* Product end */}
    </div>
  );
};

export default Card;
