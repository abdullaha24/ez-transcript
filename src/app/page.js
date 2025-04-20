import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="text-center py-20">
        <Link href="/" className="mb-6 inline-block hover:underline">
          <h1 className="text-5xl font-bold">ez-transcript</h1>
        </Link>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          AI powered transcription. Cheap. Fast. Accurate. Secure.
        </p>
        <Link
          href="/transcribe"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Start Transcribing
        </Link>
      </section>

      <section className="py-16 w-full bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 font-bold text-xl mb-2">1. Upload</div>
              <p>Upload your audio or video file in any common format.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 font-bold text-xl mb-2">2. Transcribe</div>
              <p>Our advanced AI engine transcribes your content with high accuracy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 font-bold text-xl mb-2">3. Translate</div>
              <p>(Optional) Translate your transcription into multiple languages.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">High Accuracy</h3>
                <p>Powered by state-of-the-art speech recognition. Speaker recognition supported</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v4m1.042 9H20M3 13h5m0 0a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multiple Languages</h3>
                <p>Translate your content into over 100 languages.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure</h3>
                <p>Your files are processed securely and promptly deleted.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fast</h3>
                <p>Pro users can transcribe upto 20 files in parallel</p>
              </div>
            </div>
            <div className="flex items-start justfiy-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cheap</h3>
                <p>The most cost effective AI-based transcription service on the planet!</p>
              </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}