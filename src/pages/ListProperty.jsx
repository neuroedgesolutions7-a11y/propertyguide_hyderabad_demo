import { ImageUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import PageShell from '../components/PageShell.jsx'
import Stagger, { StaggerItem } from '../components/motion/Stagger.jsx'
import Reveal from '../components/motion/Reveal.jsx'

const initialState = {
  name: '',
  phone: '',
  type: '',
  location: '',
  price: '',
}

export default function ListProperty() {
  const [form, setForm] = useState(initialState)
  const [files, setFiles] = useState([])
  const [previews, setPreviews] = useState([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const urls = files.map((f) => URL.createObjectURL(f))
    setPreviews(urls)

    return () => {
      urls.forEach((u) => URL.revokeObjectURL(u))
    }
  }, [files])

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialState)
    setFiles([])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <PageShell>
      <section className="pt-10">
        <Reveal>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            List Property
          </h1>
          <p className="mt-2 text-slate-600 dark:text-white/70 text-sm">
            List your property for FREE. This is UI-only (no backend) — designed for a premium client demo.
          </p>
        </Reveal>

        {submitted ? (
          <Reveal>
            <div className="mt-6 glass rounded-3xl p-6">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Submitted</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                Thanks! Your property details were captured in the UI. In a real app, we’d send this to a backend.
              </p>
            </div>
          </Reveal>
        ) : null}

        <Stagger className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <StaggerItem>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-8">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Owner Details</div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-xs text-slate-600 dark:text-white/70">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs text-slate-600 dark:text-white/70">Phone</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    placeholder="8978222986"
                    inputMode="tel"
                  />
                </div>
              </div>

            <div className="mt-7 text-sm font-semibold text-slate-900 dark:text-white">Property Details</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-slate-600 dark:text-white/70">Property Type</label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  <option value="">Select</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Studio">Studio</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-600 dark:text-white/70">Location</label>
                <input
                  required
                  value={form.location}
                  onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="e.g. Gachibowli"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-slate-600 dark:text-white/70">Expected Price (₹)</label>
                <input
                  required
                  value={form.price}
                  onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-accent/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="e.g. 9800000"
                  inputMode="numeric"
                />
              </div>
            </div>

            <div className="mt-7">
              <label className="text-xs text-slate-600 dark:text-white/70">Upload Images</label>
              <div className="mt-2 rounded-3xl border border-dashed border-slate-900/15 bg-white/60 p-5 dark:border-white/15 dark:bg-white/5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-brand-accent/15 ring-1 ring-brand-accent/30 grid place-items-center">
                      <ImageUp size={18} className="text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">Add property photos</div>
                      <div className="text-xs text-slate-500 dark:text-white/60">PNG/JPG · multiple images supported</div>
                    </div>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setFiles(Array.from(e.target.files || []))}
                    className="text-sm text-slate-600 dark:text-white/70 file:mr-3 file:rounded-xl file:border-0 file:bg-slate-900/5 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-900 hover:file:bg-slate-900/10 dark:file:bg-white/10 dark:file:text-white dark:hover:file:bg-white/15"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:brightness-110"
            >
              Submit Property (UI Only)
            </button>
            </form>
          </StaggerItem>

          <StaggerItem>
            <div className="glass rounded-3xl p-8">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Preview</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                Uploaded images will appear here. This preview is purely for demo purposes.
              </p>

              {previews.length ? (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {previews.map((src) => (
                    <div key={src} className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-3xl bg-slate-900/5 p-6 text-sm text-slate-600 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-white/60 dark:ring-white/10">
                  No images selected.
                </div>
              )}
            </div>
          </StaggerItem>
        </Stagger>
      </section>
    </PageShell>
  )
}
