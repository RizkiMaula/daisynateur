'use client';
import carouselPics from '../assets/CaroucelPics';
import { AboutFragment } from '../components/fragments/AboutFragment';

export const Idol = () => {
  return (
    <AboutFragment
      title="Tentang Idol"
      pic={carouselPics[1]}
      paragraph1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis debitis distinctio commodi officia quisquam, molestias eligendi nostrum laudantium dolor provident, autem eaque tenetur adipisci incidunt unde ut
      repellendus dolore voluptas doloribus ad natus! Voluptates veritatis voluptas blanditiis odio beatae facilis dolorem odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam unde itaque repellendus illum
      commodi quia blanditiis iusto quam id magni, sapiente nobis hic cupiditate quo consequuntur ducimus consequatur. Maxime, facere asperiores."
      paragraph2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa unde!"
      paragraph3={
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa unde!'
      }
      paragraph4={
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa unde!'
      }
      paragraph5={
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid est, eveniet sint eaque eligendi ut nobis voluptate repellat at illum repellendus exercitationem saepe perspiciatis dolor beatae alias aut culpa cumque ipsa unde!'
      }
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
