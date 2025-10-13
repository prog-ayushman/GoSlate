import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-6 shadow-2xl border-b border-blue-600/30'>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="logo font-bold text-3xl flex items-center gap-3 group">
          <div className="relative transform group-hover:scale-110 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-white via-blue-100 to-teal-200 rounded-xl shadow-2xl flex items-center justify-center border-2 border-white/30 group-hover:shadow-blue-300/50">
              <span className="text-2xl font-black bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent">
                G
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="flex flex-col">
            <span className="bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
              GoSlate
            </span>
            <span className="text-sm font-normal text-blue-200 -mt-1">
              Reset. Replan. Rerise.
            </span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-medium text-blue-100 mb-1">
            Start your day right!
          </div>
          <div className="text-sm text-blue-300 font-light">
            ✨ Every moment is a fresh beginning
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
