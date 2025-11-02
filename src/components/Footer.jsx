// import React from "react";

// const Footer = () => {
//   return (
//     <footer className='bg-gradient-to-r from-slate-900 via-blue-900 to-teal-900 text-white py-2 mt-16 border-t border-blue-800/30'>
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-8">
//           <div className="flex justify-center items-center gap-3 mb-4">
//             <div className="w-8 h-8 bg-gradient-to-br from-white via-blue-100 to-teal-200 rounded-lg shadow-lg flex items-center justify-center border border-white/30">
//               <span className="text-lg font-black bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent">
//                 G
//               </span>
//             </div>
//             <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
//               GoSlate
//             </h3>
//           </div>

//           <p className="text-xl font-semibold text-blue-100 mb-3">
//             Start your day with GoSlate
//           </p>

//           <p className="text-lg text-blue-200 mb-6 max-w-md mx-auto leading-relaxed">
//             Every day's a clean slate. Let's get started. 🚀
//           </p>
//         </div>

//         <div className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mb-8"></div>

//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//           <p className="text-blue-300 font-medium">
//             &copy; {new Date().getFullYear()} GoSlate. All rights reserved.
//           </p>

//           <p className="text-blue-400 flex items-center gap-2">
//             <span>Designed & built with</span>
//             <span className="text-red-400 text-base">❤️</span>
//             <span>by</span>
//             <a
//               className="text-teal-300 hover:text-teal-200 font-semibold underline decoration-teal-400 hover:decoration-teal-300 transition-all duration-300 transform hover:scale-105"
//               href="https://www.linkedin.com/in/ayushman-pradhan-6a7a64328?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8N2LdNgKT3i0RaXKlX%2BlzA%3D%3D"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Ayushman Pradhan
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// };

// export default Footer;

import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 mt-20 py-14 pb-0">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">


        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Stats Section */}
        <div className=" gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Your AI companion will join you soon !
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-300 font-medium flex items-center justify-center gap-2">
              <span>Crafted with</span>
              <span className="text-red-500 text-lg animate-pulse">❤️</span>
              <span>by</span>
              <a
                className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300 flex items-center gap-1"
                href="https://www.linkedin.com/in/ayushman-pradhan-6a7a64328"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ayushman Pradhan
                <span className="text-lg">↗</span>
              </a>
            </p>
          </div>
          {/* Copyright */}
          

          <div className="flex items-center gap-3 mb-4 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
              G
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              GoSlate
            </h3>
          </div>

          {/* Creator Credit */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400 font-medium">
              &copy; {currentYear} <span className="font-bold text-gray-300">GoSlate</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30"></div>
    </footer>
  )
}

export default Footer
