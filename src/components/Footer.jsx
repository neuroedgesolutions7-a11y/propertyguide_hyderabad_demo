import { Link } from 'react-router-dom'

import logo from '../assets/logo/image.png'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-brand-primary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6 lg:px-8 xl:w-[80%] xl:max-w-none xl:mx-auto xl:px-0">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
              <img src={logo} alt="Property Guide Hyderabad" className="h-full w-full object-contain" />
            </div>
            <div className="text-lg font-semibold text-slate-900 dark:text-white">
              Property Guide Hyderabad
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
            Helping you find the best homes in Hyderabad. List properties for FREE and connect
            buyers with sellers.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white/90">Quick Links</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-white/70">
            <Link className="hover:text-brand-accent" to="/properties">
              Explore Properties
            </Link>
            <Link className="hover:text-brand-accent" to="/list-property">
              List Property
            </Link>
            <Link className="hover:text-brand-accent" to="/about">
              About
            </Link>
            <Link className="hover:text-brand-accent" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white/90">Contact</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-white/70">
            <a className="hover:text-brand-accent" href="tel:8978222986">
              Phone: 8978222986
            </a>
            <div>Location: Hyderabad, India</div>
            <div className="text-xs text-slate-500 dark:text-white/50">
              © {new Date().getFullYear()} Property Guide Hyderabad
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
