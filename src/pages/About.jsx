import PageShell from '../components/PageShell.jsx'

export default function About() {
  return (
    <PageShell>
      <section className="pt-10">
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          About
        </h1>
        <div className="mt-6 glass rounded-3xl p-8">
          <p className="text-slate-700 dark:text-white/75">
            Property Guide Hyderabad is a real estate service brand that helps people find the best homes,
            list properties for FREE, and connect buyers with sellers.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="glass-soft rounded-2xl p-5">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Mission</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                Make discovering and listing properties in Hyderabad simple, transparent, and premium.
              </p>
            </div>
            <div className="glass-soft rounded-2xl p-5">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Vision</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                Become Hyderabad’s most trusted guide for homes and real estate connections.
              </p>
            </div>
            <div className="glass-soft rounded-2xl p-5">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Why Choose Us</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                Curated listings, free property posting, and direct buyer-seller connections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
