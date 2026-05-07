"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "./ui/button"

const trustSlides = [
  {
    title: "Person-centered communication",
    body: "Families need updates that are timely, understandable, and grounded in respect.",
  },
  {
    title: "Reliable support coordination",
    body: "Strong PASA service delivery depends on thoughtful planning and steady follow-through.",
  },
  {
    title: "Health and welfare focus",
    body: "Good support balances daily needs, safety, and long-term independence goals.",
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trustSlides.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [isAutoPlaying])

  const currentSlide = trustSlides[currentIndex]

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsAutoPlaying((value) => !value)}
          className="text-slate-600 hover:text-teal-800"
        >
          {isAutoPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
          {isAutoPlaying ? "Pause" : "Play"}
        </Button>

        <div className="text-sm text-slate-500">
          {currentIndex + 1} of {trustSlides.length}
        </div>
      </div>

      <div className="relative rounded-[30px] border border-stone-200 bg-white p-8 shadow-[0_18px_65px_-45px_rgba(20,40,29,0.45)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-sm uppercase tracking-[0.24em] text-teal-800">
              Trust point
            </p>
            <h3 className="mt-4 text-3xl">{currentSlide.title}</h3>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{currentSlide.body}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {trustSlides.map((slide, index) => (
              <button
                key={slide.title}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === index ? "w-8 bg-teal-800" : "w-2.5 bg-stone-300"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + trustSlides.length) % trustSlides.length)
              }
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % trustSlides.length)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
