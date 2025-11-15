import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contatti(){
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />
      <main className="pt-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Contattaci</h1>
            <p className="mt-4 text-white/70">Raccontaci i tuoi obiettivi e ti proponiamo la strategia migliore.</p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>Email: info@ilmarketingmuchmore.it</p>
              <p>Telefono: +39 000 000 000</p>
              <p>Sede: Via Esempio 1, 20100 Milano (MI)</p>
            </div>
          </div>
          <form className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <label className="text-sm">Nome e Cognome</label>
              <input className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none focus:ring-2 ring-cyan-400" placeholder="Mario Rossi" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none focus:ring-2 ring-cyan-400" placeholder="mario@azienda.it" />
            </div>
            <div>
              <label className="text-sm">Messaggio</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none focus:ring-2 ring-cyan-400" placeholder="Parlaci del tuo progetto" />
            </div>
            <button className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-black font-medium shadow hover:shadow-xl transition-all">Invia richiesta</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
