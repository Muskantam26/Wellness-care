import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import logo from "../Images/Wellnesslogo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userName = "Muskan";

  return (
    <nav className="relative flex items-center justify-between px-10 py-2.5 z-9999">

      {/* LOGO */}
      <div className="h-35 w-35 relative -left-10 -top-3 rounded-br-full flex items-center justify-center bg-white z-50 overflow-hidden">
        <img
          src={logo}
          alt="Wellness Plus"
          className="w-[65%] relative right-3 bottom-3"
        />
      </div>

      {/* DESKTOP NAV LINKS */}
      <ul className="hidden lg:flex gap-7.5 text-[15px] px-6.25 py-2.5 rounded-[50px] backdrop-blur-[3px]">
        {["Home", "About Us", "Contact Us", "All Products"].map((item) => (
          <li
            key={item}
            className="cursor-pointer font-medium text-[#4E4E4E]
            hover:bg-[#48bb78] hover:text-white
            hover:px-3.75 hover:py-1.25 hover:rounded-[10px]"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex gap-2.5">
        <Search size={20} />
        <ShoppingCart size={20} />
        <User size={20} />
      </div>

      <div className="flex items-center gap-4 lg:hidden z-50">
        {open ? (
          <X size={30} onClick={() => setOpen(false)} />
        ) : (
          <Menu size={30} color="black" onClick={() => setOpen(true)} />
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-9998"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%]
        bg-[rgba(223,209,157,0.65)] backdrop-blur-md
        z-9999 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="pt-10 px-6 flex flex-col gap-10">

          {/* SIDEBAR LOGO */}
          <div className="flex gap-2.5 items-center">
            <img src={logo} alt="Wellness Plus" className="w-20 rounded-2xl" />
            <h1 className="mt-6.5 text-xl font-bold">
              Welcome {userName}
            </h1>
          </div>

          <ul className="flex flex-col gap-6 text-[17px] text-[#ecf1ec]">
            {["Home", "About Us", "Contact Us", "All Products"].map((item) => (
              <li
                key={item}
                className="font-medium border-b border-[#315730]/30 pb-2 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex gap-5 items-center">
            <Search size={22} className="cursor-pointer text-white" />
            <ShoppingCart size={22} className="cursor-pointer text-white" />
            <User size={22} className="cursor-pointer text-white" />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
