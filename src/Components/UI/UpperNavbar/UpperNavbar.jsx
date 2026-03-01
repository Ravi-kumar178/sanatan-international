import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const UpperNavbar = () => {
  return (
    <header className="w-full bg-white/90 text-slate-600 backdrop-blur-md shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-1.5 flex flex-col md:flex-row md:items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-widest">
        {/* searchbar-toggler */}
        <div className="w-full flex items-center gap-2">
          <div className=" relative">
            <IoSearchOutline
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="px-9 py-1 rounded-full bg-white border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <button className="w-8 h-7 rounded-full flex items-center justify-center cursor-pointer text-[9px] font-black transition-colors bg-slate-100 text-slate-600 hover:bg-orange-100">
            EN
          </button>
          {/* toggle button */}
          <button></button>
        </div>
        {/* auth button div */}
        <div className="w-full flex items-center justify-end gap-4">
          <button className="text-xs font-bold tracking-wider cursor-pointer hover:text-orange-500 transition-colors">
            Sign In
          </button>
          <button className="text-xs font-bold tracking-wider cursor-pointer hover:text-orange-500 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default UpperNavbar;
