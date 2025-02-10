import { motion } from 'framer-motion';
import carouselPics from '../../assets/CaroucelPics';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const index = parseInt(hash.replace('item', ''), 10);
      if (!isNaN(index)) {
        setActiveIndex(index - 1);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + carouselPics.length) % carouselPics.length;
    window.location.hash = `item${newIndex + 1}`;
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % carouselPics.length;
    window.location.hash = `item${newIndex + 1}`;
  };

  return (
    <motion.div
      animate={{ y: [100, 10, 0] }}
      transition={{ duration: 1.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="hero min-h-screen bg-base-200 flex flex-col gap-4 px-0 md:px-10 py-10"
    >
      <h1>Gallery</h1>
      <div className="carousel w-full rounded-box">
        {carouselPics
          .filter((_, index) => index <= 7)
          .map((pic, index) => (
            <div
              key={index}
              id={`item${index + 1}`}
              className="carousel-item w-1/2"
            >
              <img
                src={pic}
                className="w-full"
              />
            </div>
          ))}
      </div>
      {/* slider */}
      <div className="absolute left-5 right-5 bottom-[32rem] hidden md:flex transform justify-between">
        <a
          onClick={handlePrev}
          className="btn btn-circle btn-accent"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <a
          onClick={handleNext}
          className="btn btn-circle btn-accent"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {carouselPics
          .filter((_, index) => index < 4)
          .map((_, index) => (
            <a
              key={index}
              href={`#item${index * 2 + 1}`}
              className="btn btn-xs"
            >
              {index + 1}
            </a>
          ))}
      </div>
      <Link
        className="btn btn-primary"
        href={'/gallery'}
      >
        Lihat lebih banyak
      </Link>
    </motion.div>
  );
};
