import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ChiSiamo(){
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />
      <main className="pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Chi siamo</h1>
          <p className="mt-4 text-white/70 max-w-3xl">Siamo un team multidisciplinare con esperienza in strategia digitale, tecnologia e creatività. Lavoriamo al fianco di aziende B2B e retail per progettare ecosistemi digitali ad alte prestazioni: dall’E‑commerce ai contenuti, dall’advertising alla SEO.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
