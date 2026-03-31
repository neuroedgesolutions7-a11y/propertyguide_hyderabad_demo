import { motion } from 'framer-motion'

export default function PageShell({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-[calc(100svh-80px)]"
    >
      {children}
    </motion.main>
  )
}
