import React from "react";
import { CiSearch } from "react-icons/ci";
import DropdownDash from "./DropdownDash";
import star from "../../assets/star.png";
const   DashboardNavbar = () => {
  return (
    <div>
      <nav>
        <div className="flex items-center justify-between bg-white shadow-lg h-14">
          <div className="relative flex items-center ml-10">
            <span className="absolute left-3">
              <CiSearch size={20} className="text-gray-500" />
            </span>
            <input
              className="w-full py-1 pl-10 pr-3 text-lg border-2 border-solid rounded border-slate-400"
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center justify-center mr-10 gap-14">
            <div className="flex items-center justify-center gap-2 font-semibold">
              <span className="font-semibold">Total points</span> : 100{" "}
              <img src={star} alt="" className="w-5 h-5" />
            </div>

            <DropdownDash />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
