import { motion } from 'framer-motion';
import { about } from '../data/about';
import { contactInfo } from '../data/contact';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary-light/20 rounded-3xl blur-3xl"
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-secondary/20 dark:border-secondary-light/20"
              >
                <img
                  src="/img/Japhet3.jpg"
                  alt="Japhet"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary dark:bg-secondary-light rounded-2xl opacity-20 blur-xl"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-secondary dark:text-secondary-light">
                {about.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2 mb-6"
            >
              {about.roles.map((role, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-xl md:text-2xl text-white/80 dark:text-gray-600"
                >
                  {role}
                </motion.p>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-white/70 dark:text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {about.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.a
                href={contactInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary dark:bg-secondary-light text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>Download / View CV</span>
                <motion.i
                  className="fas fa-download"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

