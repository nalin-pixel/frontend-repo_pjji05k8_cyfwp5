import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, FileText, Megaphone, Search, Banknote } from 'lucide-react'

const services = [
  { slug: 'ecommerce', title: 'E‑commerce', icon: ShoppingBag, desc: 'Strategia, piattaforma e crescita del tuo canale online.' },
  { slug: 'digital-content', title: 'Digital Content', icon: FileText, desc: 'Contenuti editoriali, social e video per generare domanda.' },
  { slug: 'digital-advertising', title: 'Digital Advertising', icon: Megaphone, desc: 'Campagne performance su Google, Meta, LinkedIn e programmatic.' },
  { slug: 'seo', title: 'SEO', icon: Search, desc: 'Ottimizzazione tecnica e contenuti per scalare l’orgánico.' },
  { slug: 'finanziamenti', title: 'Finanziamenti', icon: Banknote, desc: 'Accesso a bandi e incentivi per accelerare i progetti digitali.' },
]

export default function ServicesGrid({ withTitle = true }) {
  return (
    <section className="relative bg-[#0B0B0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {withTitle && <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Servizi</h2>}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl p-6 bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all">
              <s.icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <div className="mt-6">
                <Link to={`/servizi/${s.slug}`} className="inline-flex items-center gap-2 text-cyan-300 group-hover:gap-3 transition-all">Scopri di più →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
