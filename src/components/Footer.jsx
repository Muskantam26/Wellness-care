import React from "react";
import { FaFacebookF, FaInstagram, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Import images
import Logo from "../Images/well.jpg"
import Appstore from "../Images/AppStore.jpg";
import GooglePlay from "../Images/7844144b561e00edee01e736c431c7d8af4eb2f0.jpg";
import Payments from "../Images/abfde2069df20d065d424eb84b76f8b62e604c51.png";

const Footer = () => {
  return (
    <div className="w-full bg-transparent py-10 px-4">
      <footer className="max-w-350 mx-auto bg-white rounded-[30px] lg:rounded-[40px] px-5 sm:px-10 md:px-12.5 lg:px-20 pt-10 lg:pt-15 pb-5 text-[#4b5563] shadow-[0px_25.51px_107.13px_rgba(73,118,231,0.2)]">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
          
          {/* BRAND */}
          <div className="max-w-full lg:max-w-105 text-center lg:text-left flex flex-col items-center lg:items-start">
            <img src={Logo} alt="Wellness Plus" className="w-50 lg:w-70 h-auto mb-4" />
            <p className="text-[13px] leading-[25.6px] text-[#3A3A3A] mb-6 font-['Plus_Jakarta_Sans']">
              To support individuals and families with wellness-focused products that promote healthier habits, self-care, and improved lifestyle choices.
            </p>
            <div className="flex gap-4 text-[18px] text-[#293960]">
              <FaFacebookF className="cursor-pointer hover:text-[#315730] transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-[#315730] transition-colors" />
              <FaGooglePlusG className="cursor-pointer hover:text-[#315730] transition-colors" />
              <FaXTwitter className="cursor-pointer hover:text-[#315730] transition-colors" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#315730] transition-colors" />
            </div>
          </div>

          {/* LINKS */}
          <div className="flex-3 grid grid-cols-2 md:grid-cols-3 gap-10 lg:flex lg:justify-evenly">
            <div className="col-span-1">
              <h3 className="text-[16px] lg:text-[18px] font-semibold text-[#1a1a1a] mb-5">Company</h3>
              <ul className="space-y-3 text-[13px] text-[#666]">
                <li className="hover:text-[#315730] cursor-pointer">About Us</li>
                <li className="hover:text-[#315730] cursor-pointer">Delivery Information</li>
                <li className="hover:text-[#315730] cursor-pointer">Privacy Policy</li>
                <li className="hover:text-[#315730] cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-[#315730] cursor-pointer">Contact Us</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-[16px] lg:text-[18px] font-semibold text-[#1a1a1a] mb-5">Account</h3>
              <ul className="space-y-3 text-[13px] text-[#666]">
                <li className="hover:text-[#315730] cursor-pointer">Sign In</li>
                <li className="hover:text-[#315730] cursor-pointer">View Cart</li>
                <li className="hover:text-[#315730] cursor-pointer">My Wishlist</li>
                <li className="hover:text-[#315730] cursor-pointer">Track My Order</li>
                <li className="hover:text-[#315730] cursor-pointer">Help Ticket</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-[16px] lg:text-[18px] font-semibold text-[#1a1a1a] mb-5">Popular</h3>
              <ul className="space-y-3 text-[13px] text-[#666] grid grid-cols-2 md:grid-cols-1 gap-x-4 md:gap-x-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i} className="hover:text-[#315730] cursor-pointer">Product Name</li>
                ))}
              </ul>
            </div>
          </div>

          {/* INSTALL */}
          <div className="flex-[1.2] text-center lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="text-[18px] font-semibold text-[#1a1a1a] mb-5">Install App</h3>
            <p className="text-[10px] text-[#253D4E] mb-4">From App Store or Google Play</p>
            <div className="flex gap-3 mb-8">
              <img src={Appstore} className="w-23.75 h-auto cursor-pointer" alt="App Store" />
              <img src={GooglePlay} className="w-23.75 h-auto cursor-pointer" alt="Google Play" />
            </div>
            <p className="text-[14px] font-black text-[#253D4E] mb-3 font-['Lato']">Secured Payment Gateways</p>
            <img src={Payments} className="h-6.25 w-auto" alt="Payments" />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="w-full border-t border-[#eee] pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] lg:text-[14px] text-[#666] text-center">
          <p>© 2025 Wellness Plus. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            <span className="hover:text-[#315730] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#315730] cursor-pointer">Terms of Use</span>
            <span className="hover:text-[#315730] cursor-pointer">Legal</span>
            <span className="hover:text-[#315730] cursor-pointer">Site Map</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
