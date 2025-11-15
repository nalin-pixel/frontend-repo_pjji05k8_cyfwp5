import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white text-slate-800">
      {/* Spline background */}
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Pastel overlay to soften tones */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(196,181,253,0.2),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(253,186,116,0.18),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 ring-sky-200 bg-sky-50 text-sky-700">Agenzia Marketing B2B</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Cresci il tuo business con strategie digitali chiare e misurabili
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Il Marketing Much More S.r.l. progetta E‑commerce, contenuti e campagne advertising con approccio data‑driven e creatività a impatto.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contatti" className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              Parla con un esperto <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/servizi" className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50 transition-all">
              Vedi tutti i servizi
            </Link>
          </div>
        </motion.div>

        {/* Marketing-themed floating badges */}
        <div className="relative mt-10">
          <motion.ul
            className="flex flex-wrap gap-3"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            {['SEO', 'ADV', 'Content', 'E‑commerce', 'Analytics'].map((tag, i) => (
              <motion.li
                key={tag}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.06 }}
                className="px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200"
              >
                {tag}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Subtle gradient at bottom for contrast */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
