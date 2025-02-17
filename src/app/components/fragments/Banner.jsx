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
          item={carouselPics[0]}
          width="w-96"
          height="h-96"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Get Started</button>
            <Link
              target="_blank"
              href={'https://forms.gle/DFMWHMyfTexC5EtN7'}
              className="btn btn-secondary"
            >
              Bergabung dengan kami
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
