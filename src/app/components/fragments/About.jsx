import { motion } from 'framer-motion';
import Link from 'next/link';
import Photo from '../elements/Photo';
import carouselPics from '@/app/assets/CaroucelPics';

export const About = () => {
  return (
    <motion.div
      animate={{ y: [100, 10, 0] }}
      transition={{ duration: 1.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="hero min-h-screen md:h-screen bg-base-100 flex flex-col gap-4 justify-center items-center px-10 "
    >
      <h1>About The Idol</h1>
      <div className="flex flex-col-reverse m-4 md:flex-row-reverse gap-4 items-center text-sm md:text-xl">
        <div className="flex flex-col gap-4 text-justify">
          <p>
            Seperti bunga Daisy, aku akan memancarkan kesegaran dan kebahagiaan. Daisy JKT48, atau Desy Natalia, adalah anggota generasi ke-11 JKT48 yang diperkenalkan pada 31 Oktober 2022. Lahir pada 16 Desember 2005, ia memiliki saudara
            kembar bernama Danella, menjadikan mereka pasangan kembar pertama dalam sejarah JKT48. Daisy dikenal dengan wajah imut dan senyum cerianya. Debut teaternya dimulai pada Agustus 2023 dalam setlist Cara Meminum Ramune. Bersama
            Danella, mereka sering tampil kompak, mencuri perhatian penggemar dengan chemistry unik dan penampilan energik di atas panggung.
          </p>
          <p>
            Sebagai salah satu anggota yang berkembang pesat, Daisy terus menunjukkan peningkatan dalam berbagai aspek, baik dalam vokal, tarian, maupun interaksinya dengan...{' '}
            <Link
              href={'/about-idol'}
              className="hover:text-secondary"
            >
              View More
            </Link>
          </p>
        </div>
        <Photo
          item={carouselPics[4]}
          width="w-[100rem]"
        />
      </div>
    </motion.div>
  );
};
