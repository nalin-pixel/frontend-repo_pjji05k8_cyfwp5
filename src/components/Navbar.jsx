import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/chi-siamo', label: 'Chi siamo' },
  { to: '/servizi', label: 'Servizi', children: [
    { to: '/servizi/ecommerce', label: 'E‑commerce' },
    { to: '/servizi/digital-content', label: 'Digital Content' },
    { to: '/servizi/digital-advertising', label: 'Digital Advertising' },
    { to: '/servizi/seo', label: 'SEO' },
    { to: '/servizi/finanziamenti', label: 'Finanziamenti' },
  ]},
  { to: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openServices, setOpenServices] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 ring-2 ring-white/30" />
            <span className="font-semibold tracking-tight">Il Marketing Much More S.r.l.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.to} className="relative">
                  <button onClick={() => setOpenServices((v)=>!v)} className="hover:text-white transition-colors">{item.label}</button>
                  {openServices && (
                    <div onMouseLeave={()=>setOpenServices(false)} className="absolute mt-3 w-64 rounded-xl bg-neutral-900/95 border border-white/10 p-2 shadow-2xl">
                      {item.children.map((c) => (
                        <NavLink key={c.to} to={c.to} className={({isActive})=>`block px-3 py-2 rounded-lg hover:bg-white/5 ${isActive? 'text-white':'text-white/80'}`}>{c.label}</NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={({isActive})=>`hover:text-white transition-colors ${isActive? 'text-white':'text-white/80'}`}>{item.label}</NavLink>
              )
            ))}
            <Link to="/contatti" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">Parla con noi</Link>
          </nav>
          <button onClick={()=>setOpen((v)=>!v)} className="md:hidden text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 space-y-2 text-white/90">
            {navItems.map((item)=> (
              item.children ? (
                <div key={item.to} className="">
                  <button onClick={()=>setOpenServices((v)=>!v)} className="w-full text-left px-2 py-2 rounded hover:bg-white/5">{item.label}</button>
                  {openServices && (
                    <div className="pl-4">
                      {item.children.map((c)=>(
                        <NavLink key={c.to} to={c.to} onClick={()=>setOpen(false)} className={({isActive})=>`block px-2 py-2 rounded hover:bg-white/5 ${isActive? 'text-white':'text-white/80'}`}>{c.label}</NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} onClick={()=>setOpen(false)} className={({isActive})=>`block px-2 py-2 rounded hover:bg-white/5 ${isActive? 'text-white':'text-white/80'}`}>{item.label}</NavLink>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
