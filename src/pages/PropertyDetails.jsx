import { useMemo, useState } from 'react'
import { Bath, BedDouble, CarFront, MapPin, PhoneCall, MessageCircle, Ruler } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import PageShell from '../components/PageShell.jsx'
import properties from '../data/properties.js'

const phone = '8978222986'
const whatsappNumber = '918978222986'

export default function PropertyDetails() {
  const { id } = useParams()

  const property = useMemo(() => properties.find((p) => p.id === id), [id])
  const [activeIndex, setActiveIndex] = useState(0)

  if (!property) {
    return (
      <PageShell>
        <section className="pt-10">
          <div className="glass rounded-3xl p-8">
            <div className="text-xl font-semibold text-slate-900 dark:text-white">Property not found</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
              The property you’re looking for doesn’t exist.
            </p>
            <Link
              to="/properties"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
            >
              Back to Properties
            </Link>
          </div>
        </section>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <section className="pt-10">
        <div className="flex flex-col gap-2">
          <div className="text-slate-600 dark:text-white/70 text-sm flex items-center gap-2">
            <MapPin size={14} className="text-brand-accent" />
            <span>{property.location}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {property.title}
          </h1>
          <div className="text-slate-600 dark:text-white/80 text-sm">
            <span className="font-semibold text-slate-900 dark:text-white">{property.priceLabel}</span>
            <span className="text-slate-400 dark:text-white/50"> · </span>
            <span className="text-slate-600 dark:text-white/70">{property.status}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="aspect-[16/10] bg-white/5">
              <img
                src={property.images?.[activeIndex]}
                alt={property.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {property.images.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    'relative h-16 w-24 overflow-hidden rounded-2xl ring-1',
                    idx === activeIndex
                      ? 'ring-brand-accent/70'
                      : 'ring-white/10 hover:ring-white/20',
                  ].join(' ')}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="glass rounded-3xl p-6">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Property Info</div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-white/70">
                <div className="flex items-center gap-2 rounded-2xl bg-slate-900/5 px-3 py-3 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
                  <Ruler size={14} className="text-brand-accent" />
                  <span>{property.area}</span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-slate-900/5 px-3 py-3 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
                  <BedDouble size={14} className="text-brand-accent" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-slate-900/5 px-3 py-3 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
                  <Bath size={14} className="text-brand-accent" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-slate-900/5 px-3 py-3 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
                  <CarFront size={14} className="text-brand-accent" />
                  <span>{property.parking} Parking</span>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-accent px-5 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
                >
                  <PhoneCall size={18} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hi Property Guide Hyderabad, I am interested in: ${property.title} (${property.location}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-900/10 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Amenities</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {property.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-slate-900/5 px-3 py-1.5 text-xs text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-white/75 dark:ring-white/10"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 glass rounded-3xl p-8">
          <div className="text-sm font-semibold text-slate-900 dark:text-white">Description</div>
          <p className="mt-3 text-sm text-slate-600 dark:text-white/70 leading-relaxed">{property.description}</p>
        </div>
      </section>
    </PageShell>
  )
}
