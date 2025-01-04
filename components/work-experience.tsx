'use client'

import { motion } from "framer-motion"
import { Calendar, Building2, Code2 } from 'lucide-react'
import Image from "next/image"

const experiences = [
  {
    company: "KoinX",
    role: "Backend Intern",
    period: "October 2024 - Present",
    location: "Remote, India",
    achievements: [
      "Implemented Repository Pattern for 40+ MongoDB Models with a generic Repository Class, reducing duplicate database access code by 60% and standardizing data access layers across microservices.",
      "Led the refactoring of tax calculation services for multiple countries, implementing standardized architecture patterns and reducing code duplication by 40%, while maintaining 100% test coverage with Mocha and Simon.",
      "Developed and optimized wallet-wise profit/loss calculation system for cryptocurrency transactions, implementing comprehensive test coverage and Swagger documentation that improved API reliability and team collaboration."
    ],
    skills: ["Node.js", "Express", "MongoDB", "TypeScript", "Microservices", "Mocha", "Swagger", "Github  Actions", "Docker"]
  },
  {
    company: "TrueManager Technologies Pvt Ltd.",
    role: "Software Engineer Intern",
    period: "Oct 2024",
    location: "Remote, India",
    achievements: [
      "Developed authentication and authorization APIs using Node.js and DynamoDB, improving response times and securing access with OTP-based authentication.",
      "Enhanced role-based access control (RBAC) for team members, enabling CRUD operations with specific permissions, increasing application security and user management efficiency.",
      "Collaborated using GitHub for version control, ensuring seamless branching and merging practices."
    ],
    skills: ["Node.js", "DynamoDB", "Express", "Typescript", "RBAC", "API Development", "GitHub"]
  },
  {
    company: "GirlScript Summer of Code",
    role: "Back End Developer | Full Stack Developer",
    period: "May 2024 - Aug 2024",
    location: "Ghaziabad, Uttar Pradesh, India · Hybrid",
    achievements: [
      "Ranked among top 100 contributors out of 27000+ registered users and 3000 active contributors in the first 3 weeks.",
      "Worked on Full Stack and Primarily Backend Open Source Real World Projects.",
      "Implemented Full Authentication and authorization from scratch.",
      "Created Profile, Admin, Settings pages for applications.",
      "Improved overall efficiency of the applications."
    ],
    skills: ["Next.js", "Node.js", "Express", "Mongodb", "Back-End Web Development", "Full Stack Development", "Open Source"],
    certificates: [
      {
        title: "GSSoC 2024 Certification",
        image: "/contributor.jpeg"
      },
      {
        title: "Contributor Badge",
        image: "/contributorbadge.jpeg"
      }
    ]
  }
]

export function WorkExperience() {
  return (
    <section className="flex flex-col justify-center items-center my-10 md:my-20 px-4 md:px-6 lg:px-8">
      <div className="text-base md:text-lg lg:text-3xl font-bold border border-slate-800 text-neutral-700 dark:text-white w-full max-w-7xl leading-relaxed text-center p-4 lg:py-6 lg:px-10">
        Work Experience
      </div>
      
      <div className="w-full max-w-6xl mt-6 md:mt-10 space-y-6 md:space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative p-4 md:p-6 border border-slate-800 rounded-lg hover:bg-gradient-to-r hover:from-black/5 hover:to-transparent transition-all duration-300"
          >
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between mb-4">
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-white">
                  {exp.company}
                </h3>
                <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300">
                  {exp.role}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm md:text-base">
                <div className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{exp.period}</span>
                </div>
                <div className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
                  <Building2 className="w-4 h-4 flex-shrink-0" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            
            <ul className="space-y-3 mb-4 text-sm md:text-base">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + (i * 0.1) }}
                  className="text-neutral-700 dark:text-neutral-300 pl-4 border-l-2 border-red-500"
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>

            <div className="mt-4 md:mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Skills
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + (i * 0.1) }}
                    className="px-3 py-1 text-xs md:text-sm rounded-full bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {exp.certificates && (
              <div className="mt-4 md:mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
                {exp.certificates.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + (i * 0.1) }}
                    className="relative aspect-square rounded-lg overflow-hidden border border-slate-800 group"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs md:text-sm text-center px-2">
                        {cert.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

