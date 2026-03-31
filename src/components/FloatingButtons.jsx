import { PhoneCall, MessageCircle } from 'lucide-react'

const phone = '8978222986'
const whatsappNumber = '918978222986'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          'Hi Property Guide Hyderabad, I am interested in a property.'
        )}`}
        target="_blank"
        rel="noreferrer"
        className="glass-soft group inline-flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-white/80 dark:hover:bg-white/10"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-brand-blue group-hover:scale-105 transition" size={20} />
      </a>

      <a
        href={`tel:${phone}`}
        className="glass-soft group inline-flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-white/80 dark:hover:bg-white/10 md:hidden"
        aria-label="Call"
      >
        <PhoneCall className="text-brand-accent dark:text-white group-hover:scale-105 transition" size={20} />
      </a>
    </div>
  )
}
