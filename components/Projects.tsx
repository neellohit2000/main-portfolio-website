'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const projectCategories = [
  {
    name: 'Full Stack',
    projects: [
      {
        title: 'Real Estate Marketplace',
        description: 'A comprehensive MERN stack real estate marketplace with property listings, authentication, and real-time search.',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Hostinger'],
        image: '/real estate marketplace.png',
        longDescription: `Built a comprehensive Real Estate Marketplace application using the MERN stack.\n\nKey features include:\n• Property listings with images and details\n• User authentication and authorization\n• Real-time search and filtering\n• Robust backend with Node.js and Express\n• Efficient data storage with MongoDB\n• Seamless front-end experience with React\n• Deployed on Hostinger for high availability`,
        githubLink: 'https://github.com/neellohit2000/react-project',
      },
      {
        title: 'Expense Tracker',
        description: 'A modern expense tracking application with secure authentication, real-time insights, and interactive dashboards.',
        technologies: ['Next.js', 'Neon', 'Clerk', 'Prisma', 'Tailwind CSS'],
        image: '/expense tracker.png',
        longDescription: `Developed a modern Expense Tracker Application using Neon, Next.js, Clerk, and Prisma to streamline personal and business finance management.\n\nKey features include:\n• Secure user authentication through Clerk with passwordless login and social sign-ins\n• Real-time, scalable data management using Neon (serverless PostgreSQL)\n• Efficient schema definition and querying with Prisma ORM\n• Responsive, user-friendly interface built with Next.js and Tailwind CSS\n• Interactive dashboards with real-time spending insights\n• Dynamic filters and budget alerts for actionable financial insights\n• Seamless deployment on Vercel for high performance and scalability`,
        githubLink: 'https://github.com/neellohit2000/expense-tracker',
      },
    ],
  },
  {
    name: 'Computer Vision',
    projects: [
      {
        title: 'Brain Tumor Segmentation',
        description: 'Advanced medical image analysis system using deep learning for precise brain tumor detection and segmentation.',
        technologies: ['PyTorch', 'U-Net', 'OpenCV', 'NumPy', 'Matplotlib'],
        image: '/brain-tumor-segmentation_Omf9jBU.png',
        longDescription: `Developed a sophisticated brain tumor segmentation system using deep learning techniques.\n\nKey features include:\n• Implemented U-Net architecture for precise tumor segmentation\n• Utilized PyTorch for model development and training\n• Integrated OpenCV for medical image preprocessing\n• Implemented data augmentation techniques for improved model robustness\n• Achieved high accuracy in tumor region identification\n• Developed visualization tools for medical professionals\n• Optimized for real-time processing of MRI scans`,
        githubLink: 'https://github.com/neellohit2000/diffussion-for-medical-images',
      },
    ],
  },
  {
    name: 'Gen AI',
    projects: [
      {
        title: 'RAG System',
        description: 'A Retrieval-Augmented Generation system that enhances LLM responses with relevant context from a knowledge base.',
        technologies: ['Pinecone', 'Haystack', 'Hugging Face', 'Python', 'LangChain'],
        image: '/RAG.png',
        longDescription: `Developed a sophisticated RAG (Retrieval-Augmented Generation) system that combines the power of large language models with efficient information retrieval.\n\nKey features include:\n• Vector database integration with Pinecone for efficient similarity search\n• Document processing and embedding generation using Hugging Face models\n• Haystack pipeline for streamlined document processing and retrieval\n• Custom knowledge base creation and management\n• Enhanced LLM responses with relevant context\n• Scalable architecture for handling large document collections`,
        githubLink: 'https://github.com/neellohit2000/RAG',
      },
      {
        title: 'Restaurant Q&A System',
        description: 'An intelligent Q&A system for pizza restaurants using local LLM integration with Ollama and LangChain.',
        technologies: ['Python 3.11', 'LangChain', 'Ollama', 'Streamlit', 'Llama2'],
        image: '/Local_llm_ollama3.2.png',
        longDescription: `Developed an intelligent Q&A system for pizza restaurants using local LLM technology.\n\nKey features include:\n• Local LLM integration using Ollama with Llama2 model\n• LangChain for efficient prompt management and LLM orchestration\n• Streamlit-based user-friendly web interface\n• Real-time question answering about menu items, ingredients, and policies\n• Offline operation capability with local model deployment\n• Custom prompt engineering for restaurant-specific queries`,
        githubLink: 'https://github.com/neellohit2000/Agent-ollama-langchain',
      },
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Projects
        </motion.h2>
        <div className="space-y-16">
          {projectCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category.name}</h3>
              {category.projects.length === 0 ? (
                <p className="text-gray-500 italic mb-8">No projects yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="bg-gray-50 rounded-lg overflow-hidden shadow-sm cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="h-48 bg-gray-200 relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="prose max-w-none">
                      <p className="text-gray-600 whitespace-pre-line">{selectedProject.longDescription}</p>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 