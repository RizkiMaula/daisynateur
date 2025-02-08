import { motion } from 'framer-motion';

export const Banner = () => {
  return (
    <motion.div
      transition={{ duration: 1.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Bergabung dengan kami</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
