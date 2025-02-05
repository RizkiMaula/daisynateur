// import { Geist, Geist_Mono } from 'next/font/google';
import Footer from './components/fragments/Footer';
import Navbar from './components/fragments/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-theme="wireframe"
    >
      <head>
        <title>Fandom</title>
      </head>
      <body className="bg-slate-100 min-h-screen text-black flex flex-col">
        <Navbar>{children}</Navbar>
        <Footer />
      </body>
    </html>
  );
}
