import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent flex items-end justify-center p-6"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
            <div className="flex gap-4 justify-center">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-secondary dark:bg-secondary-light rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <i className="fas fa-link"></i>
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <i className="fab fa-github"></i>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        className="absolute inset-0 bg-secondary dark:bg-secondary-light blur-2xl -z-10"
      />
    </motion.div>
  );
};

export default ProjectCard;

