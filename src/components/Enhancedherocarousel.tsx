'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Rocket, Play, TrendingUp, Zap, Target } from 'lucide-react'

// Define slide data with distinct orange color variations
const slides = [
    {
        id: 1,
        badge: 'Trusted by 100+ Companies',
        title: 'Transforming Businesses',
        highlightText: 'Innovative',
        subtitle: 'Technology',
        description: 'Empower your organization with cutting-edge technology that drives growth, efficiency, and competitive advantage in the digital era. Join 100+ companies who trust us to deliver exceptional results.',
        gradient: 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 50%, #F85A3E 100%)',
        icon: Rocket
    },
    {
        id: 2,
        badge: '7 Years of Excellence',
        title: 'Driving Digital',
        highlightText: 'Transformation',
        subtitle: 'Success',
        description: 'Leverage our expertise in data visualization, cloud infrastructure, and AI analytics to transform your business operations and achieve unprecedented growth in the digital landscape.',
        gradient: 'linear-gradient(135deg, #FFA666 0%, #FF8C42 50%, #FF7A38 100%)',
        icon: TrendingUp
    },
    {
        id: 3,
        badge: '24/7 Support Available',
        title: 'Accelerating Your',
        highlightText: 'Growth',
        subtitle: 'Journey',
        description: 'Partner with industry leaders who deliver comprehensive technology solutions tailored to your unique business needs. Experience innovation that drives measurable results and sustainable growth.',
        gradient: 'linear-gradient(135deg, #FFB88C 0%, #FFA366 50%, #FF9555 100%)',
        icon: Zap
    }
]

const EnhancedHeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        setIsAutoPlaying(false)
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const currentSlideData = slides[currentSlide]
    const Icon = currentSlideData.icon

    return (
        <>
            <style jsx global>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }
            `}</style>

            <section style={{
                background: currentSlideData.gradient,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                color: 'white',
                paddingTop: '85px',
                transition: 'background 0.8s ease-in-out'
            }}>
                {/* Animated Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    backgroundImage: `
                        radial-gradient(circle at 20% 30%, white 1px, transparent 1px),
                        radial-gradient(circle at 80% 70%, white 1px, transparent 1px),
                        radial-gradient(circle at 40% 80%, white 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    pointerEvents: 'none'
                }} />

                {/* Floating Shapes */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    animation: 'float 8s ease-in-out infinite',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    pointerEvents: 'none'
                }} />

                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '8%',
                    width: '150px',
                    height: '150px',
                    borderRadius: '30px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    animation: 'float 6s ease-in-out infinite',
                    animationDelay: '1s',
                    transform: 'rotate(45deg)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    pointerEvents: 'none'
                }} />

                <div style={{
                    position: 'absolute',
                    top: '40%',
                    left: '15%',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    animation: 'float 10s ease-in-out infinite',
                    animationDelay: '2s',
                    pointerEvents: 'none'
                }} />

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.1) 100%)',
                    pointerEvents: 'none'
                }} />

                <div className="container-custom" style={{
                    position: 'relative',
                    zIndex: 10,
                    maxWidth: '1280px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    margin: '0 auto',
                    paddingTop: '40px',
                    paddingBottom: '80px'
                }}>
                    <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '10px 24px',
                                        borderRadius: '50px',
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        marginBottom: '32px',
                                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#22c55e',
                                        animation: 'glow 2s infinite'
                                    }} />
                                    {currentSlideData.badge}
                                </motion.div>

                                {/* Main Heading */}
                                <h1 style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                                    fontWeight: '800',
                                    lineHeight: '1.1',
                                    marginBottom: '32px',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {currentSlideData.title}
                                    <br />
                                    Through{' '}
                                    <span style={{
                                        background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE4CC 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        position: 'relative',
                                        display: 'inline-block'
                                    }}>
                                        {currentSlideData.highlightText}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            left: '0',
                                            right: '0',
                                            height: '12px',
                                            background: 'rgba(255, 245, 230, 0.3)',
                                            transform: 'skewY(-2deg)',
                                            zIndex: -1
                                        }} />
                                    </span>{' '}
                                    {currentSlideData.subtitle}
                                </h1>

                                {/* Description */}
                                <p style={{
                                    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                                    lineHeight: '1.7',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    maxWidth: '800px',
                                    margin: '0 auto 48px',
                                    fontWeight: '400'
                                }}>
                                    {currentSlideData.description}
                                </p>

                                {/* CTA Buttons */}
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '16px',
                                    justifyContent: 'center',
                                    marginBottom: '60px',
                                    position: 'relative',
                                    zIndex: 20
                                }}>
                                    <Link href="/contact" style={{
                                        background: 'white',
                                        color: currentSlide === 0 ? '#FF7A3D' : currentSlide === 1 ? '#ff7e28' : '#fa7938',
                                        padding: '16px 40px',
                                        fontSize: '17px',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        textDecoration: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        zIndex: 20
                                    }}
                                          onMouseEnter={(e) => {
                                              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                              e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.3)';
                                          }}
                                          onMouseLeave={(e) => {
                                              e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
                                          }}
                                    >
                                        <Icon size={20} />
                                        Get Started
                                    </Link>

                                    <Link href="/services" style={{
                                        padding: '16px 40px',
                                        fontSize: '17px',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        color: 'white',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        textDecoration: 'none',
                                        border: '2px solid rgba(255, 255, 255, 0.5)',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        zIndex: 20
                                    }}
                                          onMouseEnter={(e) => {
                                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                                              e.currentTarget.style.transform = 'translateY(-3px)';
                                          }}
                                          onMouseLeave={(e) => {
                                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                              e.currentTarget.style.transform = 'translateY(0)';
                                          }}
                                    >
                                        <Play size={20} />
                                        Learn More
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Navigation Dots */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '60px',
                            position: 'relative',
                            zIndex: 30
                        }}>
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    style={{
                                        width: currentSlide === index ? '48px' : '12px',
                                        height: '12px',
                                        borderRadius: '50px',
                                        background: currentSlide === index
                                            ? 'white'
                                            : 'rgba(255, 255, 255, 0.4)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        padding: 0,
                                        boxShadow: currentSlide === index
                                            ? '0 4px 12px rgba(255, 255, 255, 0.3)'
                                            : 'none',
                                        position: 'relative',
                                        zIndex: 30
                                    }}
                                    onMouseEnter={(e) => {
                                        if (currentSlide !== index) {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                                            e.currentTarget.style.transform = 'scale(1.2)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (currentSlide !== index) {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }
                                    }}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '32px',
                                maxWidth: '1000px',
                                margin: '0 auto',
                                padding: '40px 20px',
                                background: 'rgba(255, 255, 255, 0.08)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <p style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: '800',
                                    marginBottom: '8px',
                                    background: 'linear-gradient(135deg, #FFF 0%, #FFE4CC 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    100+
                                </p>
                                <span style={{
                                    fontSize: '0.95rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontWeight: '600',
                                    opacity: 0.9
                                }}>
                                    Happy Clients
                                </span>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <p style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: '800',
                                    marginBottom: '8px',
                                    background: 'linear-gradient(135deg, #FFF 0%, #FFDAB3 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    50+
                                </p>
                                <span style={{
                                    fontSize: '0.95rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontWeight: '600',
                                    opacity: 0.9
                                }}>
                                    Expert Team
                                </span>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <p style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: '800',
                                    marginBottom: '8px',
                                    background: 'linear-gradient(135deg, #FFF 0%, #FFE4CC 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    7
                                </p>
                                <span style={{
                                    fontSize: '0.95rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontWeight: '600',
                                    opacity: 0.9
                                }}>
                                    Years Experience
                                </span>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <p style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: '800',
                                    marginBottom: '8px',
                                    background: 'linear-gradient(135deg, #FFF 0%, #FFDAB3 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    24/7
                                </p>
                                <span style={{
                                    fontSize: '0.95rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontWeight: '600',
                                    opacity: 0.9
                                }}>
                                    Support
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EnhancedHeroCarousel