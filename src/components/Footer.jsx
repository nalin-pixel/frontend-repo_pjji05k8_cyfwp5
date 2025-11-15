export default function Footer(){
  return (
    <footer className="bg-slate-50 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-sky-400 to-indigo-400 ring-2 ring-white/80 shadow mb-4" />
          <p className="text-sm">Il Marketing Much More S.r.l. — Soluzioni di marketing digitale per aziende B2B e retail.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-900">Contatti</h4>
          <p className="mt-2 text-sm">Email: info@ilmarketingmuchmore.it</p>
          <p className="text-sm">Tel: +39 000 000 000</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-900">Legale</h4>
          <p className="mt-2 text-xs">Il Marketing Much More S.r.l. • P.IVA 00000000000 • Registro Imprese di [Città] • Capitale sociale € 10.000 i.v.</p>
          <p className="mt-1 text-xs">Sede legale: Via Esempio 1, 20100 Milano (MI)</p>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs">
          <span>© {new Date().getFullYear()} Il Marketing Much More S.r.l. Tutti i diritti riservati.</span>
          <a className="hover:text-slate-900" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
