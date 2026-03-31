import { SlidersHorizontal } from 'lucide-react'

export default function FilterSidebar({
  filters,
  locations,
  propertyTypes,
  onChange,
  onReset,
}) {
  return (
    <aside className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-brand-accent" />
          <div className="text-sm font-semibold text-slate-900 dark:text-white">Filters</div>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="text-xs text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
        >
          Reset
        </button>
      </div>

      <div className="mt-5 grid gap-4">
        <div>
          <label className="text-xs text-slate-600 dark:text-white/70">Property Type</label>
          <select
            value={filters.type}
            onChange={(e) => onChange({ type: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <option value="">All</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs text-slate-600 dark:text-white/70">Location</label>
          <select
            value={filters.location}
            onChange={(e) => onChange({ location: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <option value="">All</option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-slate-600 dark:text-white/70">Min Price (₹)</label>
            <input
              value={filters.minPrice}
              onChange={(e) => onChange({ minPrice: e.target.value })}
              placeholder="0"
              inputMode="numeric"
              className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>
          <div>
            <label className="text-xs text-slate-600 dark:text-white/70">Max Price (₹)</label>
            <input
              value={filters.maxPrice}
              onChange={(e) => onChange({ maxPrice: e.target.value })}
              placeholder="30000000"
              inputMode="numeric"
              className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-600 dark:text-white/70">Search</label>
          <input
            value={filters.q}
            onChange={(e) => onChange({ q: e.target.value })}
            placeholder="e.g. 3BHK, Villa, Banjara Hills"
            className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
        </div>
      </div>
    </aside>
  )
}
