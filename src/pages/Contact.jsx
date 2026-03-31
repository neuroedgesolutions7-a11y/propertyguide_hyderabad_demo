import PageShell from '../components/PageShell.jsx'
import Stagger, { StaggerItem } from '../components/motion/Stagger.jsx'
import Reveal from '../components/motion/Reveal.jsx'

export default function Contact() {
  return (
    <PageShell>
      <section className="pt-10">
        <Reveal>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Contact
          </h1>
          <p className="mt-2 text-slate-600 dark:text-white/70 text-sm">
            Phone: 8978222986 • Hyderabad, India
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-6 lg:grid-cols-2">
          <StaggerItem>
            <div className="glass rounded-3xl p-8">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Send a message</div>
              <form className="mt-5 grid gap-4">
                <input
                  className="w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Your Name"
                />
                <input
                  className="w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Phone"
                />
                <textarea
                  rows={5}
                  className="w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Message"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
                >
                  Send (UI Only)
                </button>
              </form>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass rounded-3xl overflow-hidden">
              <iframe
                title="Hyderabad Map"
                className="h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Hyderabad%2C%20India&z=12&output=embed"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </section>
    </PageShell>
  )
}
