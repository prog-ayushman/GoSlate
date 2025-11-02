// import React from 'react'
// import { useState, useEffect } from 'react'
// export default function Navbar() {
//   const [deferredPrompt, setDeferredPrompt] = useState(null)
//   const [showInstall, setShowInstall] = useState(false)
//   const [now, setNow] = useState(new Date())

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000)
//     return () => clearInterval(timer)
//   }, [])

//   useEffect(() => {
//     const handler = (e) => {
//       e.preventDefault()
//       setDeferredPrompt(e)
//       setShowInstall(true)
//     }
//     window.addEventListener('beforeinstallprompt', handler)
//     return () => window.removeEventListener('beforeinstallprompt', handler)
//   }, [])

//   const handleInstallClick = async () => {
//     if (!deferredPrompt) return
//     deferredPrompt.prompt()
//     await deferredPrompt.userChoice
//     setDeferredPrompt(null)
//     setShowInstall(false)
//   }

//   return (
//     <nav className='bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-6 shadow-2xl border-b border-blue-600/30'>
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <div className="logo font-bold text-3xl flex items-center gap-3 group">
//           {/* Logo and app name */}
//           <div className="relative transform group-hover:scale-110 transition-all duration-300">
//             <div className="w-12 h-12 bg-gradient-to-br from-white via-blue-100 to-teal-200 rounded-xl shadow-2xl flex items-center justify-center border-2 border-white/30 group-hover:shadow-blue-300/50">
//               <span className="text-2xl font-black bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent">
//                 G
//               </span>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//           <div className="flex flex-col">
//             <span className="bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
//               GoSlate
//             </span>
//             <span className="text-sm font-normal text-blue-200 -mt-1">
//               Reset. Replan. Rerise.
//             </span>
//           </div>
//         </div>
//         <div className="text-white font-semibold text-lg flex flex-col items-center">
//           <span className="uppercase tracking-wide">{now.toLocaleDateString(undefined, { weekday: 'long' })}</span>
//           <span className="text-2xl font-bold">
//             {now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//           </span>
//         </div>
//         <div className="text-right">
//           <div className="text-lg font-medium text-blue-100 mb-1">
//             Start your day right!
//           </div>
//           {showInstall && (
//             <button onClick={handleInstallClick} className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
//               📱 Install GoSlate now
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }
import React from 'react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstall, setShowInstall] = useState(false)
  const [now, setNow] = useState(new Date())
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
    setShowInstall(false)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50' 
        : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg border-b border-slate-700/30'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 group flex-shrink-0">
            <div className="relative">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-2xl transition-all duration-300 ${
                scrolled
                  ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 text-white shadow-2xl'
              }`}>
                G
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="hidden sm:flex flex-col">
              <span className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-200' : 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
              }`}>
                GoSlate
              </span>
              <span className={`text-xs font-semibold transition-colors duration-300 ${
                scrolled ? 'text-gray-500' : 'text-cyan-400'
              }`}>
                Reset. Replan. Rerise.
              </span>
            </div>
          </div>

          {/* Center - Date & Time Display */}
          <div className={`hidden md:flex flex-col items-center gap-1 transition-all duration-300 ${
            scrolled ? 'text-gray-300' : 'text-gray-200'
          }`}>
            {/* <div className="flex items-center gap-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                {now.toLocaleDateString(undefined, { weekday: 'short' })}
              </span>
              <span className="text-xs px-2 py-1 bg-gradient-to-r from-cyan-600/50 to-blue-600/50 rounded-full text-cyan-300 font-bold border border-cyan-500/50">
                {now.getDate()} {now.toLocaleDateString(undefined, { month: 'short' })}
              </span>
            </div> */}
            <div className={`text-3xl font-bold tracking-tight ${
              scrolled ? 'text-gray-200' : 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
            }`}>
              {now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>

          {/* Right Section - Tagline & Install Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex flex-col items-end gap-1">
              <p className={`text-sm font-semibold transition-colors duration-300 ${
                scrolled ? 'text-gray-400' : 'text-cyan-300'
              }`}>
                Start your day right
              </p>
              {showInstall && (
                <button 
                  onClick={handleInstallClick} 
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="text-lg">📱</span>
                  <span className="hidden lg:inline">Install</span>
                </button>
              )}
            </div>

            {/* Mobile Install Button */}
            {showInstall && (
              <button 
                onClick={handleInstallClick} 
                className="sm:hidden px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                📱 Install
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}


