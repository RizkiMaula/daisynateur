import { motion } from 'framer-motion';
import Image from 'next/image';

export default ({ item, width = 'w-64', height = 'h-54' }) => {
  return (
    <motion.div
      transition={{ duration: 1.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <Image
        src={item}
        alt="gambar cakep"
        className={`rounded-lg shadow-lg ${width} ${height}`}
      />
    </motion.div>
  );
};
