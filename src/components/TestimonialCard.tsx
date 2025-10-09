'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  text: string
  author: string
  company: string
}

const TestimonialCard = ({ text, author, company }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 card-hover"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-yellow-300 mb-4">
        <Quote size={32} />
      </div>
      
      <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
        "{text}"
      </p>
      
      <div className="border-t border-white/20 pt-4">
        <div className="font-bold text-white text-lg">
          {author}
        </div>
        <div className="text-yellow-300 text-sm">
          {company}
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard