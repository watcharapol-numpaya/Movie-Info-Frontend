import React from "react";
import StarIcon from "@mui/icons-material/Star";

function SearchMovieCard({movie}) {
//ดึงข้อมูลที่นี่โดยรับ keyword เข้ามาในนี้

  
  return (
    <>
      <div className="bg-white text-black  w-80 rounded-lg overflow-hidden  shadow-2xl">
        <div className="flex gap-1 border-b hover:bg-slate-200 w-full p-2 cursor-pointer">
          <div className="w-1/6 ">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"></img>
          </div>
          <div className="w-5/6 ">
            <p className="font-medium   truncate ">
              Guardians of the Galaxy Guardians of the Galaxy Guardians of the
              Galaxy Guardians of the Galaxy
            </p>
            <div className="flex items-center">
              <StarIcon className="text-yellow-500" fontSize="small" />
              <span>1.1</span>
            </div>
          </div>
        </div>

        <div className="flex gap-1 border-b hover:bg-slate-200 w-full p-2 cursor-pointer">
          <div className="w-1/6 ">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/qayga07ICNDswm0cMJ8P3VwklFZ.jpg"></img>
          </div>
          <p className="font-medium">Resident Evil: Death Island</p>
        </div>
        <div className="flex gap-1 border-b hover:bg-slate-200 w-full p-2 cursor-pointer">
          <div className="w-1/6 ">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/gPbM0MK8CP8A174rmUwGsADNYKD.jpg"></img>
          </div>
          <p className="font-medium">Transformers: Rise of the Beasts</p>
        </div>
        <div className="text-center py-1 cursor-pointer">
          <p>View all results</p>
        </div>
      </div>
    </>
  );
}

export default SearchMovieCard;
