import { motion } from 'framer-motion'

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
      className="glass rounded-3xl p-6"
    >
      <p className="text-sm text-slate-700 dark:text-white/75">“{testimonial.quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/15" />
        <div className="leading-tight">
          <div className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
          <div className="text-xs text-slate-600 dark:text-white/60">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}
