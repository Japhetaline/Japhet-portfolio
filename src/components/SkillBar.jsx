import { motion } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10"
    >
      <div className="flex justify-between items-center mb-3">
        <p className="font-semibold text-white dark:text-gray-800">{skill.name}</p>
        <p className="text-sm text-white/60 dark:text-gray-500">Efficient</p>
      </div>
      <div className="w-full bg-white/10 dark:bg-gray-700/20 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-secondary to-secondary-light dark:from-secondary-light dark:to-secondary rounded-full shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;

