import React, { use, useState } from "react";
import logo from "../../../assets/logo.png";
import "./Navbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import NavbarDropdown from "./NavbarComponents/NavbarDropdown";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    {
      name: "The Hub",
      heading: "Start here for vision, accountability, and governance.",
      items: [
        { name: "About the Centre", link: "about" },
        { name: "Vision & Mission", link: "vision" },
        { name: "Founders & Advisors", link: "founders" },
        { name: "Financial Reports", link: "financial-reports" },
        { name: "Collabrations", link: "collabrations" },
      ],
    },
    {
      name: "Gurukul",
      heading: "Education, research, and ethical technology programs.",
      items: [
        { name: "The Foundation", link: "land-acquisition" },
        { name: "Gurukul Training", link: "gurukul-training" },
        { name: "Programs Overview", link: "courses" },
        { name: "Ayurveda Research", link: "ayurveda" },
        { name: "E-books Library", link: "ebooks" },
        { name: "Digital Scriptures", link: "library" },
      ],
    },
    {
      name: "Resources",
      heading: "Community services, resources, and volunteer efforts.",
      items: [
        { name: "Digital Welfare Suite", link: "apps" },
        { name: "Volunteer Program", link: "volunteer" },
        { name: "Events Calendar", link: "events" },
      ],
    },
    {
      name: "Newsroom",
      heading: "Stories, announcements, and official updates.",
      items: [
        { name: "Official Blog", link: "blog" },
        { name: "Media & Press", link: "media" },
        { name: "Impact Stories", link: "testimonials" },
        { name: "FAQs", link: "faqs" },
      ],
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();
  const navigateToMarketplace = () => {
    navigate("/marketplace");
  };
  const navigateToDonate = () => {
    navigate("/donate");
  };
  return (
    <header className="fixed top-15 md:top-9.5 w-full z-1000 transition-all duration-700 bg-transparent py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* logo part */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="bg-white/80 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg border border-white/60 overflow-hidden">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tighter leading-none font-ancient text-white">
              SANATAN
            </span>
            <span className="text-[8px] font-black tracking-[0.3em] uppercase text-white/80">
              INTERNATIONAL
            </span>
          </div>
        </div>
        {/* content part */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
              key={index}
              className="relative text-[10px] font-semibold text-black/80 hover:text-white cursor-pointer transition-colors duration-300"
            >
              <span className="uppercase">{item?.name}</span>
              <IoIosArrowDown className="inline-block h-3 w-3 ml-1" />
              {/* dropdown */}
              {activeDropdown === index && <NavbarDropdown items={item} />}
            </li>
          ))}
          <li className="w-px h-6 mx-2 bg-black/30"></li>
          <button
            onClick={navigateToMarketplace}
            className="text-[10px] cursor-pointer font-black uppercase tracking-widest px-4 py-2 rounded-full border transition-all text-black border-black/40 hover:border-white"
          >
            Marketplace
          </button>
          <button onClick={navigateToDonate} className="shimmer bg-orange-500 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 hover:shadow-lg transition-all">
            Donate
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
