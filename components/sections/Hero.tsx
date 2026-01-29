'use client'

import { useRef, useEffect, useState } from 'react'
import { heroContent } from '@/content/site-content'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Intersection observer to pause video when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
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
    <div className="relative h-screen w-full overflow-hidden bg-bg-main">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Loading placeholder */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-bg-secondary animate-pulse" />
        )}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover opacity-40 grayscale scale-110"
        >
          {/* WebM for better compression (when available) */}
          <source src="/assets/video/background.webm" type="video/webm" />
          {/* MP4 fallback */}
          <source src="/assets/video/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-end pb-24 md:pb-32 px-8">
        <div className="mx-auto max-w-7xl w-full">
          <div className="max-w-4xl">
            {/* Blurred background container */}
            <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-text-main tracking-tighter mb-6 leading-[0.9]">
                {heroContent.headline.split(' & ').map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && <> &<br /></>}
                  </span>
                ))}
              </h1>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-8 md:mt-12">
                <p className="text-lg md:text-xl text-text-main/80 max-w-xl leading-relaxed font-light tracking-wide">
                  {heroContent.subtext}
                </p>
                <a
                  href={heroContent.ctaHref}
                  className="group flex items-center gap-4 text-text-main uppercase tracking-cta text-sm font-bold hover:text-accent transition-colors"
                >
                  {heroContent.ctaText}
                  <span className="block w-12 h-[1px] bg-text-main group-hover:bg-accent transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
