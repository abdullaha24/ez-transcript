import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { supabase } from '../lib/supabase';

const ACCEPTED_FILE_TYPES = {
  'audio/mpeg': ['.mp3'],
  'audio/wav': ['.wav'],
  'audio/m4a': ['.m4a'],
  'audio/mp4': ['.mp4'],
  'video/mp4': ['.mp4'],
  'video/mpeg': ['.mpeg', '.mpg'],
  'video/webm': ['.webm'],
};

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

const FileUploader = ({ onUploadSuccess, onUploadError }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileError, setFileError] = useState(null);

const onDrop = useCallback(async (acceptedFiles) => {
  console.log('file dropped or selected...', acceptedFiles)
  // Reset states
  setFileError(null);
  setUploading(true);
  setUploadProgress(0);

  try {
    const file = acceptedFiles[0];
    console.log('Selected file object: ', file)

    if (!file) {
      throw new Error('No file selected');
    }

    if (file.size > MAX_FILE_SIZE) {
      throw new Error('File size exceeds 100MB limit');
    }

    // Create a unique file name
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `uploads/${fileName}`;
    console.log('File path for upload: ', filePath)

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('media')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        onUploadProgress: (progress) => {
          const percent = (progress.loaded / progress.total) * 100;
          setUploadProgress(Math.round(percent));
          console.log('Upload progress: ', percent) 
        },
        public:true,
      });

    if (error) {
      console.error('Supabase upload error...', error)
      throw error
    }

    console.log('File path used for public URL:', filePath);
    // Get the public URL
    const { data: urlData } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);
    console.log('Public URL from Supabase:', urlData);

    const fileUrl = urlData?.publicUrl; // Extract the public URL

    console.log('public file url: ', fileUrl)

    // Call our backend API to initiate transcription
    const response = await fetch('/api/transcribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileUrl }), // Send the file URL in the request body
    });
    console.log('response from /api/transcribe:', response)

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to initiate transcription');
    }

    const transcriptionResponse = await response.json();
    console.log('Transcription initiated:', transcriptionResponse);

    // Call success callback with the transcription response (you might want to modify this later)
    onUploadSuccess(transcriptionResponse);

  } catch (error) {
    console.error('Error uploading or initiating transcription:', error);
    setFileError(error.message);
    onUploadError && onUploadError(error.message);
  } finally {
    setUploading(false);
  }
  }, [onUploadSuccess, onUploadError]);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: ACCEPTED_FILE_TYPES,
    maxSize: MAX_FILE_SIZE,
    multiple: false
  });

  // Handle file rejections
  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return errors.map(e => e.message).join(', ');
  });

  return (
    <div className="w-full max-w-xl mx-auto">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed p-8 rounded-lg text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
        }`}
      >
        <input {...getInputProps()} />
        
        {uploading ? (
          <div className="space-y-3">
            <p className="text-gray-700">Uploading file...</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{uploadProgress}%</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center space-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-lg font-medium text-gray-700">
                {isDragActive ? 'Drop the file here' : 'Drag & drop a file here, or click to select'}
              </p>
              <p className="text-sm text-gray-500">
                Support for MP3, WAV, M4A, MP4, MPEG, and WEBM (max 100MB)
              </p>
            </div>
          </>
        )}
      </div>

      {(fileError || fileRejectionItems.length > 0) && (
        <div className="mt-3 p-3 bg-red-50 text-red-600 rounded-md">
          {fileError || fileRejectionItems.join(', ')}
        </div>
      )}
    </div>
  );
};

export default FileUploader;