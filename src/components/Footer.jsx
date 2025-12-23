import React from "react";
import { FaFacebookF, FaInstagram, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import brandLogo from "../Images/e680bf3cc74543e41f37479c54ba51c5243f0826.jpg";
import appStore from "../Images/dc4b2ffca1101b9deff29af3a785dfba02788877.jpg";
import playStore from "../Images/7844144b561e00edee01e736c431c7d8af4eb2f0.jpg";
import payments from "../Images/abfde2069df20d065d424eb84b76f8b62e604c51.png";

const Footer = () => {
  return (
    <div className="w-full bg-transparent py-10 px-4">
      <footer className="max-w-350 mx-auto bg-white rounded-[30px] lg:rounded-[40px] px-5 sm:px-10 md:px-12.5 lg:px-20 pt-10 lg:pt-15 pb-5 text-[#4b5563] shadow-[0px_25.51px_107.13px_rgba(73,118,231,0.2)]">

        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">

          {/* BRAND */}
          <div className="max-w-full lg:max-w-105 text-center lg:text-left flex flex-col items-center lg:items-start">
            <img src={brandLogo} alt="Wellness Plus" className="w-50 lg:w-70 h-auto mb-4" />

            <p className="text-[13px] leading-[25.6px] text-[#3A3A3A] mb-6">
              To support individuals and families with wellness-focused products
              that promote healthier habits, self-care, and improved lifestyle choices.
            </p>

            <div className="flex gap-4 text-[18px] text-[#293960]">
              <FaFacebookF />
              <FaInstagram />
              <FaGooglePlusG />
              <FaXTwitter />
              <FaLinkedinIn />
            </div>
          </div>

          {/* INSTALL */}
          <div className="flex-[1.2] text-center lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="text-[18px] font-semibold mb-5">Install App</h3>

            <div className="flex gap-3 mb-8">
              <img src={appStore} className="w-23.75 cursor-pointer" alt="App Store" />
              <img src={playStore} className="w-23.75 cursor-pointer" alt="Google Play" />
            </div>

            <p className="text-[14px] font-black mb-3">Secured Payment Gateways</p>

            <img src={payments} className="h-6.25 w-auto" alt="Payments" />
          </div>
        </div>

        <div className="w-full border-t pt-5 text-center text-[12px]">
          © 2025 Wellness Plus. All rights reserved.
        </div>

      </footer>
    </div>
  );
};

export default Footer;
