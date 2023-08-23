import React, { useRef } from "react";

function Dropdown() {
  return (
    <>
      <div
        id="drop-down"
        className="absolute z-10 bg-white h-8 w-8 right-2 top-14  rotate-45 "
      ></div>
      <div
        id="drop-down"
        className="absolute z-20 bg-white  h-auto w-52 right-0 top-16 rounded-lg  shadow-2xl"
      >
        <div className="w-full    rounded-lg overflow-hidden  ">
          <ul className="   text-center  ">
            <li className="hover:bg-gray-100 py-2  border-b"> Login</li>

            <li className="hover:bg-gray-100 py-2  border-b">
              Favorite Movie
            </li>
            <li className="hover:bg-gray-100  py-2"> Logout</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
