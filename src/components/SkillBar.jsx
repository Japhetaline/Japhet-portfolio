import { motion } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-block px-4 py-2 bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-full border border-white/10 dark:border-gray-700/10 text-white dark:text-gray-800 text-sm md:text-base font-medium shadow-md hover:border-secondary dark:hover:border-secondary-light hover:text-secondary dark:hover:text-secondary-light transition-all cursor-default"
    >
      {skill}
    </motion.span>
  );
};

export default SkillBar;
