'use client';
import { AboutFragment } from '../components/fragments/AboutFragment';
import foto1 from '../assets/pics/foto1.jpg';

export const Idol = () => {
  return (
    <AboutFragment
      title="Tentang Idol"
      pic={foto1}
      paragraph1="Seperti bunga Daisy, aku akan memancarkan kesegaran dan kebahagiaan. Daisy JKT48, atau Desy Natalia, adalah anggota generasi ke-11 JKT48 yang diperkenalkan pada 31 Oktober 2022. Lahir pada 16 Desember 2005, ia memiliki saudara kembar bernama Danella, menjadikan mereka pasangan kembar pertama dalam sejarah JKT48. Daisy dikenal dengan wajah imut dan senyum cerianya. Debut teaternya dimulai pada Agustus 2023 dalam setlist Cara Meminum Ramune. Bersama Danella, mereka sering tampil kompak, mencuri perhatian penggemar dengan chemistry unik dan penampilan energik di atas panggung."
      // paragraph2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa unde!"
      // paragraph3={
      //   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa unde!'
      // }
      // paragraph4={
      //   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa unde!'
      // }
      // paragraph5={
      //   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa unde!'
      // }
      igLink={'jkt48.daisy'}
      xLink={'Daisy_JKT48'}
      tiktokLink={'daisyjkt48'}
      vid={
        <iframe
          className="w-full md:w-1/2 aspect-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p250QlcRi28?si=lnBHnQPXRiylh3XW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      }
    />
  );
};
