'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, PointerEvent } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import { Hand, MousePointer2 } from 'lucide-react'
import { TRAY_PILLS, TRAY_SRC } from './trayPills'

// Interactive hero demo: a phone running Eir Count over a counting tray. The phone follows the pointer, its screen shows
// the patch of tray under the camera, and it counts the way the app does: live dots, "Hold steady" with the gold ring,
// three photos, then the count bubble. Layout, colours and wording follow the Android app (v0.17). The tray is a Blender
// render whose pill centres are known exactly (trayPills.ts), so the dots land on the pills and the count is right.

// Design canvas in px, scaled down to fit the column
const W = 520
const H = 680

const PHONE_W = 250
const PHONE_H = 516
const BEZEL = 9
const SCREEN_W = PHONE_W - 2 * BEZEL
const SCREEN_H = PHONE_H - 2 * BEZEL
const VIEW_TOP = 70 // the live view is the photo's exact 3:4 frame between the dark bands
const VIEW_H = Math.round((SCREEN_W * 4) / 3)
const BAND_TOP = VIEW_TOP + VIEW_H
const ZOOM = 0.95 // the camera sees a slightly wider patch of tray than the phone covers
const VIEW_DY = BEZEL + VIEW_TOP + VIEW_H / 2 - PHONE_H / 2 // live-view centre relative to the phone centre
const SEEN = { x: SCREEN_W / 2 / ZOOM - 7, y: VIEW_H / 2 / ZOOM - 7 } // a pill counts when its centre is in view

const REST = { x: 236, y: 350 }
const RANGE = { x: [150, 330], y: [266, 414] } as const
const FOLLOW = { x: 0.75, y: 0.5 } // the phone moves less than the pointer, so its controls stay within reach

const RING_C = 2 * Math.PI * 23

const C = {
  band: '#15221C',
  green: '#457A65',
  gold: '#B08D56',
  ring: '#C9A66B',
  ink: '#1A1F1C',
  muted: '#6A716C',
  amber: '#9A6412',
  live: '#1E5341',
  steady: '#00E65A',
}

type Phase = 'live' | 'steady' | 'taking' | 'result' | 'photos'

const PILLS = TRAY_PILLS

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

function inView(cx: number, cy: number) {
  const vy = cy + VIEW_DY
  const ids: number[] = []
  PILLS.forEach((p, i) => {
    if (p.main && Math.abs(p.x - cx) < SEEN.x && Math.abs(p.y - vy) < SEEN.y) ids.push(i)
  })
  return ids
}

function TrayArt() {
  return (
    <img
      src={TRAY_SRC}
      alt=""
      width={W}
      height={H}
      draggable={false}
      className="absolute left-0 top-0 max-w-none select-none"
      style={{ width: W, height: H }}
    />
  )
}

// The app's dots: a coloured ring with a white core, on the centre of each pill it counted
function Dots({ ids, color }: { ids: number[]; color: string }) {
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="absolute left-0 top-0" aria-hidden="true">
      {ids.map((i) => (
        <g key={i}>
          <circle cx={PILLS[i].x} cy={PILLS[i].y} r="6.2" fill="none" stroke={color} strokeWidth="3.4" />
          <circle cx={PILLS[i].x} cy={PILLS[i].y} r="6.2" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
        </g>
      ))}
    </svg>
  )
}

function MenuGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 6.5H19.5M4.5 12H12M4.5 17.5H19.5" stroke={C.green} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <circle cx="17" cy="12" r="1.8" fill={C.gold} />
    </svg>
  )
}

function StatusIcons() {
  return (
    <svg width="44" height="10" viewBox="0 0 44 10" fill="white" aria-hidden="true">
      <rect x="0" y="6" width="2.2" height="4" rx="0.6" />
      <rect x="3.4" y="4.5" width="2.2" height="5.5" rx="0.6" />
      <rect x="6.8" y="2.8" width="2.2" height="7.2" rx="0.6" />
      <rect x="10.2" y="1" width="2.2" height="9" rx="0.6" />
      <path d="M21 9.6 L17.4 5.8 A5.2 5.2 0 0 1 24.6 5.8 Z" />
      <path d="M15.6 4 A7.8 7.8 0 0 1 26.4 4" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <rect x="29.5" y="1.5" width="12" height="7" rx="2" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
      <rect x="31" y="3" width="9" height="4" rx="1" />
      <rect x="42.2" y="3.8" width="1.3" height="2.4" rx="0.6" fillOpacity="0.5" />
    </svg>
  )
}

