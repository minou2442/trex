"use client"
import { motion } from "framer-motion"
import { Globe, LayoutDashboard, Smartphone, Database, Brain, Palette } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites for commerce, clinics, pharmacies, and professional services",
      color: "from-blue-500 to-cyan-500",
      features: ["React/Next.js", "E-commerce", "CMS Integration", "SEO Optimized"],
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "ERP Systems",
      description: "Complete business management solutions for inventory, sales, and operations",
      color: "from-purple-500 to-pink-500",
      features: ["Inventory Management", "Sales Tracking", "Reporting", "Multi-user"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      color: "from-green-500 to-emerald-500",
      features: ["React Native", "Flutter", "Native iOS/Android", "Cross-platform"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Robust database design, optimization, and management solutions",
      color: "from-orange-500 to-red-500",
      features: ["PostgreSQL", "MongoDB", "MySQL", "Cloud Databases"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Tools",
      description: "Intelligent automation and AI-powered features for your business",
      color: "from-indigo-500 to-purple-500",
      features: ["Machine Learning", "Automation", "Data Analysis", "Chatbots"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design that converts visitors into customers",
      color: "from-pink-500 to-rose-500",
      features: ["User Research", "Prototyping", "Brand Identity", "Design Systems"],
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute -right-64 -top-64 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
      />

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 mb-6"
          >
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="text-purple-500 font-medium">Our Services</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Complete Digital
            </span>
            <br />
            Solutions Suite
          </h2>

          <p className="text-xl opacity-80 leading-relaxed">
            From concept to deployment, we provide end-to-end digital solutions that drive growth and innovation for
            your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm border border-white/10 dark:border-slate-700/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white w-fit mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="opacity-80 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + featureIndex * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-sm opacity-70">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color}`}
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
