import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const GraphicsCarousel = ({ designs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % designs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [designs.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % designs.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + designs.length) % designs.length);
  };

  return (
    <div className="relative">
      <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <img
              src={designs[currentIndex].image}
              alt={designs[currentIndex].title}
              className="w-full h-full object-contain bg-white/5 dark:bg-gray-800/5"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white dark:text-gray-800 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all shadow-lg z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white dark:text-gray-800 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all shadow-lg z-10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {designs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-secondary dark:bg-secondary-light'
                  : 'w-2 bg-white/50 dark:bg-gray-600/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
        {designs.map((design, index) => (
          <motion.button
            key={design.id}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative h-20 md:h-24 rounded-xl overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-secondary dark:border-secondary-light shadow-lg'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default GraphicsCarousel;

