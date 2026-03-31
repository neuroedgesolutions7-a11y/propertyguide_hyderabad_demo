import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useRef } from 'react'

import PropertyCard from './PropertyCard.jsx'

export default function FeaturedCarousel({ properties }) {
  const scrollerRef = useRef(null)

  const items = useMemo(() => properties.slice(0, 6), [properties])

  const scrollBy = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.9), behavior: 'smooth' })
  }

  return (
    <section className="mt-14">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/70">Featured</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Premium properties curated for you
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="glass-soft rounded-2xl p-2 hover:bg-white/80 dark:hover:bg-white/10"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} className="text-slate-900 dark:text-white" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="glass-soft rounded-2xl p-2 hover:bg-white/80 dark:hover:bg-white/10"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} className="text-slate-900 dark:text-white" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-6 flex gap-4 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((p) => (
          <div key={p.id} className="min-w-[290px] max-w-[290px] md:min-w-[340px] md:max-w-[340px]">
            <PropertyCard property={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
