"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "MediCare Clinic System",
      description: "Complete clinic management system with patient records, appointments, and billing",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Healthcare",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "PharmaTech Inventory",
      description: "Advanced pharmacy management with inventory tracking and prescription handling",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "MongoDB", "Express", "QR Codes"],
      category: "Healthcare",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "SportClub Pro",
      description: "Comprehensive sports club management with member tracking and event scheduling",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "Laravel", "MySQL", "Payment Gateway"],
      category: "Sports",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features and seamless checkout experience",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Shopify", "Stripe", "Analytics"],
      category: "E-commerce",
      color: "from-orange-400 to-red-500",
    },
    {
      title: "AI Analytics Dashboard",
      description: "Intelligent business analytics with machine learning insights and predictions",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "TensorFlow", "React", "D3.js"],
      category: "AI/ML",
      color: "from-indigo-400 to-purple-500",
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Node.js", "Blockchain", "Security"],
      category: "FinTech",
      color: "from-cyan-400 to-blue-500",
    },
  ]

  const categories = ["All", "Healthcare", "E-commerce", "Sports", "AI/ML", "FinTech"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full border border-pink-500/20 mb-6"
          >
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
            <span className="text-pink-500 font-medium">Our Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            Projects
          </h2>

          <p className="text-xl opacity-80 leading-relaxed">
            Discover our latest work and see how we've helped businesses transform their digital presence and
            operations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 dark:bg-slate-800/50 hover:bg-white/20 dark:hover:bg-slate-700/50 backdrop-blur-sm border border-white/20 dark:border-slate-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Overlay Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Github size={16} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-medium bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-500 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="opacity-80 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.05 }}
                      className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${project.color}`}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
