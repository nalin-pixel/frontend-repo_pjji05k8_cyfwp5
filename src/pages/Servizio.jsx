import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const content = {
  ecommerce: {
    title: 'E‑commerce',
    intro: 'Progettiamo e ottimizziamo negozi online ad alte prestazioni: piattaforme, UX, cataloghi e funnel di conversione.',
    bullets: [
      'Analisi e strategia go‑to‑market',
      'Scelta piattaforma (Shopify, headless)',
      'UX/UI e CRO per massimizzare le conversioni',
      'Marketing automation e CRM',
      'Data analytics e roadmap di crescita',
    ],
  },
  'digital-content': {
    title: 'Digital Content',
    intro: 'Creiamo contenuti editoriali, social e video che alimentano il funnel e posizionano il tuo brand come leader di categoria.',
    bullets: [
      'Content strategy e pillar tematici',
      'Produzione articoli, case study e whitepaper',
      'Piani editoriali social B2B',
      'Video snackable e motion design',
      'Workflow di approvazione e governance',
    ],
  },
  'digital-advertising': {
    title: 'Digital Advertising',
    intro: 'Campagne performance‑driven su canali paid per generare domanda qualificata e pipeline di vendita.',
    bullets: [
      'Ricerca keyword e audience building',
      'Setup e gestione campagne Google, Meta, LinkedIn',
      'Creatività data‑driven e A/B testing',
      'Budget allocation e ottimizzazione ROAS/CAC',
      'Dashboard e reportistica',
    ],
  },
  seo: {
    title: 'SEO',
    intro: 'Ottimizzazione tecnica e contenuti per crescere in organico, migliorando visibilità e lead generation.',
    bullets: [
      'Audit tecnico (core web vitals, architettura)',
      'Keyword research e content gap',
      'Piani editoriali SEO e link building etica',
      'Ottimizzazione on‑page e schema markup',
      'Monitoring, dashboard e KPI',
    ],
  },
  finanziamenti: {
    title: 'Finanziamenti',
    intro: 'Supporto per bandi e incentivi pubblici a sostegno dei progetti digitali: dalla candidatura alla rendicontazione.',
    bullets: [
      'Mappatura bandi e requisiti',
      'Redazione domande e business plan',
      'Gestione progetto e compliance',
      'Rendicontazione e reporting',
      'Advisory su tempistiche e milestone',
    ],
  },
}

export default function Servizio({ type }){
  const data = content[type]
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />
      <main className="pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-semibold tracking-tight">{data.title}</h1>
          <p className="mt-4 text-white/70 max-w-3xl">{data.intro}</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {data.bullets.map((b, i)=> (
              <li key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">{b}</li>
            ))}
          </ul>
          <div className="mt-8">
            <a href="/contatti" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium shadow hover:shadow-xl">Richiedi una consulenza</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
