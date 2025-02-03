'use client';
import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Page() {
  useEffect(() => {
    // Load the Twitter widgets script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-2xl p-3">
      <h1 className="text-3xl text-primary">Halaman Utama</h1>
      <p>Ini halaman utama</p>
      <blockquote className="twitter-tweet">
        &mdash; Habis Nonton Film (@HabisNontonFilm) <a href="https://twitter.com/HabisNontonFilm/status/1884911098853490921?ref_src=twsrc%5Etfw">January 30, 2025</a>
      </blockquote>
      <div
        className="w-full max-w-2xl overflow-y-auto border border-gray-300 rounded-lg shadow-lg"
        style={{ height: '500px' }}
      >
        <a
          className="twitter-timeline"
          href="https://twitter.com/PancongKaramel?ref_src=twsrc%5Etfw"
          data-height="500"
          data-chrome="noheader nofooter noborders"
        >
          Tweets by @PancongKaramel
        </a>
      </div>
    </div>
  );
}
