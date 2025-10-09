'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { number: '100+', label: 'Happy Clients', suffix: '' },
    { number: '50+', label: 'Expert Team', suffix: '' },
    { number: '7', label: 'Years Experience', suffix: '' },
    { number: '24/7', label: 'Support', suffix: '' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-xl card-hover"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection