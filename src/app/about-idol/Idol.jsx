'use client';
import { AboutFragment } from '../components/fragments/AboutFragment';
import foto1 from '../assets/pics/foto1.jpg';

export const Idol = () => {
  return (
    <AboutFragment
      title="Tentang Idol"
      pic={foto1}
      paragraph1="Seperti bunga Daisy, aku akan memancarkan kesegaran dan kebahagiaan. Daisy JKT48, atau Desy Natalia, adalah anggota generasi ke-11 JKT48 yang diperkenalkan pada 31 Oktober 2022. Lahir pada 16 Desember 2005, ia memiliki saudara kembar bernama Danella, menjadikan mereka pasangan kembar pertama dalam sejarah JKT48. Daisy dikenal dengan wajah imut dan senyum cerianya. Debut teaternya dimulai pada Agustus 2023 dalam setlist Cara Meminum Ramune. Bersama Danella, mereka sering tampil kompak, mencuri perhatian penggemar dengan chemistry unik dan penampilan energik di atas panggung."
      paragraph2="Sebagai salah satu anggota yang berkembang pesat, Daisy terus menunjukkan peningkatan dalam berbagai aspek, baik dalam vokal, tarian, maupun interaksinya dengan penggemar. Debut teaternya dalam setlist Cara Meminum Ramune menjadi bukti bahwa ia mampu menampilkan pesona dan kemampuannya dengan baik. Bersama kembarannya, Danella, mereka menciptakan kombinasi yang unik dalam grup, menghadirkan momen-momen spesial yang selalu ditunggu-tunggu oleh para penggemar. Chemistry yang kuat di antara mereka memberikan warna tersendiri di setiap penampilan.
"
      paragraph3={'Untuk mendukung kegiatan dari Daisy, kalian bisa mendukungnya dengan mengikuti akun media sosial resmi kami! Dapatkan update terbaru dan keseruannya di sini:'}
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
