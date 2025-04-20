import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EZ-Transcript',
  description: 'The most cost efficient AI-powered transcription and translation service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-4 px-6 bg-slate-800 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">TranscribeAI</h1>
            <nav>
              <ul className="flex gap-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                <li><a href="/pricing" className="hover:underline">Pricing</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4">{children}</main>
        <footer className="py-6 px-6 bg-slate-100">
          <div className="container mx-auto text-center text-slate-600">
            <p>© {new Date().getFullYear()} TranscribeAI. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}