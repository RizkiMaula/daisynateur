'use client';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Banner } from './components/fragments/Banner';
import { About } from './components/fragments/About';
import { Gallery } from './components/fragments/Gallery';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center text-2xl">
      <Banner />
      <About />
      <Gallery />
    </div>
  );
}
