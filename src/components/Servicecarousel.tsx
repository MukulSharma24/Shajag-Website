'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
    {
        iconName: "BarChart3",
        title: "Data Visualization",
        description:
            "Transform complex data into compelling visual narratives that drive business insights and strategic decision-making.",
    },
    {
        iconName: "Cloud",
        title: "Cloud Infrastructure",
        description:
            "Comprehensive cloud infrastructure solutions that ensure scalability, security, and cost-effectiveness for modern enterprises.",
    },
    {
        iconName: "Cpu",
        title: "IoT Solutions",
        description:
            "Connect, monitor, and manage smart devices to optimize operations and enhance user experiences across industries.",
    },
    {
        iconName: "Megaphone",
        title: "Digital Marketing",
        description:
            "Strategic digital marketing campaigns powered by AI and analytics that maximize reach, engagement, and conversion rates.",
    },
    {
        iconName: "Brain",
        title: "AI & Analytics",
        description:
            "Advanced data processing and analytics solutions for real-time business intelligence and predictive insights.",
    },
    {
        iconName: "Settings",
        title: "Custom Solutions",
        description:
            "Deep domain expertise across multiple industries, delivering tailored solutions that address unique sector challenges.",
    },
]

const ServiceCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    // Calculate how many cards to show based on screen size
    const cardsPerView = 2 // Show 2 cards at a time on desktop
    const maxIndex = services.length - cardsPerView

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setDirection(-1)
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setDirection(1)
            setCurrentIndex(currentIndex + 1)
        }
    }

    const visibleServices = services.slice(currentIndex, currentIndex + cardsPerView)

    return (
        <section style={{
            background: 'white',
            position: 'relative',
            overflow: 'hidden',
            padding: '80px 0'
        }}>
            {/* Diagonal Gradient Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '45%',
                height: '100%',
                background: 'linear-gradient(135deg, #C85A17 0%, #B8471A 50%, #A63C1A 100%)',
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                zIndex: 1
            }} />

            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 24px',
                position: 'relative',
                zIndex: 2
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '48px',
                    alignItems: 'center',
                    minHeight: '600px'
                }}>
                    {/* Left Side - Text Content */}
                    <div style={{
                        color: 'white',
                        paddingRight: '40px'
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '800',
                            marginBottom: '24px',
                            lineHeight: '1.2'
                        }}>
                            Service Offerings
                        </h2>
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                            marginBottom: '24px',
                            opacity: 0.95
                        }}>
                            As a company we are committed to provide the highest level of services to our clients. Our team of experts have years of experience and we are constantly updating our technology to stay ahead of the curve. We believe that data analytics is the key to success in the modern business World. By partnering with us you can take advantage of our expertise and gain a competitive edge in your industry.
                        </p>
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                            opacity: 0.95
                        }}>
                            Contact us today to learn more about how we can help you achieve your business goals.
                        </p>
                    </div>

                    {/* Right Side - Carousel */}
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        {/* Service Cards */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '32px',
                            marginBottom: '32px',
                            width: '100%'
                        }}>
                            <AnimatePresence mode="wait" initial={false}>
                                {visibleServices.map((service, index) => (
                                    <motion.div
                                        key={currentIndex + index}
                                        initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <ServiceCard
                                            iconName={service.iconName}
                                            title={service.title}
                                            description={service.description}
                                            link="/services"
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '16px',
                            marginTop: '8px'
                        }}>
                            <button
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    border: '2px solid #e5e7eb',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                                    opacity: currentIndex === 0 ? 0.4 : 1,
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    if (currentIndex !== 0) {
                                        e.currentTarget.style.borderColor = '#C85A17';
                                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <ChevronLeft size={24} color={currentIndex === 0 ? '#9ca3af' : '#374151'} />
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={currentIndex >= maxIndex}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    border: '2px solid #e5e7eb',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
                                    opacity: currentIndex >= maxIndex ? 0.4 : 1,
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    if (currentIndex < maxIndex) {
                                        e.currentTarget.style.borderColor = '#C85A17';
                                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <ChevronRight size={24} color={currentIndex >= maxIndex ? '#9ca3af' : '#374151'} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
                @media (max-width: 1024px) {
                    section > div > div {
                        grid-template-columns: 1fr !important;
                    }
                    section > div > div > div:first-child {
                        text-align: center;
                        padding-right: 0 !important;
                    }
                    section > div > div > div:last-child > div:first-child {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 768px) {
                    section > div > div > div:last-child > div:first-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default ServiceCarousel