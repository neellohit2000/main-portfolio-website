'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiGit, 
  SiGithub, 
  SiAmazon, 
  SiPython, 
  SiDjango,
  SiRedux,
  SiJest,
  SiCypress,
  SiFirebase
} from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'AWS', icon: SiAmazon, color: '#232F3E' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Jest', icon: SiJest, color: '#C21325' },
    { name: 'Cypress', icon: SiCypress, color: '#17202C' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Agile Methodologies',
    'Technical Leadership',
    'Code Review',
    'System Design',
    'Performance Optimization',
    'Security Best Practices',
    'Documentation',
    'Mentoring',
    'Project Management',
    'Communication',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Skills
        </motion.h2>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center space-y-3">
                  <skill.icon className="text-4xl" style={{ color: skill.color }} />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Professional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center">
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 