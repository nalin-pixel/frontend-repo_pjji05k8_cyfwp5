import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <section className="bg-[#0B0B0F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Portiamo risultati misurabili</h2>
              <p className="mt-4 text-white/70">Approccio data‑driven, sperimentazione continua e creatività al servizio del business. Dalla strategia alla delivery.</p>
            </div>
            <div className="justify-self-end">
              <a href="/contatti" className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl bg-white text-black font-medium shadow hover:shadow-xl hover:-translate-y-0.5 transition-all">Richiedi una consulenza</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
