"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, User, MessageSquare } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formState.name || !formState.email || !formState.message) {
      return
    }

    setFormStatus("submitting")

    // Simulate API call
    setTimeout(() => {
      console.log("Form data:", formState)
      setFormStatus("success")

      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contact@trexbyte.dz",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+213 555 123 456",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Jijel, Algeria",
      color: "from-purple-400 to-pink-500",
    },
  ]

  const services = [
    "Web Development",
    "Mobile App Development",
    "ERP Systems",
    "E-commerce Solutions",
    "AI/ML Solutions",
    "UI/UX Design",
    "Database Management",
    "Consulting",
    "Other",
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute -left-64 -bottom-64 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 mb-6"
          >
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-cyan-500 font-medium">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            Amazing Together
          </h2>

          <p className="text-xl opacity-80 leading-relaxed">
            Ready to transform your business with cutting-edge digital solutions? Let's discuss your project and bring
            your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Start?
              </h3>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                We're here to help you transform your ideas into powerful digital solutions. Reach out and let's create
                something extraordinary together.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.label}</h4>
                    <p className="opacity-80">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
            >
              <h4 className="font-semibold text-lg mb-2">Why Choose TrexByte?</h4>
              <ul className="space-y-2 text-sm opacity-80">
               
               
                <li>⚡ 24/7 support & maintenance</li>
                <li>🎯 100% client satisfaction</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700"
          >
            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Message Sent Successfully!
                </h3>
                <p className="opacity-80">We'll get back to you within 24 hours!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 flex items-center gap-2">
                      <User className="w-4 h-4 text-cyan-500" />
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyan-500" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-3 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-cyan-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="+213 555 123 456"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold mb-3">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-cyan-500" />
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                    formStatus === "submitting"
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-xl"
                  } text-white`}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
