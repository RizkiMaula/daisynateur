import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';

export const AboutFragment = ({ title, paragraph3, paragraph4, paragraph5, paragraph1, paragraph2, pic, sns, igLink, xLink, tiktokLink, vid, height = 'h-58', width = 'w-48', cover }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 1.2 },
      }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      className="flex flex-col items-center justify-center gap-4 min-h-screen p-3"
    >
      <h1 className="text-2xl">{title}</h1>
      <div className="text-justify p-4 gap-2">
        <div className="flex justify-center md:block">
          <Image
            src={pic}
            alt="coba"
            className={`md:float-left mr-4 mb-4 ${cover} rounded-lg shadow-lg ${width} ${height}`}
          />
          {/** nanti cover diisi object-cover */}
        </div>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
        <p>{paragraph5}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1>{sns}</h1>
        <div className="flex gap-2">
          <Link
            href={`https://instagram.com/${igLink}`}
            className="btn btn-secondary rounded-full hover:btn-accent hover:cursor-pointer"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href={`https://x.com/${xLink}`}
            className="btn btn-secondary rounded-full hover:btn-accent hover:cursor-pointer"
            target="_blank"
          >
            X (Twitter)
          </Link>
          <Link
            href={`https://tiktok.com/${tiktokLink}`}
            className="btn btn-secondary rounded-full hover:btn-accent hover:cursor-pointer"
            target="_blank"
          >
            Tiktok
          </Link>
        </div>
      </div>

      {/* Video */}
      {vid}
    </motion.div>
  );
};
