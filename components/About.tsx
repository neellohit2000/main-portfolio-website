'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm currently a student at the University at Buffalo, with a passion for both machine learning and full-stack development. I've gained hands-on experience in the fintech sector, where I've worked on projects involving AI/ML models and robust web applications.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always eager to expand my knowledge and skills, particularly by working on real-life projects that push the boundaries of technology. Whether it's optimizing algorithms, designing user-friendly interfaces, or building scalable systems, I thrive on solving complex challenges.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm excited to collaborate with like-minded professionals and contribute to impactful innovations in the tech and finance space.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">University at Buffalo, SUNY</h4>
                    <p className="text-blue-600">Master's in Computer Science and Engineering</p>
                    <p className="text-gray-600">2024 - 2026</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">SRM University</h4>
                    <p className="text-blue-600">BTech in Computer Science</p>
                    <p className="text-gray-600">2018 - 2022</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Areas of Focus</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Full Stack Development
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    FinTech
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    AI/ML Models
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Web Applications
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    System Design
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 