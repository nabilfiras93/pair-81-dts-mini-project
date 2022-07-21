import React from "react";
import KominfoLogo from "../assets/kominfo.png";

const Footer = () => {
  return (
    <footer className="w-full min-h-full mt-48 bg-emerald-600 flex justify-center">
      <div className="container w-4/5 p-4 flex gap-2 justify-between">
        <div className="grid grid-cols-2">
          <div>
            <img
              src={KominfoLogo}
              alt="Logo Kominfo"
              className="object-contain h-12 w-full"
            />
          </div>
          <div className="self-center text-white font-bold">DTS Mini Project</div>
        </div>
        <div className="self-center font-bold flex text-white gap-4">
          <div>Pair 81</div>
          <div>
            <ul>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
