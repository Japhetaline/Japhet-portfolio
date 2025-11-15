import { motion } from 'framer-motion';
import { useState } from 'react';
import { contactInfo } from '../data/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission is handled by Formspree
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

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
      id="contact"
      className="min-h-screen py-2 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary dark:from-primary-light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-secondary dark:text-secondary-light">Me</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left - Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-secondary dark:text-secondary-light">
              Contact me here
            </h3>
            <p className="text-white/80 dark:text-gray-600 mb-8 text-lg">
              Have any Project? <br /> <br />
              Let's connect via my social media handles
            </p>

            <div className="space-y-6 mb-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-secondary/20 dark:bg-secondary-light/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-secondary dark:text-secondary-light"></i>
                </div>
                <div>
                  <p className="text-white/60 dark:text-gray-500 text-sm mb-1">Location:</p>
                  <p className="text-white dark:text-gray-800 font-medium">{contactInfo.location}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-secondary/20 dark:bg-secondary-light/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-secondary dark:text-secondary-light"></i>
                </div>
                <div>
                  <p className="text-white/60 dark:text-gray-500 text-sm mb-1">Email:</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white dark:text-gray-800 font-medium hover:text-secondary dark:hover:text-secondary-light transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-secondary/20 dark:bg-secondary-light/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user-graduate text-secondary dark:text-secondary-light"></i>
                </div>
                <div>
                  <p className="text-white/60 dark:text-gray-500 text-sm mb-1">Education:</p>
                  {contactInfo.education.map((edu, index) => (
                    <p key={index} className="text-white dark:text-gray-800 font-medium">
                      {edu}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-secondary/20 dark:bg-secondary-light/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-secondary dark:text-secondary-light"></i>
                </div>
                <div>
                  <p className="text-white/60 dark:text-gray-500 text-sm mb-1">Mobile Number:</p>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="text-white dark:text-gray-800 font-medium hover:text-secondary dark:hover:text-secondary-light transition-colors"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-secondary/20 dark:bg-secondary-light/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-globe-africa text-secondary dark:text-secondary-light"></i>
                </div>
                <div>
                  <p className="text-white/60 dark:text-gray-500 text-sm mb-1">Languages:</p>
                  <p className="text-white dark:text-gray-800 font-medium">{contactInfo.languages}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {Object.entries(contactInfo.socialLinks).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-secondary/20 dark:bg-secondary-light/20 rounded-xl flex items-center justify-center text-secondary dark:text-secondary-light hover:bg-secondary dark:hover:bg-secondary-light hover:text-white transition-all shadow-lg"
                >
                  <i className={`fab fa-${platform === 'whatsapp' ? 'whatsapp' : platform}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              action={contactInfo.formAction}
              method="POST"
              onSubmit={handleSubmit}
              className="bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:border-gray-700/10 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="YOUR NAME"
                    className="w-full px-4 py-3 bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl text-white dark:text-gray-800 placeholder-white/50 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-secondary-light transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="YOUR EMAIL"
                    className="w-full px-4 py-3 bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl text-white dark:text-gray-800 placeholder-white/50 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-secondary-light transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="ENTER SUBJECT"
                  className="w-full px-4 py-3 bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl text-white dark:text-gray-800 placeholder-white/50 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-secondary-light transition-all"
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  placeholder="Message here..."
                  className="w-full px-4 py-3 bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-xl text-white dark:text-gray-800 placeholder-white/50 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-secondary-light transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-secondary dark:bg-secondary-light text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <motion.i
                      className="fas fa-spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </motion.button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center text-white/60 dark:text-gray-500 text-sm">
              <p>
                Coded by <span className="text-secondary dark:text-secondary-light font-semibold">Japhetaline</span>
              </p>
              <p className="mt-2">Copyright © 2025 | All rights reserved</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

