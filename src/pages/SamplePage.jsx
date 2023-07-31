import React, { useState } from "react";

function SamplePage() {
  const [item, setItem] = useState([10]);

  const colors = ["green-400", "green-700", "red-400"];
  const numberOfElements = 16;

  const renderTest2 = () => {
    return (
      <>
        <div id="container" className="container mx-auto">
          <div className="flex justify-between items-center py-4 bg-blue-900">
            <div className="flex-shrink-0 ml-10 cursor-pointer">
              <i className="fas fa-drafting-compass fa-2x text-orange-500"></i>
              <span className="ml-1 text-3xl text-blue-200 font-semibold">
                WebCraft
              </span>
            </div>
            <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0"></i>
            <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
              <li className="mr-6 p-1 hover:border-b-2 border-orange-500">
                <a href="#" className="text-blue-200 cursor-pointer">
                  Home
                </a>
              </li>
              <li className="mr-6 p-1 ">
                <a href="#" className="text-white hover:text-blue-300">
                  Projects
                </a>
              </li>
              <li className="mr-6 p-1 ">
                <a href="#" className="text-white hover:text-blue-300">
                  Team
                </a>
              </li>
              <li className="mr-6 p-1 ">
                <a href="#" className="text-white hover:text-blue-300">
                  About
                </a>
              </li>
              <li className="mr-6 p-1 ">
                <a href="#" className="text-white hover:text-blue-300">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          {/* End Navbar--------------- */}
          <div className="w-full p-6 bg-blue-100">
            <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">
              OUR SERVICES
            </div>
            <div className="p-2 text-center text-lg text-gray-700">
              We offer the best web developments solutions.
            </div>
            <div className="flex justify-center flex-wrap p-10">
              <div className="relative w-48 h-64 m-5 bg-white shadows-lg">
                <div className="flex item-center w-48 h-20 bg-orange-500">
                  <i className="fas fa-bezier-curve fa-3x mx-auto my-auto text-white"></i>
                </div>
                <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
                  UI Design
                </p>
                <p className="p-2 text-sm text-gray-700 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur, minima?
                </p>
                <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
                  <i className="fas fa-chevron-right mt-2 text-orange-500"></i>
                </div>
              </div>
              {/* End service items */}
              <div className="relative w-48 h-64 m-5 bg-white shadows-lg">
                <div className="flex item-center w-48 h-20 bg-orange-500">
                  <i className="fas fa-bezier-curve fa-3x mx-auto my-auto text-white"></i>
                </div>
                <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
                  UI Design
                </p>
                <p className="p-2 text-sm text-gray-700 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur, minima?
                </p>
                <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
                  <i className="fas fa-chevron-right mt-2 text-orange-500"></i>
                </div>
              </div>
              {/* End service items */}
              <div className="relative w-48 h-64 m-5 bg-white shadows-lg">
                <div className="flex item-center w-48 h-20 bg-orange-500">
                  <i className="fas fa-bezier-curve fa-3x mx-auto my-auto text-white"></i>
                </div>
                <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
                  UI Design
                </p>
                <p className="p-2 text-sm text-gray-700 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur, minima?
                </p>
                <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
                  <i className="fas fa-chevron-right mt-2 text-orange-500"></i>
                </div>
              </div>
              {/* End service items */}
              <div className="relative w-48 h-64 m-5 bg-white shadows-lg">
                <div className="flex item-center w-48 h-20 bg-orange-500">
                  <i className="fas fa-bezier-curve fa-3x mx-auto my-auto text-white"></i>
                </div>
                <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
                  UI Design
                </p>
                <p className="p-2 text-sm text-gray-700 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur, minima?
                </p>
                <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
                  <i className="fas fa-chevron-right mt-2 text-orange-500"></i>
                </div>
              </div>
              {/* End service items */}
            </div>
          </div>
          {/* End services */}
          <div className="section bg-blue-200">
            <div class="section-title">OUR PROJECTS</div>
            <div class="section-subtitle">
              Explore our rich and diverse portfolio.
            </div>
            <nav className="flex justify-center flex-wrap mt-4 mb-8 text-white gap-y-1">
              <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skew-x-12  ">
                All
              </div>
              <div className="h-8 mr-2 px-3 py-1 bg-blue-800  text-center -skew-x-12   ">
                UI Design
              </div>
              <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center   cursor-pointer  -skew-x-12  ">
                Web Dev
              </div>
              <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600  text-center   cursor-pointer  -skew-x-12  ">
                Mobile Apps
              </div>
              <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600  text-center   cursor-pointer -skew-x-12   ">
                SEO
              </div>
            </nav>
            <div className="flex justify-center flex-wrap">
              <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-600 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-lg ">
                <img
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                  alt="image"
                  className="w-full h-full object-cover rounded-tl-2xl  rounded-br-2xl"
                ></img>
              </div>
              <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-600 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-lg ">
                <img
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                  alt="image"
                  className="w-full h-full object-cover rounded-tl-2xl  rounded-br-2xl"
                ></img>
              </div>
              <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-600 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-lg ">
                <img
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                  alt="image"
                  className="w-full h-full object-cover rounded-tl-2xl  rounded-br-2xl"
                ></img>
              </div>
              <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-600 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-lg ">
                <img
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                  alt="image"
                  className="w-full h-full object-cover rounded-tl-2xl  rounded-br-2xl"
                ></img>
              </div>
            </div>
          </div>
          {/* End project ------------ */}
          <div className="section bg-blue-100">
            <div className="section-title">OUR TEAM</div>
            <div className="section-subtitle ">
              Meet our skilled professionals.
            </div>
            <div className="flex justify-center flex-wrap">
              <div className="w-48 m-4 py-2 bg-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="team image"
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                ></img>
                <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">
                  Jenny Ken
                </p>
                <p className="text-center text-gray-600">UI Designer</p>
                <div className="flex justify-center flex-wrap mt-2">
                  <i className="fab fa-facebook-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-twitter-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-google-plus-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                </div>
              </div>
              <div className="w-48 m-4 py-2 bg-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="team image"
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                ></img>
                <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">
                  Jenny Ken
                </p>
                <p className="text-center text-gray-600">UI Designer</p>
                <div className="flex justify-center flex-wrap mt-2">
                  <i className="fab fa-facebook-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-twitter-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-google-plus-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                </div>
              </div>
              <div className="w-48 m-4 py-2 bg-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="team image"
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                ></img>
                <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">
                  Jenny Ken
                </p>
                <p className="text-center text-gray-600">UI Designer</p>
                <div className="flex justify-center flex-wrap mt-2">
                  <i className="fab fa-facebook-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-twitter-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-google-plus-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                </div>
              </div>
              <div className="w-48 m-4 py-2 bg-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="team image"
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                ></img>
                <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">
                  Jenny Ken
                </p>
                <p className="text-center text-gray-600">UI Designer</p>
                <div className="flex justify-center flex-wrap mt-2">
                  <i className="fab fa-facebook-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-twitter-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-google-plus-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
          {/* End OUR TEAM----------------------- */}
          <div className="w-full bg-blue-900">
            <div className="flex flex-wrap text-center text-white">
              {/* About column */}
              <div className="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left  ">
                <div className="my-6 ml-3 text-xl font-semibold">ABOUT US</div>
                <p className="p-3 text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum, sint.
                </p>
                <p className="p-3 text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum, sint.
                </p>
              </div>
              {/* Contract column */}
              <div className="w-full md:w-1/3 p-5 border-r border-blue-800">
                <div className="my-6 ml-3 text-xl font-semibold">
                  CONTRACT US
                </div>
                <p className="ml-8 text-gray-400">
                  Phetkasem Road <br />
                  Bangkok, 10160 <br />
                  Thailand <br />
                  <strong>phone:</strong> +66 xx-xxx-xxx Thailand <br />
                  <strong>Email:</strong> ABC@gmail.com
                  <div className="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
                    <div className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:bg-gray-200 bg-blue-800 cursor-pointer">
                      <i className="fab fa-facebook-f fa-lg text-blue-500 -rotate-45"></i>
                    </div>
                    <div className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:bg-gray-200 bg-blue-800 cursor-pointer">
                      <i className="fab fa-twitter  fa-lg text-blue-500 -rotate-45"></i>
                    </div>
                    <div className="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:bg-gray-200 bg-blue-800 cursor-pointer">
                      <i className="fab fa-google-plus-g fa-lg text-blue-500 -rotate-45"></i>
                    </div>
                    <div className="flex justify-center items-center absolute left-0 bottom-0 w-10 h-10 hover:bg-gray-200 bg-blue-800 cursor-pointer">
                      <i className="fab fa-linkedin fa-lg text-blue-500 -rotate-45"></i>
                    </div>
                  </div>
                </p>
              </div>
              {/* Form column */}
              <div className="w-full md:w-1/3 p-5">
                
                <form className="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded" action="">
                  <div className="flex items-center mb-4">
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full h-10 p-2 border-b border-blue-800 bg-blue-900"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full h-10 p-2 border-b border-blue-800 bg-blue-900"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <textarea
                      placeholder="Message"
                      className="w-full h-24 px-2 pt-2 border-b border-blue-800 bg-blue-900 text-white"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      className="w-full py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 font-bold"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderTest = () => {
    return (
      <div className="flex flex-shrink-1">
        <div className="h-40 w-40 bg-green-700"></div>
        <div className="h-40 w-40 bg-green-400"></div>
        <div className="h-40 w-40 bg-green-700"></div>
        <div className="h-40 w-40 bg-green-400"></div>
        <div className="h-40 w-40 bg-green-700"></div>
        <div className="h-40 w-40 bg-green-400"></div>
        <div className="h-40 w-40 bg-green-700"></div>
      </div>
    );
  };

  return (
    <div className="h-full w-full  ">
      {renderTest2()}
      {/* <div className="grid grid-cols-5 bg-red-700  gap-3">
        {[...Array(numberOfElements)].map((_, index) => {
          const colorIndex = index % colors.length;
          const colorClass = colors[colorIndex];
          return (
            <div
              key={index}
              className={`h-52 w-52 rounded-2xl bg-${colorClass}`}
            />
          );
        })}{" "}
      </div> */}
      {/* <div className="  h-full  grid grid-cols-5 bg-red-300 ml-4 gap-1">
        <div className="h-40 w-40 bg-green-400"></div>
        <div className="h-40 w-40 bg-green-700"></div>
        <div className="h-40 w-40 bg-green-400"></div>
        <div className="h-40 w-40 bg-green-700"></div>
        <div className="h-40 w-40 bg-green-400"></div>
        <div className="h-40 w-40 bg-green-700"></div>
        <div className="h-40 w-40 bg-green-400"></div>
        <div className="h-40 w-40 bg-green-700"></div>
        <div className="h-40 w-40 bg-green-400"></div>
        <div className="h-40 w-40 bg-green-700"></div>
        <div className="h-40 w-40 bg-green-400"></div>
        <div className="h-40 w-40 bg-green-700"></div>
      </div> */}
    </div>
  );
}

export default SamplePage;
