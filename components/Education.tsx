'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'
import SectionTitle from './SectionTitle'
import { education } from '@/data/education'

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Education" />

        <div className="relative" ref={containerRef}>
          {/* Animated Timeline Line */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          />

          {/* Education Items */}
          <div className="space-y-8 md:space-y-16">
            {education.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ${
                      isEven ? 'md:pr-8' : 'md:pl-8'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/30 group relative overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {/* Animated background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Header with Year and CGPA */}
                        <motion.div
                          className="flex items-start justify-between mb-4 flex-wrap gap-2"
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                        >
                          <motion.span
                            className="px-4 py-1.5 bg-primary/20 text-primary text-sm font-bold rounded-full border border-primary/30"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item.year}
                          </motion.span>
                          {item.cgpa && (
                            <motion.span
                              className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20"
                              whileHover={{ scale: 1.05 }}
                            >
                              {item.cgpa}
                            </motion.span>
                          )}
                        </motion.div>

                        {/* Degree Title */}
                        <motion.div
                          className="flex items-start gap-3 mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                        >
                          <motion.div
                            className="mt-1 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <FaGraduationCap className="text-primary" size={18} />
                          </motion.div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors flex-1">
                            {item.degree}
                          </h3>
                        </motion.div>

                        {/* Institution */}
                        <motion.p
                          className="text-primary text-base font-semibold mb-2 ml-11"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.6 }}
                        >
                          {item.institution}
                        </motion.p>

                        {/* Location */}
                        <motion.div
                          className="flex items-center gap-2 text-gray-400 text-sm mb-4 ml-11"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.7 }}
                        >
                          <FaMapMarkerAlt size={12} />
                          <span>{item.location}</span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          className="text-gray-300 text-sm mb-4 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.8 }}
                        >
                          {item.description}
                        </motion.p>

                        {/* Tags with staggered animation */}
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.9 }}
                        >
                          {item.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700 hover:border-primary/50 hover:text-primary transition-colors"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              transition={{
                                delay: index * 0.2 + 0.9 + tagIndex * 0.1,
                                type: 'spring',
                                stiffness: 300,
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Animated Timeline Dot */}
                  <motion.div
                    className="hidden md:flex w-2/12 justify-center relative z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + 0.5,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <motion.div
                      className="w-6 h-6 bg-primary rounded-full border-4 border-black shadow-lg shadow-primary/50 flex items-center justify-center relative"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-2.5 h-2.5 bg-white rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

