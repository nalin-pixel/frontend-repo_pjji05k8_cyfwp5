import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0B0B0F] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.15),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 ring-white/20 bg-white/5 backdrop-blur">Agenzia B2B</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
            Cresci il tuo business con marketing digitale end‑to‑end
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Il Marketing Much More S.r.l. progetta e scala E‑commerce, contenuti e advertising performance‑driven per aziende che puntano alla leadership.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contatti" className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium shadow hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Parla con un esperto <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/servizi" className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition-all">
              Vedi tutti i servizi
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
