import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} GoSlate. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-500">
          Designed & built with ❤️ by <a href="www.linkedin.com/in/ayushman-pradhan-6a7a64328">Ayushman Pradhan</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
