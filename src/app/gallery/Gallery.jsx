'use client';
import { useState } from 'react';
import carouselPics from '../assets/CaroucelPics';
import Photo from '../components/elements/Photo';

export const Gallery = () => {
  const [visible, setVisible] = useState(8);

  const handleCount = () => {
    setVisible((prev) => prev + 8);
  };

  return (
    <div className="text-2xl flex flex-col items-center justify-center m-6 gap-10">
      <div className="text-center">
        <h1>Gallery</h1>
        <p className="text-sm">Kumpulan foto penyemangat hidup</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
        {carouselPics &&
          carouselPics?.slice(0, visible).map((item, index) => (
            <Photo
              key={index}
              item={item}
            />
          ))}
      </div>

      {visible < carouselPics.length && (
        <button
          onClick={handleCount}
          className="btn btn-primary"
        >
          Lihat lebih banyak
        </button>
      )}
    </div>
  );
};
