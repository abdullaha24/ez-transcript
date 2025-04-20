'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FileUploader from '../../components/FileUploader';

export default function TranscribePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [transcriptId, setTranscriptId] = useState(null);
  const [transcriptionStatus, setTranscriptionStatus] = useState('idle'); // Initial state
  const [transcriptionResult, setTranscriptionResult] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleUploadSuccess = (data) => {
    console.log('Upload successful, transcription initiated:', data);
    setTranscriptId(data.transcriptId);
    setTranscriptionStatus('processing'); // Update status to processing
    setUploadError(null);
  };

  const handleUploadError = (error) => {
    console.error('Upload error in TranscribePage:', error);
    setUploadError(error);
    setTranscriptionStatus('failed');
  };

  useEffect(() => {
    if (transcriptId && transcriptionStatus === 'processing') {
      const intervalId = setInterval(async () => {
        try {
          const response = await fetch(`/api/transcribe/status?transcriptId=${transcriptId}`);
          if (!response.ok) {
            console.error('Error fetching transcription status:', response.status);
            setTranscriptionStatus('failed');
            clearInterval(intervalId);
            return;
          }
          const data = await response.json();
          setTranscriptionStatus(data.status);
          if (data.status === 'completed') {
            setTranscriptionResult(data.transcript);
            clearInterval(intervalId);
          } else if (data.status === 'failed') {
            console.error('Transcription failed:', data.error);
            setTranscriptionStatus('failed');
            clearInterval(intervalId);
          }
        } catch (error) {
          console.error('Error during polling:', error);
          setTranscriptionStatus('failed');
          clearInterval(intervalId);
        }
      }, 5000); // Poll every 5 seconds (adjust as needed)

      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [transcriptId, transcriptionStatus]);

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
          {transcriptId ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Transcription Status: {transcriptionStatus}</h2>
              {transcriptionStatus === 'completed' && transcriptionResult && (
                <div className="mt-4 p-4 border rounded-md bg-slate-100">
                  <h3 className="text-lg font-semibold mb-2">Transcription:</h3>
                  <pre className="whitespace-pre-wrap">{transcriptionResult?.text}</pre>
                  {transcriptionResult?.words && transcriptionResult.words.length > 0 && (
                    <div className="mt-2 text-sm text-gray-600">
                      (Speaker labels and other details might be present in the full JSON response)
                    </div>
                  )}
                  <button
                    onClick={() => console.log('Full Transcription Result:', transcriptionResult)}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                  >
                    View Full JSON Response
                  </button>
                </div>
              )}
              {transcriptionStatus === 'failed' && uploadError && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-400 rounded-md">
                  Error: {uploadError}
                </div>
              )}
              {transcriptionStatus === 'processing' && (
                <p>Your audio is being processed. Please wait...</p>
              )}
            </div>
          ) : (
            <FileUploader
              onUploadSuccess={handleUploadSuccess}
              onUploadError={handleUploadError}
            />
          )}
        </div>
      )}
    </div>
  );
}