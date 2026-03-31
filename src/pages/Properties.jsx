import { useMemo, useState } from 'react'

import FilterSidebar from '../components/FilterSidebar.jsx'
import PageShell from '../components/PageShell.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import Reveal from '../components/motion/Reveal.jsx'
import Stagger, { StaggerItem } from '../components/motion/Stagger.jsx'
import properties, { locations, propertyTypes } from '../data/properties.js'

export default function Properties() {
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    q: '',
  })

  const filtered = useMemo(() => {
    const min = filters.minPrice ? Number(filters.minPrice) : null
    const max = filters.maxPrice ? Number(filters.maxPrice) : null
    const q = filters.q.trim().toLowerCase()

    return properties.filter((p) => {
      if (filters.type && p.type !== filters.type) return false

      if (filters.location) {
        const loc = filters.location.toLowerCase()
        if (!p.location.toLowerCase().includes(loc)) return false
      }

      if (min !== null && Number.isFinite(min) && p.price < min) return false
      if (max !== null && Number.isFinite(max) && p.price > max) return false

      if (q) {
        const hay = `${p.title} ${p.location} ${p.type} ${p.status}`.toLowerCase()
        if (!hay.includes(q)) return false
      }

      return true
    })
  }, [filters])

  const onChange = (patch) => setFilters((prev) => ({ ...prev, ...patch }))

  const onReset = () =>
    setFilters({
      type: '',
      location: '',
      minPrice: '',
      maxPrice: '',
      q: '',
    })

  return (
    <PageShell>
      <section className="pt-10">
        <Reveal>
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Properties
            </h1>
            <p className="mt-2 text-slate-600 dark:text-white/70 text-sm">
              Browse premium listings across Hyderabad. Use filters to refine results.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <FilterSidebar
              filters={filters}
              locations={locations}
              propertyTypes={propertyTypes}
              onChange={onChange}
              onReset={onReset}
            />
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-slate-600 dark:text-white/70">
                  Showing{' '}
                  <span className="text-slate-900 dark:text-white font-semibold">{filtered.length}</span>{' '}
                  results
                </div>
              </div>
            </Reveal>

            <Stagger className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <StaggerItem key={p.id}>
                  <PropertyCard property={p} />
                </StaggerItem>
              ))}
            </Stagger>

            {filtered.length === 0 ? (
              <div className="mt-6 glass rounded-3xl p-8 text-slate-600 dark:text-white/70">
                No properties match your filters.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
