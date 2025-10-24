import React from 'react'
import { useState, useEffect } from 'react'
const Navbar = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    setDeferredPrompt(null);
    setShowInstall(false);
  };
  if (!showInstall) return null;

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

        <div className="text-white font-semibold text-lg flex flex-col items-center">
          <span className="uppercase tracking-wide">{now.toLocaleDateString(undefined, { weekday: 'long' })}</span>
          <span className="text-2xl font-bold">
            {now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        </div>

        <div className="text-right">
          <div className="text-lg font-medium text-blue-100 mb-1">
            Start your day right!
          </div>
          <button onClick={handleInstallClick} className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            📱 Install GoSlate now
          </button>
        </div>


      </div>
    </nav>
  )
}

export default Navbar
