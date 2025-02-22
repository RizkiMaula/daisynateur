import { motion } from 'framer-motion';
import Link from 'next/link';
import carouselPics from '@/app/assets/CaroucelPics';
import Photo from '../elements/Photo';
import banner from '../../assets/pics/banner.png';

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
          width="w-80 md:w-64"
          height="h-88 md:h-70"
        />
        <div>
          <h1 className="md:text-6xl text-4xl font-bold">SELAMAT DATANG DI WEBSITE KAMI</h1>
          <p className="py-6">Di sini kamu dapat menemukan informasi seputar Daisy JKT48 dan Daisynateur</p>
          <div className="flex gap-4">
            <Link
              href="/about-idol"
              className="btn btn-primary"
            >
              Tentang Daisy
            </Link>
            <Link
              target="_blank"
              href={'https://linktr.ee/daisynateur'}
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
