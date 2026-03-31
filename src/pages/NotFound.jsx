import { Link } from 'react-router-dom'

import PageShell from '../components/PageShell.jsx'

export default function NotFound() {
  return (
    <PageShell>
      <section className="pt-16">
        <div className="glass rounded-3xl p-10 text-center">
          <div className="text-2xl font-semibold text-slate-900 dark:text-white">Page not found</div>
          <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
            The page you are looking for doesn’t exist.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
          >
            Go Home
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