export function EirDemo() {
  const reduce = useReducedMotion()
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number | null>(null)
  const [touch, setTouch] = useState(false)

  // Phone centre on the canvas: the pointer (or the idle drift) sets the target, a spring moves the phone
  const targetX = useMotionValue(REST.x)
  const targetY = useMotionValue(REST.y)
  const cx = useSpring(targetX, { stiffness: 140, damping: 22, mass: 0.9 })
  const cy = useSpring(targetY, { stiffness: 140, damping: 22, mass: 0.9 })
  const phoneX = useTransform(cx, (v) => v - PHONE_W / 2)
  const phoneY = useTransform(cy, (v) => v - PHONE_H / 2)
  const camX = useTransform(cx, (v) => SCREEN_W / 2 - ZOOM * v)
  const camY = useTransform(cy, (v) => VIEW_H / 2 - ZOOM * (v + VIEW_DY))
  const tilt = useSpring(useTransform(useVelocity(cx), [-900, 900], [-4, 4], { clamp: true }), {
    stiffness: 220,
    damping: 28,
  })
  const ring = useMotionValue(0)
  const ringOffset = useTransform(ring, (p) => (1 - p) * RING_C)
  const ringOpacity = useTransform(ring, (p) => (p > 0.001 ? 1 : 0))

  const [phase, setPhase] = useState<Phase>('live')
  const [seen, setSeen] = useState<number[]>([])
  const [counted, setCounted] = useState<number[]>([])
  const [flash, setFlash] = useState(0)
  const phaseRef = useRef<Phase>('live')
  const modeRef = useRef<'drift' | 'follow'>('drift')
  const seenKey = useRef('')
  const timers = useRef<number[]>([])

  const go = useCallback((p: Phase) => {
    phaseRef.current = p
    setPhase(p)
  }, [])

  const capture = useCallback(() => {
    const p = phaseRef.current
    if (p !== 'live' && p !== 'steady') return
    const ids = inView(cx.get(), cy.get())
    if (ids.length === 0) return
    targetX.set(cx.get())
    targetY.set(cy.get())
    ring.set(1)
    setCounted(ids)
    go('taking')
    timers.current.push(
      window.setTimeout(() => setFlash((f) => f + 1), 380),
      window.setTimeout(() => {
        ring.set(0)
        go('result')
      }, 720),
    )
  }, [cx, cy, go, ring, targetX, targetY])

  const newCount = useCallback(() => {
    ring.set(0)
    seenKey.current = ''
    go('live')
  }, [go, ring])

  // Fit the canvas to its column
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / W)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    setTouch(!window.matchMedia('(hover: hover) and (pointer: fine)').matches)
    const pending = timers.current
    return () => pending.forEach((t) => window.clearTimeout(t))
  }, [])

  // Each frame: drift when idle, work out which pills the camera sees, and run the steady-hold auto capture
  useEffect(() => {
    let raf = 0
    let anchorX = cx.get()
    let anchorY = cy.get()
    let stillSince = performance.now()
    const start = performance.now()
    const tick = (now: number) => {
      const p = phaseRef.current
      if (p === 'live' || p === 'steady') {
        if (modeRef.current === 'drift' && !reduce) {
          const t = (now - start) / 1000
          targetX.set(REST.x + Math.sin(t * 0.42) * 72 + Math.sin(t * 0.17) * 18)
          targetY.set(REST.y + Math.sin(t * 0.29 + 1.2) * 56)
        }
        const x = cx.get()
        const y = cy.get()
        const ids = inView(x, y)
        const key = ids.join(',')
        if (key !== seenKey.current) {
          seenKey.current = key
          setSeen(ids)
        }
        if (Math.hypot(x - anchorX, y - anchorY) > 3) {
          anchorX = x
          anchorY = y
          stillSince = now
          if (p === 'steady') go('live')
          ring.set(0)
        } else if (modeRef.current === 'follow' && ids.length > 0) {
          const held = now - stillSince - 450
          if (held > 0) {
            if (p !== 'steady') go('steady')
            const progress = Math.min(1, held / 1300)
            ring.set(progress)
            if (progress >= 1) capture()
          }
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [capture, cx, cy, go, reduce, ring, targetX, targetY])

  const aim = (x: number, y: number) => {
    targetX.set(clamp(REST.x + (x - REST.x) * FOLLOW.x, RANGE.x[0], RANGE.x[1]))
    targetY.set(clamp(REST.y + (y - REST.y) * FOLLOW.y, RANGE.y[0], RANGE.y[1]))
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || reduce || !canvasRef.current) return
    const p = phaseRef.current
    if (p !== 'live' && p !== 'steady') return
    modeRef.current = 'follow'
    const rect = canvasRef.current.getBoundingClientRect()
    const k = rect.width / W
    const x = (e.clientX - rect.left) / k
    const y = (e.clientY - rect.top) / k
    // The phone holds still while the pointer is on its bottom controls, so the shutter can be clicked
    const onControls = Math.abs(x - cx.get()) < PHONE_W / 2 && y - cy.get() > BEZEL + BAND_TOP - PHONE_H / 2
    if (!onControls) aim(x, y)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
      e.preventDefault()
      capture()
      return
    }
    const step = 24
    const move: Record<string, [number, number]> = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    }
    const d = move[e.key]
    if (!d) return
    e.preventDefault()
    const p = phaseRef.current
    if (p !== 'live' && p !== 'steady') return
    modeRef.current = 'follow'
    targetX.set(clamp(targetX.get() + d[0], RANGE.x[0], RANGE.x[1]))
    targetY.set(clamp(targetY.get() + d[1], RANGE.y[0], RANGE.y[1]))
  }

  const live = phase === 'live' || phase === 'steady'
  const n = live ? seen.length : counted.length
  const pills = n === 1 ? '1 pill' : `${n} pills`
  const chip =
    phase === 'steady'
      ? 'Hold steady'
      : phase === 'taking'
        ? 'Taking 3 photos · hold still'
        : phase === 'result' || phase === 'photos'
          ? pills
          : seen.length > 0
            ? 'Live estimate'
            : 'Point at the tray'
  const chipColor = phase === 'live' && seen.length === 0 ? C.amber : C.green
  const hint =
    phase === 'taking'
      ? 'Keep the phone still over the tray'
      : seen.length > 0
        ? 'Hold steady · photos are taken by themselves'
        : 'Hold over the tray; it counts by itself'
  const dotColor = phase === 'steady' || phase === 'taking' ? C.steady : live ? C.live : C.green

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[520px]">
      <div
        className="relative"
        style={scale === null ? { aspectRatio: `${W} / ${H}` } : { height: H * scale }}
      >
        <div
          ref={canvasRef}
          role="group"
          aria-roledescription="interactive demo"
          aria-label="Eir Count demo. Move the phone over the tray with the mouse or the arrow keys, then hold still or press the shutter to count."
          tabIndex={0}
          onPointerMove={onPointerMove}
          onPointerLeave={() => (modeRef.current = 'drift')}
          onKeyDown={onKeyDown}
          className="absolute left-0 top-0 rounded-[40px] outline-none focus-visible:ring-2 focus-visible:ring-eir-green/50"
          style={{
            width: W,
            height: H,
            transform: `scale(${scale ?? 1})`,
            transformOrigin: '0 0',
            visibility: scale === null ? 'hidden' : 'visible',
          }}
        >
          {/* The tray on the counter */}
          <TrayArt />

          {/* The phone */}
          <motion.div
            className="absolute left-0 top-0"
            style={{ x: phoneX, y: phoneY, rotate: reduce ? 0 : tilt, width: PHONE_W, height: PHONE_H }}
          >
            <div className="absolute inset-4 translate-x-6 translate-y-10 rounded-[44px] bg-black/45 blur-2xl" aria-hidden="true" />
            <div
              className="relative h-full w-full rounded-[44px] bg-[#101413] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.14)]"
              style={{ padding: BEZEL }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[36px] font-sans" style={{ background: C.band }}>
                {/* Status bar */}
                <div className="absolute inset-x-0 top-0 flex h-[30px] items-center justify-between pl-[24px] pr-[18px] text-[11px] font-semibold text-white">
                  <span>9:41</span>
                  <StatusIcons />
                </div>
                <div className="absolute left-1/2 top-[8px] h-[21px] w-[70px] -translate-x-1/2 rounded-full bg-black" />

                {/* Top band: menu dot, state chip, who is counting */}
                <div className="absolute left-[10px] top-[36px] flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white shadow">
                  <MenuGlyph />
                </div>
                <div
                  className="absolute right-[10px] top-[36px] flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white text-[13px] font-bold shadow"
                  style={{ color: C.green }}
                >
                  +
                </div>
                <div className="absolute inset-x-[42px] top-[39px] flex justify-center">
                  <span
                    className="whitespace-nowrap rounded-[11px] bg-white/[0.92] px-[9px] py-[4px] text-[9.5px] font-bold shadow"
                    style={{ color: chipColor }}
                  >
                    {chip}
                  </span>
                </div>

                {/* Live view: the patch of tray under the camera */}
                <div className="absolute left-0 overflow-hidden rounded-t-[16px]" style={{ top: VIEW_TOP, width: SCREEN_W, height: VIEW_H }}>
                  <motion.div
                    className="absolute left-0 top-0 will-change-transform"
                    style={{ x: camX, y: camY, scale: ZOOM, originX: 0, originY: 0, width: W, height: H }}
                  >
                    <TrayArt />
                    <Dots ids={live ? seen : counted} color={dotColor} />
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_36px_rgba(0,0,0,0.28)]" />
                  {flash > 0 && !reduce && (
                    <motion.div
                      key={flash}
                      className="pointer-events-none absolute inset-0 bg-white"
                      initial={{ opacity: 0.9 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </div>

                {/* Bottom band: LIVE count, shutter with the hold ring, TARGET */}
                <motion.div
                  className="absolute inset-x-0"
                  style={{ top: BAND_TOP, height: SCREEN_H - BAND_TOP }}
                  animate={{ opacity: live || phase === 'taking' ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-[68px]">
                    <div className="absolute left-[16px] top-1/2 -translate-y-1/2">
                      <p className="text-[7.5px] font-bold tracking-[0.16em] text-white/60">LIVE</p>
                      <p className="text-[24px] font-bold leading-none tabular-nums text-white">{n > 0 ? n : '–'}</p>
                    </div>
                    <div className="absolute inset-y-0 left-1/2 flex w-[56px] -translate-x-1/2 items-center justify-center">
                      <svg viewBox="0 0 56 56" className="absolute h-[56px] w-[56px] -rotate-90" aria-hidden="true">
                        <circle cx="28" cy="28" r="23" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="4.5" />
                        <motion.circle
                          cx="28"
                          cy="28"
                          r="23"
                          fill="none"
                          stroke={C.ring}
                          strokeWidth="4.5"
                          strokeLinecap="round"
                          strokeDasharray={RING_C}
                          strokeDashoffset={ringOffset}
                          style={{ opacity: ringOpacity }}
                        />
                      </svg>
                      <motion.button
                        type="button"
                        aria-label="Shutter: count the pills in view"
                        onClick={capture}
                        whileTap={reduce ? undefined : { scale: 0.88 }}
                        disabled={!live}
                        className="relative h-[38px] w-[38px] rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      />
                    </div>
                    <div className="absolute right-[14px] top-1/2 -translate-y-1/2 text-right">
                      <p className="text-[7.5px] font-bold tracking-[0.16em] text-white/60">TARGET</p>
                      <p className="text-[24px] font-bold leading-none text-white">+</p>
                    </div>
                  </div>
                  <p className="mx-auto max-w-[196px] text-center text-[8.5px] leading-snug text-white/90">{hint}</p>
                </motion.div>
                <div className="absolute bottom-[6px] left-1/2 h-[3px] w-[78px] -translate-x-1/2 rounded-full bg-white/70" />

                {/* The count bubble, then the minimized bar while looking at the photo */}
                <AnimatePresence>
                  {phase === 'result' && (
                    <motion.div
                      key="bubble"
                      className="absolute inset-x-[6px] bottom-[6px] rounded-[18px] bg-white px-[14px] pb-[12px] pt-[7px] shadow-[0_-8px_24px_rgba(0,0,0,0.25)]"
                      initial={reduce ? { opacity: 0 } : { y: 80, opacity: 0, scaleX: 0.9 }}
                      animate={{ y: 0, opacity: 1, scaleX: 1 }}
                      exit={reduce ? { opacity: 0 } : { y: 90, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    >
                      <div className="mx-auto mb-[8px] h-[3px] w-[30px] rounded-full bg-[#D9D9D4]" />
                      <p className="text-[8px] font-semibold tracking-[0.18em]" style={{ color: C.muted }}>
                        PILLS COUNTED
                      </p>
                      <div className="mt-[2px] flex items-end gap-[5px]">
                        <span className="text-[46px] font-bold leading-[0.95] tracking-tight tabular-nums" style={{ color: C.ink }}>
                          {counted.length}
                        </span>
                        <span className="mb-[5px] h-[9px] w-[9px] rounded-full" style={{ background: C.gold }} />
                      </div>
                      <p className="mt-[8px] text-[9px] font-semibold leading-snug" style={{ color: C.green }}>
                        ✓ High confidence · 3 of 3 photos agree
                      </p>
                      <div className="mt-[12px] grid grid-cols-2 gap-[8px]">
                        <button
                          type="button"
                          onClick={newCount}
                          className="h-[32px] rounded-full border-[1.5px] border-[#DAD6CE] text-[8.5px] font-bold tracking-[0.14em]"
                          style={{ color: C.ink }}
                        >
                          NEW COUNT
                        </button>
                        <button
                          type="button"
                          onClick={() => go('photos')}
                          className="h-[32px] rounded-full text-[8.5px] font-bold tracking-[0.14em] text-white"
                          style={{ background: C.green }}
                        >
                          VIEW PHOTOS
                        </button>
                      </div>
                    </motion.div>
                  )}
                  {phase === 'photos' && (
                    <motion.div
                      key="mini"
                      className="absolute inset-x-[6px] bottom-[6px] flex items-center justify-between rounded-[16px] bg-white px-[12px] py-[8px] shadow-[0_-6px_18px_rgba(0,0,0,0.22)]"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 40, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    >
                      <button type="button" onClick={() => go('result')} className="flex items-end gap-[4px] text-left">
                        <span className="text-[22px] font-bold leading-none tabular-nums" style={{ color: C.ink }}>
                          {counted.length}
                        </span>
                        <span className="mb-[3px] h-[6px] w-[6px] rounded-full" style={{ background: C.gold }} />
                        <span className="mb-[2px] ml-[4px] text-[8.5px] font-semibold" style={{ color: C.green }}>
                          ✓ High confidence
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={newCount}
                        className="h-[28px] rounded-full px-[11px] text-[8px] font-bold tracking-[0.14em] text-white"
                        style={{ background: C.green }}
                      >
                        NEW COUNT
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-text-muted">
        {touch ? <Hand size={14} aria-hidden="true" /> : <MousePointer2 size={14} aria-hidden="true" />}
        {touch
          ? 'Interactive demo: tap the shutter to count the tray.'
          : 'Interactive demo: move over the tray, then hold still or click the shutter.'}
      </p>
      <p className="sr-only" aria-live="polite">
        {phase === 'result' ? `${counted.length} pills counted, high confidence.` : ''}
      </p>
    </div>
  )
}
