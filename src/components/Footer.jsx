import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 dark:border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="text-lg font-semibold text-slate-900 dark:text-white">
            Property Guide Hyderabad
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
            Helping you find the best homes in Hyderabad. List properties for FREE and connect
            buyers with sellers.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white/90">Quick Links</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-white/70">
            <Link className="hover:text-slate-900 dark:hover:text-white" to="/properties">
              Explore Properties
            </Link>
            <Link className="hover:text-slate-900 dark:hover:text-white" to="/list-property">
              List Property
            </Link>
            <Link className="hover:text-slate-900 dark:hover:text-white" to="/about">
              About
            </Link>
            <Link className="hover:text-slate-900 dark:hover:text-white" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white/90">Contact</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-white/70">
            <a className="hover:text-slate-900 dark:hover:text-white" href="tel:8978222986">
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
