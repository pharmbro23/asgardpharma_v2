'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { heroContent } from '@/content/site-content'
import { Eyebrow } from '@/components/ui/Eyebrow'

const ease = [0.21, 0.47, 0.32, 0.98] as const

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Pause the video when the hero scrolls out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bg-main flex flex-col">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!isVideoLoaded && <div className="absolute inset-0 bg-bg-secondary animate-pulse" />}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover opacity-50 grayscale scale-110"
        >
          <source src="/assets/video/background.mp4" type="video/mp4" />
        </video>
        {/* Wash so the headline reads cleanly over any frame */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/80 to-bg-main/10" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-main to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center pt-32 pb-16 px-8">
        <div className="mx-auto max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Eyebrow className="mb-8">{heroContent.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="text-[clamp(2rem,10vw,3rem)] sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-text-main tracking-tighter leading-[0.9] mb-10">
            {heroContent.headline.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            <p className="text-lg md:text-xl text-text-main/80 max-w-md leading-relaxed font-light">
              {heroContent.subtext}
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <a
                href={heroContent.primaryCta.href}
                className="group inline-flex items-center gap-3 bg-text-main text-bg-main px-8 py-4 text-xs font-bold uppercase tracking-cta border border-text-main hover:bg-transparent hover:text-text-main transition-colors"
              >
                {heroContent.primaryCta.text}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-cta text-text-main hover:text-accent transition-colors"
              >
                {heroContent.secondaryCta.text}
                <span className="block w-12 h-px bg-current transition-all group-hover:w-16" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key figures */}
      <motion.div
        className="relative z-10 px-8 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <ul className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 border-t border-text-main/15">
          {heroContent.stats.map((stat) => (
            <li key={stat.value} className="pt-6 pb-2 sm:pr-8 flex sm:block items-baseline gap-4">
              <p className="text-3xl md:text-4xl font-bold tracking-tighter text-text-main sm:mb-2 min-w-[5rem]">
                {stat.value}
              </p>
              <p className="text-sm text-text-muted leading-snug max-w-[16rem]">{stat.label}</p>
            </li>
          ))}
        </ul>
        <a
          href="#overview"
          className="hidden md:flex absolute right-8 lg:right-[max(2rem,calc((100vw-80rem)/2+2rem))] -top-12 items-center gap-2 text-[10px] font-bold uppercase tracking-nav text-text-muted hover:text-text-main transition-colors"
          aria-label="Scroll to mission"
        >
          Scroll <ArrowDown size={12} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
