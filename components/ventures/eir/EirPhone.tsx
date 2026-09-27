'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CloudOff, Lock } from 'lucide-react'

// Deterministic "random" layout so server and client render the same pills
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const PILL_COUNT = 30
const pills = (() => {
  const rand = seeded(42)
  const cols = 5
  return Array.from({ length: PILL_COUNT }, (_, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    return {
      left: 8 + col * 18 + (rand() - 0.5) * 8, // % of tray width
      top: 6 + row * 15.5 + (rand() - 0.5) * 7, // % of tray height
      rotate: Math.round(rand() * 180),
    }
  })
})()

// Illustrative phone screen: a counting tray with every detected pill ringed
export function EirPhone() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]" aria-hidden="true">
      <div className="rounded-[2.75rem] bg-text-main p-3 shadow-2xl shadow-eir-green/20">
        <div className="relative rounded-[2.1rem] overflow-hidden bg-bg-main aspect-[9/19] flex flex-col">
          {/* Status bar + notch */}
          <div className="relative flex items-center justify-between px-6 pt-3 pb-2 text-[10px] font-semibold text-text-main">
            <span>9:41</span>
            <span className="absolute left-1/2 -translate-x-1/2 top-2 w-20 h-5 rounded-full bg-text-main" />
            <span className="inline-flex items-center gap-1 text-eir-green">
              <Lock size={10} /> On device
            </span>
          </div>

          <div className="px-4 pb-3 flex items-center justify-between">
            <Image src="/assets/ventures/eir/logo.png" alt="" width={1447} height={477} className="h-5 w-auto" />
            <span className="text-[10px] font-bold uppercase tracking-nav text-text-muted">Counting</span>
          </div>

          {/* Counting tray */}
          <div className="relative mx-3 flex-grow rounded-2xl bg-[#DCE3E6] shadow-inner overflow-hidden">
            {pills.map((pill, i) => (
              <span
                key={i}
                className="absolute w-[30px] h-[17px] -ml-[15px] -mt-[8px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                style={{ left: `${pill.left + 5}%`, top: `${pill.top + 4}%`, transform: `rotate(${pill.rotate}deg)` }}
              >
                {/* Score line */}
                <span className="absolute left-1/2 top-[3px] bottom-[3px] w-px bg-black/10" />
                {/* Detection ring */}
                <motion.span
                  className="absolute -inset-[4px] rounded-full border-2 border-eir-green"
                  initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 0.9, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.04, duration: 0.25 }}
                />
              </span>
            ))}
          </div>

          {/* Result sheet */}
          <div className="mx-3 my-3 rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-nav text-text-muted">Tablets counted</p>
            <div className="flex items-end justify-between mt-1">
              <p className="text-5xl font-bold tracking-tighter text-text-main leading-none">
                {PILL_COUNT}
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-eir-gold ml-1" />
              </p>
              <p className="flex items-center gap-1 text-[10px] text-text-muted pb-1">
                <CloudOff size={11} /> 0 photos uploaded
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <span className="text-center rounded-full border border-text-main/15 py-2 text-[10px] font-bold uppercase tracking-nav text-text-main">
                Recount
              </span>
              <span className="text-center rounded-full bg-eir-green py-2 text-[10px] font-bold uppercase tracking-nav text-white">
                Confirm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
