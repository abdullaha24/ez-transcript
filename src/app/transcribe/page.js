'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TranscribePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // This is just a placeholder - we'll implement real auth later
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Transcribe Your Audio</h1>
      
      {!isLoggedIn ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4">Sign In to Start Transcribing</h2>
          <p className="mb-6">Create an account or sign in to upload and transcribe your files.</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={handleLoginClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={handleLoginClick}
              className="bg-slate-200 hover:bg-slate-300 font-semibold py-2 px-6 rounded transition-colors"
            >
              Create Account
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-lg mb-2">Drag and drop your audio file here</p>
            <p className="text-slate-500 mb-6">or click to browse your files</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors">
              Select File
            </button>
            <div className="mt-4 text-sm text-slate-500">
              Supported formats: MP3, MP4, WAV, M4A (Max 30 minutes for free accounts)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}