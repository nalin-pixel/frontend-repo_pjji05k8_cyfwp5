import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Portiamo risultati misurabili</h2>
              <p className="mt-4 text-slate-600">Approccio data‑driven, sperimentazione continua e creatività al servizio del business. Dalla strategia alla delivery.</p>
            </div>
            <div className="justify-self-end">
              <a href="/contatti" className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl bg-sky-500 text-white font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Richiedi una consulenza</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
