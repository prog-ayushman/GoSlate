import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-slate-900 via-blue-900 to-teal-900 text-white py-2 mt-16 border-t border-blue-800/30'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-white via-blue-100 to-teal-200 rounded-lg shadow-lg flex items-center justify-center border border-white/30">
              <span className="text-lg font-black bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent">
                G
              </span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              GoSlate
            </h3>
          </div>

          <p className="text-xl font-semibold text-blue-100 mb-3">
            Start your day with GoSlate
          </p>

          <p className="text-lg text-blue-200 mb-6 max-w-md mx-auto leading-relaxed">
            Every day's a clean slate. Let's get started. 🚀
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-blue-300 font-medium">
            &copy; {new Date().getFullYear()} GoSlate. All rights reserved.
          </p>

          <p className="text-blue-400 flex items-center gap-2">
            <span>Designed & built with</span>
            <span className="text-red-400 text-base">❤️</span>
            <span>by</span>
            <a
              className="text-teal-300 hover:text-teal-200 font-semibold underline decoration-teal-400 hover:decoration-teal-300 transition-all duration-300 transform hover:scale-105"
              href="https://www.linkedin.com/in/ayushman-pradhan-6a7a64328?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8N2LdNgKT3i0RaXKlX%2BlzA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ayushman Pradhan
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;

