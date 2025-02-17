import { motion } from 'framer-motion';
import Link from 'next/link';
import Photo from '../elements/Photo';

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
      <div className="flex flex-col-reverse m-4 md:flex-row gap-4 items-center text-sm md:text-xl">
        <div className="flex flex-col gap-4 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et dolorem vel veniam earum similique velit nemo sed totam eos aliquam aspernatur, maiores quia reprehenderit molestias veritatis explicabo atque nesciunt
            perferendis voluptate.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis nemo fugit cumque, inventore a commodi accusamus dolore, nihil architecto illum corporis autem ipsam?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis nemo fugit cumque, inventore a commodi accusamus do...{' '}
            <Link
              href={'/about-idol'}
              className="hover:text-secondary"
            >
              View More
            </Link>
          </p>
        </div>
        <Photo
          item={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          width="w-96"
          height="h-96"
        />
      </div>
    </motion.div>
  );
};
