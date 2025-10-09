'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Rocket, Play } from 'lucide-react'

interface FloatingIllustrationProps {
  src: string
  alt: string
  delay?: number
  className?: string
}

const FloatingIllustration: React.FC<FloatingIllustrationProps> = ({
  src,
  alt,
  delay = 0,
  className = ''
}) => (
  <motion.div
    className={`absolute pointer-events-none z-10 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 0.75,
      y: [0, -15, 0],
      x: [-5, 5, -5],
      rotate: [-2, 2, -2]
    }}
    transition={{
      opacity: { duration: 1, delay },
      y: { duration: 4, delay, repeat: Infinity, ease: 'easeInOut' },
      x: { duration: 6, delay: delay + 1, repeat: Infinity, ease: 'easeInOut' },
      rotate: { duration: 8, delay: delay + 0.5, repeat: Infinity, ease: 'easeInOut' }
    }}
  >
    <img src={src} alt={alt} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
  </motion.div>
)

const AnimatedWave: React.FC = () => (
  <svg
    className="absolute bottom-0 left-0 w-full h-24 md:h-36 lg:h-48 z-0 pointer-events-none"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    style={{ minHeight: 96 }}
  >
    <path fill="#fff" fillOpacity={1}>
      <animate
        attributeName="d"
        dur="8s"
        repeatCount="indefinite"
        values="
          M0,224L60,208C120,192,240,160,360,149.3C480,139,600,149,720,170.7C840,192,960,224,1080,213.3C1200,203,1320,149,1380,122.7L1440,96
          L1440,320L0,320;
          M0,180L60,144C120,108,240,36,360,69.3C480,103,600,241,720,266.7C840,292,960,204,1080,186.7C1200,169,1320,219,1380,204.7L1440,190
          L1440,320L0,320;
          M0,224L60,208C120,192,240,160,360,149.3C480,139,600,149,720,170.7C840,192,960,224,1080,213.3C1200,203,1320,149,1380,122.7L1440,96
          L1440,320L0,320
        "
      />
    </path>
  </svg>
)

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Floating Illustrations */}
      <FloatingIllustration src="/illustrations/coding.svg" alt="Coding illustration" delay={0} className="top-20 left-12" />
      <FloatingIllustration src="/illustrations/creative-process.svg" alt="Creative process illustration" delay={1.5} className="top-32 right-16" />
      <FloatingIllustration src="/illustrations/team-brainstorming.svg" alt="Brainstorming illustration" delay={3} className="bottom-48 left-16" />

      {/* Animated Wave */}
      <AnimatedWave />

      <div className="container-custom relative z-20 max-w-7xl px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            Transforming Businesses <br />
            Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Innovative Technology</span> Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-12"
          >
            Empower your organization with cutting-edge technology that drives growth, efficiency, and competitive advantage in the digital era. Join 100+ companies who trust us to deliver exceptional results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="inline-flex space-x-4 justify-center">
              <Link href="/contact" className="btn btn-primary px-10 py-4 text-lg shadow-lg hover:scale-105 transition-transform rounded-full bg-gradient-to-r from-red-500 to-orange-500 font-semibold text-white">
                <Rocket size={20} className="inline-block mr-2" />
                Get Started
              </Link>
              <Link href="/services" className="btn btn-secondary px-10 py-4 text-lg rounded-full border border-white/70 hover:bg-white/10 transition-colors text-white">
                <Play size={20} className="inline-block mr-2" />
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 1, delay: 0.8 }} className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-14 text-white">
            <div className="text-center">
              <p className="text-5xl font-extrabold drop-shadow-lg">100+</p>
              <span className="block mt-2 tracking-wide text-lg">Happy Clients</span>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold drop-shadow-lg">50+</p>
              <span className="block mt-2 tracking-wide text-lg">Expert Team</span>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold drop-shadow-lg">7</p>
              <span className="block mt-2 tracking-wide text-lg">Years Experience</span>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold drop-shadow-lg">24/7</p>
              <span className="block mt-2 tracking-wide text-lg">Support</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
