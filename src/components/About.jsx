import { motion } from 'framer-motion';
import { about } from '../data/about';
import { skills } from '../data/skills';
import { timeline } from '../data/timeline';
import { contactInfo } from '../data/contact';
import SkillBar from './SkillBar';
import TimelineItem from './TimelineItem';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-primary/95 dark:from-primary-light dark:to-primary-light/95"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-secondary dark:text-secondary-light">me</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left - Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-secondary dark:text-secondary-light">
              Information About Me
            </h3>
            <p className="text-white/80 dark:text-gray-600 leading-relaxed mb-6 text-lg">
              {about.bio}
            </p>
            <motion.a
              href={contactInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-secondary dark:bg-secondary-light text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Download CV</span>
              <i className="fas fa-download"></i>
            </motion.a>
          </motion.div>

          {/* Right - Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {about.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10 shadow-lg"
              >
                <p className="text-4xl md:text-5xl font-bold text-secondary dark:text-secondary-light mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 dark:text-gray-500 text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 mb-16 sm:mb-16"
        >
           <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-secondary dark:text-secondary-light">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 mb-0 sm:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-secondary dark:text-secondary-light">Timeline</span>
          </h2>
          <div className="space-y-6 mt-8">
            {timeline.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

