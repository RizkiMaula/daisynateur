import { motion } from 'framer-motion';

export default ({ item, width = 'w-64', height = 'h-54' }) => {
  return (
    <motion.img
      transition={{ duration: 1.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      src={item}
      alt="gambar cakep"
      className={`rounded-lg shadow-lg ${width} ${height}`}
    />
  );
};
