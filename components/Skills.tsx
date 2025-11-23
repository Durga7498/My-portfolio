'use client'

import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { skillCategories } from '@/data/skills'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
  FaCode,
  FaMobileAlt,
  FaDocker,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiMysql,
} from 'react-icons/si'

// Icon mapping
const iconMap: { [key: string]: any } = {
  FaReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  FaHtml5,
  FaCss3Alt,
  SiTailwindcss,
  FaNode,
  SiExpress,
  FaPython,
  FaJava,
  SiMongodb,
  SiPrisma,
  SiMysql,
  FaGitAlt,
  FaFigma,
  FaCode,
  FaMobileAlt,
  FaDocker,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="My Skills" />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon]
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {IconComponent ? (
                        <IconComponent
                          className="text-primary"
                          size={32}
                        />
                      ) : (
                        <div className="w-8 h-8 bg-primary/20 rounded"></div>
                      )}
                      <span className="text-xs text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

