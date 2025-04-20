import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">Pricing Plans</h1>
      <p className="text-slate-600 mb-12 text-center max-w-2xl mx-auto">
        Choose the plan that works best for your transcription and translation needs.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
          <h2 className="text-xl font-bold mb-2">Free</h2>
          <div className="text-slate-600 mb-4">Perfect for occasional use</div>
          <div className="text-4xl font-bold mb-6">$0</div>
          
          <ul className="mb-8 flex-grow">
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>30 minutes per month</span>
            </li>
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Basic transcription</span>
            </li>
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>5 languages for translation</span>
            </li>
            <li className="flex items-center mb-3 text-slate-400">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>No batch processing</span>
            </li>
          </ul>
          
          <Link 
            href="/transcribe" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-6 rounded transition-colors"
          >
            Get Started
          </Link>
        </div>
        
        {/* Pro Plan */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-md flex flex-col relative border-2 border-blue-500">
          <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl text-sm font-medium">
            Popular
          </div>
          <h2 className="text-xl font-bold mb-2">Pro</h2>
          <div className="text-slate-600 mb-4">For regular users</div>
          <div className="text-4xl font-bold mb-6">$15<span className="text-lg font-normal">/mo</span></div>
          
          <ul className="mb-8 flex-grow">
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>5 hours per month</span>
            </li>
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced transcription</span>
            </li>
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>50+ languages for translation</span>
            </li>
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Basic batch processing (up to 3 files)</span>
            </li>
          </ul>
          
          <Link 
            href="/pricing/checkout?plan=pro" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-6 rounded transition-colors"
          >
            Subscribe
          </Link>
        </div>
        
        {/* Business Plan */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
          <h2 className="text-xl font-bold mb-2">Business</h2>
          <div className="text-slate-600 mb-4">For heavy users</div>
          <div className="text-4xl font-bold mb-6">$39<span className="text-lg font-normal">/mo</span></div>
          
          <ul className="mb-8 flex-grow">
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>20 hours per month</span>
            </li>
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium transcription</span>
            </li>
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100+ languages for translation</span>
            </li>
            <li className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced batch processing (unlimited)</span>
            </li>
          </ul>
          
          <Link 
            href="/pricing/checkout?plan=business" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-6 rounded transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </div>
      
      <div className="mt-12 bg-slate-50 p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Need a custom plan?</h2>
        <p className="mb-6">We offer custom enterprise solutions for teams with specific requirements.</p>
        <Link 
          href="/contact" 
          className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2 px-6 rounded transition-colors inline-block"
        >
          Contact Sales
        </Link>
      </div>
    </div>
  );
}