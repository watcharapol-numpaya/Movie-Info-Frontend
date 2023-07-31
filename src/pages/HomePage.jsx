import React, { useState } from "react";

function HomePage() {
  const [banner, setBanner] = useState(
    "https://images7.alphacoders.com/112/1129455.jpg"
  );

  const [item, setItem] = useState([10]);

  const colors = ["green-400", "green-700", "red-400"];
  const numberOfElements = 10;
  const items = [
    {
      title: "Title 1",
      availableTickets: "10",
      distance: "5 Km",
      bgColor: "purple-400",
      innerBgColor: "pink-400",
    },
    {
      title: "Title 2",
      availableTickets: "20",
      distance: "15 Km",
      bgColor: "purple-400",
      innerBgColor: "pink-400",
    },
    {
      title: "Title 3",
      availableTickets: "15",
      distance: "8 Km",
      bgColor: "purple-400",
      innerBgColor: "pink-400",
    },
    {
      title: "Title 4",
      availableTickets: "7",
      distance: "12 Km",
      bgColor: "purple-400",
      innerBgColor: "pink-400",
    },
    {
      title: "Title 5",
      availableTickets: "18",
      distance: "20 Km",
      bgColor: "purple-400",
      innerBgColor: "pink-400",
    },
  ];
  const renderNewRelease = () => {
    return (
      <>
        <div className="w-70% bg-green-600 ">
          <div className="flex bg-orange-500 justify-between py-4 pr-9">
            <h1 className="font-bold text-2xl">New Release</h1>
            <h1 className="font-bold">View More</h1>
          </div>
          <div className="grid grid-cols-5 bg-red-700  gap-4  ">
            {[...Array(numberOfElements)].map((_, index) => {
              const colorIndex = index % colors.length;
              const colorClass = colors[colorIndex];
              return (
                <div
                  key={index}
                  className={`h-40 w-40 rounded-2xl bg-${colorClass}`}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="h-full w-full bg-gray-400 flex justify-center items-center flex-col">
        <div className="flex h-full w-full justify-center items-center">
          <div className="h-96 w-5/6 bg-blue-300">
            <img className="h-full w-full object-cover " src={banner}></img>
          </div>
        </div>

        <div className="h-full w-5/6 flex  bg-red-500">
          {/* New Release */}
          <div className="  w-70% bg-green-600 ">
            <div>
              <div className="flex bg-orange-500 justify-between py-4 pr-9">
                <h1 className="font-bold text-2xl">New Release</h1>
                <h1 className="font-bold">View More</h1>
              </div>
              <div className="grid grid-cols-5 bg-red-700  gap-4  ">
                {[...Array(numberOfElements)].map((_, index) => {
                  const colorIndex = index % colors.length;
                  const colorClass = colors[colorIndex];
                  return (
                    <div
                      key={index}
                      className={`h-40 w-40 rounded-2xl bg-${colorClass}`}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <div className="flex bg-orange-500 justify-between py-4 pr-9">
                <h1 className="font-bold text-2xl">New Release</h1>
                <h1 className="font-bold">View More</h1>
              </div>
              <div className="grid grid-cols-5 bg-red-700  gap-4  ">
                {[...Array(numberOfElements)].map((_, index) => {
                  const colorIndex = index % colors.length;
                  const colorClass = colors[colorIndex];
                  return (
                    <div
                      key={index}
                      className={`h-40 w-40 rounded-2xl bg-${colorClass}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-30% bg-green-300 pl-8">
            <div className="flex bg-orange-500  mt-16  ">
              <h1 className="font-bold text-xl text-yellow-400">
                CINEMAS NEAR YOU
              </h1>
            </div>

            {/* cinemas card */}
            <div className="space-y-4 my-8 pr-4 h-128 overflow-hidden hover:overflow-auto">
              {items.map((item, index) => (
                <div key={index} className={`bg-${item.bgColor} flex`}>
                  <div
                    className={`h-28 w-28 rounded-2xl bg-${item.innerBgColor}`}
                  ></div>
                  <div className="m-2 font-semibold">
                    <h1 className="font-bold">{item.title}</h1>
                    <p>{`Available Tickets: ${item.availableTickets}`}</p>
                    <p>{`${item.distance} Distance`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

{
  /* <div className="grid grid-cols-5 w-2/3">
<div className=" h-40 w-40 bg-green-400"></div>
<div className=" h-40 w-40 bg-green-700"></div>
<div className=" h-40 w-40 bg-green-400"></div>
<div className=" h-40 w-40 bg-green-700"></div>
<div className=" h-40 w-40 bg-green-400"></div>
<div className=" h-40 w-40 bg-green-700"></div>
<div className=" h-40 w-40 bg-green-400"></div>
<div className=" h-40 w-40 bg-green-700"></div>
<div className=" h-40 w-40 bg-green-400"></div>
<div className=" h-40 w-40 bg-green-700"></div>
<div className=" h-40 w-40 bg-green-400"></div>
<div className=" h-40 w-40 bg-green-700"></div>
<div className=" h-40 w-40 bg-green-400"></div>
<div className=" h-40 w-40 bg-green-700"></div>
<div className=" h-40 w-40 bg-green-400"></div>
<div className=" h-40 w-40 bg-green-700"></div>
</div> */
}
