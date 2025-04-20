import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link'; // Import the Link component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EZ-Transcript',
  description: 'Cost efficient and accurate AI-powered transcription and translation service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-4 px-6 bg-slate-800 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:underline">
              ez-transcript
            </Link>
            <nav>
              <ul className="flex gap-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/transcribe" className="hover:underline">Transcribe</Link></li>
                <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
                <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4">{children}</main>
        <footer className="py-6 px-6 bg-slate-100">
          <div className="container mx-auto text-center text-slate-600">
            <p>© {new Date().getFullYear()} saturn ventures. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}