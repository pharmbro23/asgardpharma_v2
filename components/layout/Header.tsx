'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/ui/Logo'
import { homeNavItems, pharmaNavItems, ventures, contactContent } from '@/content/site-content'
import { eirNavItems } from '@/content/eir-content'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [venturesOpen, setVenturesOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const venturesRef = useRef<HTMLDivElement>(null)
  const pointerTypeRef = useRef<string>('')

  // Each venture page gets its own in-page section links
  const currentVenture = ventures.find((v) => pathname?.startsWith(v.href.replace(/\/$/, '')))
  const navItems =
    currentVenture?.slug === 'pharma' ? pharmaNavItems : currentVenture?.slug === 'eir' ? eirNavItems : homeNavItems

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on navigation
  useEffect(() => {
    setVenturesOpen(false)
    setMobileMenuOpen(false)
    setActiveSection(null)
  }, [pathname])

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        {
          rootMargin: '-50% 0px -50% 0px', // Trigger when section is in center of viewport
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [navItems])

  // Close menus on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        setVenturesOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Close the ventures dropdown when clicking elsewhere
  useEffect(() => {
    if (!venturesOpen) return
    const handleClick = (e: MouseEvent) => {
      if (!venturesRef.current?.contains(e.target as Node)) setVenturesOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [venturesOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const linkClass = (active: boolean) =>
    cn(
      'text-xs font-bold uppercase tracking-nav transition-colors',
      active ? 'text-accent' : 'text-text-main/80 hover:text-accent'
    )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || mobileMenuOpen
          ? 'bg-bg-main/90 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="mx-auto max-w-7xl px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-text-main" aria-label="Asgard Pharmaceuticals home">
          <Logo size={34} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {/* Ventures dropdown */}
          <div
            ref={venturesRef}
            className="relative"
            onPointerEnter={(e) => e.pointerType === 'mouse' && setVenturesOpen(true)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && setVenturesOpen(false)}
          >
            <button
              type="button"
              onPointerDown={(e) => (pointerTypeRef.current = e.pointerType)}
              onClick={() => {
                // Mouse users already opened it by hovering; touch and keyboard toggle
                if (pointerTypeRef.current === 'mouse') setVenturesOpen(true)
                else setVenturesOpen((open) => !open)
                pointerTypeRef.current = ''
              }}
              className={cn(linkClass(!!currentVenture), 'inline-flex items-center gap-1 py-2')}
              aria-expanded={venturesOpen}
              aria-controls="ventures-menu"
            >
              Ventures
              <ChevronDown
                size={14}
                className={cn('transition-transform', venturesOpen && 'rotate-180')}
              />
            </button>

            {/* Positioning wrapper: framer-motion owns the inner transform */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full w-[22rem]">
              <AnimatePresence>
                {venturesOpen && (
                  <motion.div
                    id="ventures-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-auto pt-3"
                  >
                    <ul className="bg-white rounded-2xl border border-text-main/5 shadow-xl p-2">
                      {ventures.map((venture) => (
                        <li key={venture.slug}>
                          <Link
                            href={venture.href}
                            className={cn(
                              'group flex items-start justify-between gap-4 rounded-xl p-4 transition-colors hover:bg-bg-main',
                              currentVenture?.slug === venture.slug && 'bg-bg-main'
                            )}
                          >
                            <span>
                              <span className="block text-sm font-bold uppercase tracking-tight text-text-main group-hover:text-accent transition-colors">
                                {venture.name}
                              </span>
                              <span className="block text-xs text-text-muted mt-1">{venture.category}</span>
                            </span>
                            <span
                              className={cn(
                                'flex-shrink-0 text-[9px] font-bold uppercase tracking-nav px-2 py-1 rounded-full',
                                venture.status === 'Active'
                                  ? 'bg-text-main text-bg-main'
                                  : 'bg-bg-secondary text-text-muted'
                              )}
                            >
                              {venture.status}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {navItems.map((item) => (
            <a key={item.id} href={item.href} className={linkClass(activeSection === item.id)}>
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${contactContent.email}`}
            className="hidden xl:inline-flex whitespace-nowrap px-5 py-3 border border-text-main text-xs font-bold uppercase tracking-nav text-text-main hover:bg-text-main hover:text-bg-main transition-colors"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-text-main" />
          ) : (
            <Menu size={24} className="text-text-main" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-main/95 backdrop-blur-md border-t border-text-main/5 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-8 py-4">
              <p className="pt-2 pb-3 text-[10px] font-bold uppercase tracking-nav text-accent">Ventures</p>
              {ventures.map((venture) => (
                <Link
                  key={venture.slug}
                  href={venture.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <span
                    className={cn(
                      'text-sm font-bold uppercase tracking-nav',
                      currentVenture?.slug === venture.slug ? 'text-accent' : 'text-text-main/80'
                    )}
                  >
                    {venture.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-nav text-text-muted">{venture.status}</span>
                </Link>
              ))}
              <div className="border-t border-text-main/10 mt-3 pt-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      'block py-4 text-sm font-bold uppercase tracking-nav transition-colors border-b border-text-main/5 last:border-b-0',
                      activeSection === item.id
                        ? 'text-accent'
                        : 'text-text-main/80 hover:text-accent'
                    )}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
