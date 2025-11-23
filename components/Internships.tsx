'use client'

import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { internships } from '@/data/internships'
import { FaBriefcase } from 'react-icons/fa'

export default function Internships() {
  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Internships" />

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <FaBriefcase className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {internship.position}
                    </h3>
                    <p className="text-primary text-lg font-medium">
                      {internship.company}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      {internship.period}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:ml-0">
                <ul className="space-y-3 mb-4">
                  {internship.description.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {internship.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

