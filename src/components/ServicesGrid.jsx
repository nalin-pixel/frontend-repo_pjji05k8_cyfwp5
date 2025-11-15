import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, FileText, Megaphone, Search, Banknote } from 'lucide-react'

const cards = [
  { slug: 'ecommerce', title: 'E‑commerce', icon: ShoppingBag, color: 'from-sky-100 to-sky-50', text: 'text-sky-900', ring: 'ring-sky-200', desc: 'Strategia, piattaforma e crescita del tuo canale online.' },
  { slug: 'digital-content', title: 'Digital Content', icon: FileText, color: 'from-indigo-100 to-indigo-50', text: 'text-indigo-900', ring: 'ring-indigo-200', desc: 'Contenuti editoriali, social e video per generare domanda.' },
  { slug: 'digital-advertising', title: 'Digital Advertising', icon: Megaphone, color: 'from-amber-100 to-amber-50', text: 'text-amber-900', ring: 'ring-amber-200', desc: 'Campagne performance su Google, Meta, LinkedIn e programmatic.' },
  { slug: 'seo', title: 'SEO', icon: Search, color: 'from-emerald-100 to-emerald-50', text: 'text-emerald-900', ring: 'ring-emerald-200', desc: 'Ottimizzazione tecnica e contenuti per scalare l’organico.' },
  { slug: 'finanziamenti', title: 'Finanziamenti', icon: Banknote, color: 'from-rose-100 to-rose-50', text: 'text-rose-900', ring: 'ring-rose-200', desc: 'Bandi e incentivi per accelerare i progetti digitali.' },
]

export default function ServicesGrid({ withTitle = true }) {
  return (
    <section className="relative bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {withTitle && <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Servizi</h2>}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group rounded-2xl p-6 bg-gradient-to-b ${s.color} ring-1 ${s.ring} hover:-translate-y-1 transition-all`}
            >
              <s.icon className={`h-6 w-6 ${s.text}`} />
              <h3 className={`mt-4 text-xl font-semibold text-slate-900`}>{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <div className="mt-6">
                <Link to={`/servizi/${s.slug}`} className="inline-flex items-center gap-2 text-sky-700 group-hover:gap-3 transition-all">Scopri di più →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
