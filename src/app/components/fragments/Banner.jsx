import { motion } from 'framer-motion';
import Link from 'next/link';
import carouselPics from '@/app/assets/CaroucelPics';
import Photo from '../elements/Photo';

export const Banner = () => {
  return (
    <motion.div
      transition={{ duration: 1.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Photo
          item={carouselPics[1]}
          width="w-96"
          height="h-96"
        />

        <div>
          <h1 className="text-5xl font-bold">SELAMAT DATANG DI WEBSITE KAMI</h1>
          <p className="py-6">Di sini kamu dapat menemukan informasi seputar Daisy JKT48 dan Daisynateur</p>
          <div className="flex gap-4">
            <Link
              href="/about-idol"
              className="btn btn-primary"
            >
              Mari Berkenalan Dengan Daisy
            </Link>
            <Link
              target="_blank"
              href={'https://forms.gle/DFMWHMyfTexC5EtN7'}
              className="btn btn-secondary"
            >
              Bergabung Dengan Kami
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
