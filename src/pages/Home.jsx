import { Link } from 'react-router-dom'

import AnimatedCounter from '../components/AnimatedCounter.jsx'
import CTASection from '../components/CTASection.jsx'
import FeaturedCarousel from '../components/FeaturedCarousel.jsx'
import PageShell from '../components/PageShell.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import properties from '../data/properties.js'
import testimonials from '../data/testimonials.js'
import Reveal from '../components/motion/Reveal.jsx'
import Stagger, { StaggerItem } from '../components/motion/Stagger.jsx'

export default function Home() {
  return (
    <PageShell>
      <section className="pt-14 md:pt-20">
        <Reveal>
          <div className="glass rounded-3xl overflow-hidden relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              className="absolute inset-0 block dark:hidden"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.88) 55%, rgba(255,255,255,0.94) 100%)',
              }}
            />
            <div
              className="absolute inset-0 hidden dark:block"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(2,6,23,0.35) 0%, rgba(2,6,23,0.80) 100%)',
              }}
            />
            <div
              className="absolute inset-0 block dark:hidden"
              style={{
                backgroundImage:
                  'radial-gradient(760px 280px at 18% 10%, rgba(56,189,248,0.22), transparent 60%), radial-gradient(900px 320px at 92% 18%, rgba(15,23,42,0.06), transparent 55%)',
              }}
            />
            <div
              className="absolute inset-0 hidden dark:block"
              style={{
                backgroundImage:
                  'radial-gradient(700px 260px at 18% 12%, rgba(56,189,248,0.35), transparent 60%), radial-gradient(900px 320px at 90% 20%, rgba(56,189,248,0.18), transparent 55%)',
              }}
            />

            <div className="relative p-8 md:p-12">
              <p className="text-slate-600 dark:text-white/70 text-sm">
                Premium real estate service in Hyderabad
              </p>
              <h1 className="mt-3 text-3xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Find Your Dream Property in Hyderabad
              </h1>
              <p className="mt-4 max-w-2xl text-slate-600 dark:text-white/70">
                Find best homes, list properties for FREE, and connect buyers and sellers with a premium experience.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

              <Stagger className="mt-10 grid gap-4 sm:grid-cols-3">
                <StaggerItem>
                  <AnimatedCounter label="Premium Properties" value={120} suffix="+" />
                </StaggerItem>
                <StaggerItem>
                  <AnimatedCounter label="Happy Clients" value={650} suffix="+" />
                </StaggerItem>
                <StaggerItem>
                  <AnimatedCounter label="Hyderabad Locations" value={25} suffix="+" />
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <FeaturedCarousel properties={properties} />
      </Reveal>

      <section className="mt-16">
        <Reveal>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/70">Services</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Buy, Sell, or Rent — with confidence
          </h2>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 md:grid-cols-3">
          <StaggerItem>
            <div className="glass rounded-3xl p-7">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Buy</div>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                Handpicked listings in premium Hyderabad neighborhoods. Shortlist faster with a clean browsing experience.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass rounded-3xl p-7">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Sell</div>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                List your property for FREE and reach genuine buyers. Showcase with a luxury-first look and feel.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass rounded-3xl p-7">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Rent</div>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                Find high-quality rentals near IT hubs and metro lines. Connect quickly via call or WhatsApp.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      <section className="mt-16">
        <Reveal>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/70">Testimonials</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Loved by Hyderabad clients
          </h2>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Reveal>
        <CTASection />
      </Reveal>
    </PageShell>
  )
}
