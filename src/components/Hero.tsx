"use client"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Floating elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute top-1/3 left-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-40"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-50"
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-8">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-500" />
              <span className="text-cyan-500 font-semibold">Digital Innovation Hub</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Building Digital
              </span>
              <br />
              <motion.span
                className="text-slate-800 dark:text-white"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Solutions
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed">
              We craft cutting-edge websites for <span className="text-cyan-500 font-semibold">commerce</span>,
              <span className="text-purple-500 font-semibold"> clinics</span>,
              <span className="text-pink-500 font-semibold"> startups </span>, and
              <span className="text-cyan-500 font-semibold"> all types of business</span>. Plus ERP systems, mobile apps, database
              management, and AI-powered tools for modern entrepreneurs.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mt-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl flex items-center gap-3 shadow-2xl shadow-cyan-500/25 hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Start Project
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  
                </div>
                <div className="text-sm opacity-70"></div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm opacity-70">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm opacity-70">Support</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Modern Digital Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20" />
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium"></span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-6 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium"></span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
