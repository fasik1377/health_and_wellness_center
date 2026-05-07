"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  service?: string
  result?: string
  className?: string
}

export function TestimonialCard({ name, role, content, rating, service, result, className }: TestimonialCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-transparent dark:from-teal-900/20 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
      
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-teal-100 dark:text-teal-900 group-hover:text-teal-200 dark:group-hover:text-teal-800 transition-colors duration-300">
        <Quote className="h-8 w-8" />
      </div>

      {/* Rating */}
      <motion.div 
        className="flex items-center mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <Star
              className={cn(
                "h-6 w-6 transition-all duration-300",
                i < rating
                  ? "text-teal-500 fill-current drop-shadow-sm"
                  : "text-gray-300 dark:text-gray-600"
              )}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.blockquote 
        className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        &ldquo;{content}&rdquo;
      </motion.blockquote>

      {/* Service & Result */}
      {(service || result) && (
        <motion.div 
          className="flex flex-wrap gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {service && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200">
              <CheckCircle className="h-4 w-4 mr-1" />
              {service}
            </span>
          )}
          {result && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
              <CheckCircle className="h-4 w-4 mr-1" />
              {result}
            </span>
          )}
        </motion.div>
      )}

      {/* Author */}
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <div className="flex-1">
          <div className="font-bold text-gray-900 dark:text-white text-lg">
            {name}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {role}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
