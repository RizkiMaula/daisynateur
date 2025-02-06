import { motion } from 'framer-motion';
import carouselPics from '../assets/CaroucelPics';
import Link from 'next/link';

export const Idol = () => {
  console.log(carouselPics[1]);
  return (
    <div className=" flex flex-col items-center justify-center gap-4 min-h-screen p-3">
      <h1 className="text-2xl">Tentang Idol</h1>
      <div className="text-justify p-4 gap-2">
        <div className="flex justify-center md:block">
          <img
            src={carouselPics[1]}
            alt="coba"
            className="md:float-left mr-4 mb-4 w-48 h-48 object-cover rounded-lg shadow-lg"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis debitis distinctio commodi officia quisquam, molestias eligendi nostrum laudantium dolor provident, autem eaque tenetur adipisci incidunt unde ut
          repellendus dolore voluptas doloribus ad natus! Voluptates veritatis voluptas blanditiis odio beatae facilis dolorem odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam unde itaque repellendus illum
          commodi quia blanditiis iusto quam id magni, sapiente nobis hic cupiditate quo consequuntur ducimus consequatur. Maxime, facere asperiores.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa
          unde!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa
          unde!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa
          unde!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa
          unde!
        </p>
      </div>
      <div className="flex gap-2">
        <Link
          href={'https://instagram.com/jkt48.daisy'}
          className="btn btn-secondary rounded-full hover:btn-accent hover:cursor-pointer"
          target="_blank"
        >
          Instagram
        </Link>
        <Link
          href={'https://x.com/Daisy_JKT48'}
          className="btn btn-secondary rounded-full hover:btn-accent hover:cursor-pointer"
          target="_blank"
        >
          X
        </Link>
        <Link
          href={'https://tiktok.com/daisyjkt48'}
          className="btn btn-secondary rounded-full hover:btn-accent hover:cursor-pointer"
          target="_blank"
        >
          Tiktok
        </Link>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/p250QlcRi28?si=lnBHnQPXRiylh3XW"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
