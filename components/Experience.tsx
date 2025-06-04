'use client';

import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'Fidelity Information Services',
      role: 'Software Engineer',
      period: 'Feb 2022 - Aug 2024',
      icon: FaCode,
      achievements: [
        'Worked effectively in a cross-functional team of 12 members within the fraud team, collaborating closely with senior engineers on both back-end and front-end development to design and implement new features.',
        'Utilized a diverse technology stack, including Angular for frontend development, Java and Spring Boot for backend services, and Jasper Reports for data visualization, resulting in a 30% increase in efficiency.',
        'Created and integrated robust backend APIs and microservices, managing over 500,000 HTTP requests and responses daily to support various features using Angular.',
        'Engineered RESTful services that reduced API response time by 20%, ensuring seamless integration with frontend components and improving overall application performance and user experience.',
        'Leveraged tools such as Git for version control, Jenkins for continuous integration (reducing deployment time by 15%), and JIRA for project management to streamline development processes.',
        'Designed and optimized database schemas in MySQL to ensure efficient data storage and retrieval efficiency by 10%, supporting complex relationships and storing large amounts of transactional data.',
        'Utilized Azure cloud services to manage fraud rule data, optimized machine learning models to predict effective fraud detection rules by identifying frequent vulnerabilities, resulting in a 10% improvement in model accuracy.'
      ]
    },
    {
      company: 'High Radius',
      role: 'Software Engineer',
      period: 'Aug 2021 - Jan 2022',
      icon: FaRobot,
      achievements: [
        'Collaborated with a team of eight in the development of an OCR model dedicated to extracting remittance information from bills exchanged between customers and vendors.',
        'Used transfer learning with convolutional neural networks such as VGG-16 and ResNet-16 to achieve 92% accuracy in separating remittance images into three types-handwritten, rotated, and blurry images.',
        'Designed and deployed an NLP pipeline using libraries like SpaCy and Hugging Face Transformers to process extracted OCR text. The pipeline achieved 95% accuracy in extracting key remittance details such as vendor names, amounts, and dates, even from noisy and low-quality OCR outputs.',
        'Implemented a domain-specific NER model using SpaCy to categorize and tag extracted OCR data, identifying entities like invoice IDs, payment dates, and vendor names. This improved the categorization accuracy by 18%, enabling efficient downstream processing and reducing manual intervention.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <exp.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                      <p className="text-blue-600 font-medium">{exp.role}</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-gray-600 leading-relaxed"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 