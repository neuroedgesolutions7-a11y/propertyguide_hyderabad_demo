import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import useScrollPosition from '../hooks/useScrollPosition.js'
import { useTheme } from '../hooks/ThemeProvider.jsx'

const navLinkBase =
  'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200'

export default function Navbar() {
  const scrolled = useScrollPosition(12)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const links = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'Properties', to: '/properties' },
      { label: 'List Property', to: '/list-property' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
    []
  )

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor:
          theme === 'dark'
            ? scrolled
              ? 'rgba(15, 23, 42, 0.55)'
              : 'rgba(15, 23, 42, 0.0)'
            : scrolled
              ? 'rgba(248, 250, 252, 0.92)'
              : 'rgba(255, 255, 255, 0.0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        boxShadow:
          theme === 'dark'
            ? scrolled
              ? '0 10px 30px rgba(0,0,0,0.25)'
              : '0 0 0 rgba(0,0,0,0)'
            : scrolled
              ? '0 10px 30px rgba(15,23,42,0.08)'
              : '0 0 0 rgba(15,23,42,0)',
        borderBottomColor:
          theme === 'dark'
            ? scrolled
              ? 'rgba(255,255,255,0.10)'
              : 'rgba(255,255,255,0.0)'
            : scrolled
              ? 'rgba(148,163,184,0.35)'
              : 'rgba(15,23,42,0.0)',
      }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-50 border-b dark:[&]:border-white/10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8 xl:w-[80%] xl:max-w-none xl:mx-auto xl:px-0">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-brand-accent/15 ring-1 ring-brand-accent/30 grid place-items-center">
            <span className="text-brand-accent font-bold">PG</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm text-slate-600 dark:text-white/70">Property Guide</div>
            <div className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">Hyderabad</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  navLinkBase,
                  isActive
                    ? 'bg-brand-accent/15 text-slate-900 ring-1 ring-brand-accent/25 dark:bg-white/10 dark:text-white dark:ring-white/15'
                    : 'text-slate-700 hover:bg-brand-accent/10 hover:text-slate-900 dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white',
                ].join(' ')
              }
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 inline-flex items-center justify-center rounded-xl border border-slate-900/10 bg-slate-900/5 p-2 text-slate-900 backdrop-blur hover:bg-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/properties"
            className="ml-2 inline-flex items-center rounded-xl bg-brand-accent px-4 py-2 text-sm font-semibold text-slate-900 shadow-soft transition hover:brightness-110"
          >
            Explore
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-900/15 bg-white/80 p-2 text-slate-900 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-900/10 bg-slate-50/95 backdrop-blur-xl dark:border-white/10 dark:bg-brand-primary/70">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1 lg:px-8 xl:w-[80%] xl:max-w-none xl:mx-auto xl:px-0">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  [
                    navLinkBase,
                    'w-full',
                    isActive
                      ? 'bg-brand-accent/15 text-slate-900 ring-1 ring-brand-accent/25 dark:bg-white/10 dark:text-white dark:ring-white/15'
                      : 'text-slate-700 hover:bg-brand-accent/10 hover:text-slate-900 dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white',
                  ].join(' ')
                }
                end={l.to === '/'}
              >
                {l.label}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={toggleTheme}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light theme' : 'Dark theme'}
            </button>

            <Link
              to="/properties"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-accent px-4 py-2 text-sm font-semibold text-slate-900 shadow-soft"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  )
}
