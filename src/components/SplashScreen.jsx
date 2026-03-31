import { motion } from 'framer-motion'

import logo from '../assets/logo/image.png'

export default function SplashScreen({ onDone }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-white dark:bg-brand-primary"
      aria-label="Welcome"
    >
      <div className="relative flex flex-col items-center gap-4 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
          className="h-24 w-24 overflow-hidden rounded-[28px] bg-white ring-1 ring-slate-900/10 shadow-soft dark:bg-white/5 dark:ring-white/10"
        >
          <img src={logo} alt="Property Guide Hyderabad" className="h-full w-full object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center"
        >
          <div className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Property Guide Hyderabad
          </div>
          <div className="mt-1 text-sm text-slate-600 dark:text-white/70">Loading premium experience…</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-2 h-2 w-56 overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10"
          aria-hidden="true"
        >
          <motion.div
            initial={{ x: '-60%' }}
            animate={{ x: '140%' }}
            transition={{ duration: 1.15, ease: 'easeInOut' }}
            className="h-full w-20 rounded-full bg-gradient-to-r from-brand-accent to-brand-blue"
            onAnimationComplete={onDone}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
