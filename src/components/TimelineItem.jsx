import { motion } from 'framer-motion';

const TimelineItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-12 md:pl-16"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-secondary-light dark:from-secondary-light dark:to-secondary" />
      
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="absolute left-0 top-0 w-10 h-10 bg-secondary dark:bg-secondary-light rounded-full flex items-center justify-center shadow-lg border-4 border-primary dark:border-primary-light"
      >
        <i className="fas fa-briefcase text-white text-sm"></i>
      </motion.div>

      {/* Content */}
      <div className="bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10 shadow-lg ml-4">
        <p className="text-sm text-secondary dark:text-secondary-light font-semibold mb-2">
          {item.duration}
        </p>
        <h4 className="text-xl font-bold mb-3 text-white dark:text-gray-800">
          {item.title}
        </h4>
        <p className="text-white/70 dark:text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;

