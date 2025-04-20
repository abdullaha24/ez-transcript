'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  // Placeholder for user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Placeholder for transcription history
  const transcriptions = [
    // We'll fetch these from Supabase later
  ];

  // Login handler - just for UI mockup
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      
      {!isLoggedIn ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4">Sign In to View Your Dashboard</h2>
          <p className="mb-6">Access your transcription history and account settings.</p>
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
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Account Summary</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Free Plan
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-md">
                <div className="text-slate-500 text-sm mb-1">Minutes Used</div>
                <div className="text-2xl font-bold">0 / 30</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <div className="text-slate-500 text-sm mb-1">Files Processed</div>
                <div className="text-2xl font-bold">0</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <div className="text-slate-500 text-sm mb-1">Plan</div>
                <div className="text-lg font-bold">Free</div>
                <Link href="/pricing" className="text-blue-600 text-sm hover:underline">
                  Upgrade
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Transcriptions</h2>
            
            {transcriptions.length > 0 ? (
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left py-3 px-4">File Name</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Duration</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* We'll map through transcriptions here later */}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-medium mb-2">No transcriptions yet</h3>
                <p className="text-slate-500 mb-6">Upload your first audio file to get started.</p>
                <Link 
                  href="/transcribe" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
                >
                  Start Transcribing
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}