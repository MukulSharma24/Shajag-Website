'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Rocket, Play } from 'lucide-react'

const Hero: React.FC = () => {
    return (
        <section style={{
            background: 'linear-gradient(135deg, #C85A17 0%, #D97E3A 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            color: 'white'
        }}>
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
                            <Link href="/contact" style={{
                                background: 'linear-gradient(135deg, #B8471A 0%, #C85A17 100%)',
                                padding: '16px 40px',
                                fontSize: '18px',
                                borderRadius: '9999px',
                                fontWeight: '600',
                                color: 'white',
                                display: 'inline-flex',
                                alignItems: 'center',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <Rocket size={20} style={{ marginRight: '8px' }} />
                                Get Started
                            </Link>
                            <Link href="/services" style={{
                                padding: '16px 40px',
                                fontSize: '18px',
                                borderRadius: '9999px',
                                fontWeight: '600',
                                color: 'white',
                                display: 'inline-flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                border: '2px solid rgba(255,255,255,0.7)',
                                background: 'transparent',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                <Play size={20} style={{ marginRight: '8px' }} />
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
        </section>
    )
}

export default Hero
