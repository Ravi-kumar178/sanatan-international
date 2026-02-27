import React from "react";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return(
    <header className="fixed top-[60px] md:top-[38px] w-full z-[1000] transition-all duration-700 bg-transparent py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* logo part */}
            <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-white/80 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg border border-white/60 overflow-hidden">
                    <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg tracking-tighter leading-none font-ancient text-white">SANATAN</span>
                    <span className="text-[8px] font-black tracking-[0.3em] uppercase text-white/80">INTERNATIONAL</span>
                </div>
            </div>
            {/* content part */}
            <div className="hidden lg:flex items-center gap-8">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </header>
  );
};

export default Navbar;
