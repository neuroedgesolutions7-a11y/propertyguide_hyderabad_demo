import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedNumber({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 80, damping: 18 })

  useEffect(() => {
    if (inView) mv.set(value)
  }, [inView, mv, value])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    return spring.on('change', (latest) => {
      el.textContent = Math.round(latest).toString()
    })
  }, [spring])

  return <span ref={ref} />
}

export default function AnimatedCounter({ label, value, suffix }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
      className="glass-soft rounded-2xl p-5"
    >
      <div className="text-2xl font-semibold tracking-tight text-brand-blue dark:text-white">
        <AnimatedNumber value={value} />
        {suffix ? <span>{suffix}</span> : null}
      </div>
      <div className="mt-1 text-sm text-slate-600 dark:text-white/70">{label}</div>
    </motion.div>
  )
}
