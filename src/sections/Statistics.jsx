import { motion } from 'framer-motion';
import { stats } from '../data/content';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Statistics() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={container}
      className="bg-surface-pure border-y border-outline-variant/30 py-10 overflow-hidden"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-wrap justify-center md:justify-between gap-10 items-center">
        {stats.map((stat, idx) => (
          <motion.div key={idx} variants={item} className="flex flex-col items-center gap-1 text-center">
            <span className="text-3xl font-extrabold text-on-background">{stat.value}</span>
            <span className="text-sm text-on-surface-variant font-bold uppercase tracking-widest">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
