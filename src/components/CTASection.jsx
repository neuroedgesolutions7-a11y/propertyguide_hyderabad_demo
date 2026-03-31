import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
      className="mt-16"
    >
      <div className="glass rounded-3xl p-8 md:p-12 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(700px 240px at 15% 10%, rgba(56,189,248,0.65), transparent 55%), radial-gradient(750px 260px at 90% 60%, rgba(56,189,248,0.35), transparent 55%)',
          }}
        />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-600 dark:text-white/70">
              Ready to take the next step?
            </div>
            <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              List your property for FREE or explore premium homes.
            </div>
            <div className="mt-3 text-sm text-slate-600 dark:text-white/70 max-w-2xl">
              We help buyers and sellers connect quickly with a polished, luxury-first experience.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/properties"
              className="inline-flex items-center justify-center rounded-2xl bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
            >
              Explore Properties
            </Link>
            <Link
              to="/list-property"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-900/10 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              List Property
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
