'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionTitle from './SectionTitle'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-3"
            >
              {/* Project Thumbnail */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-gray-800 overflow-hidden">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                      quality={90}
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>
                    {/* Primary color overlay on hover */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-7xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors duration-300">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-white text-base font-semibold flex items-center gap-2 bg-primary/30 backdrop-blur-md px-5 py-3 rounded-lg border-2 border-primary/60 shadow-lg shadow-primary/20"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>View Project</span>
                  </motion.div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
                {project.period && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md border border-primary/30">
                      {project.period}
                    </span>
                  </div>
                )}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700 hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links - Improved with buttons */}
                <div className="flex justify-end gap-3 pt-2 border-t border-gray-800">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-primary text-gray-300 hover:text-white rounded-lg transition-all text-sm font-medium border border-gray-700 hover:border-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="GitHub repository"
                    >
                      <FaGithub size={16} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

