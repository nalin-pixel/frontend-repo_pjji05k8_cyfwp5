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
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/70 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-800">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-400 to-indigo-400 ring-2 ring-white shadow-sm" />
            <span className="font-semibold tracking-tight">Il Marketing Much More S.r.l.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.to} className="relative">
                  <button onClick={() => setOpenServices((v)=>!v)} className="hover:text-slate-900 transition-colors">{item.label}</button>
                  {openServices && (
                    <div onMouseLeave={()=>setOpenServices(false)} className="absolute mt-3 w-64 rounded-xl bg-white ring-1 ring-slate-200 p-2 shadow-2xl">
                      {item.children.map((c) => (
                        <NavLink key={c.to} to={c.to} className={({isActive})=>`block px-3 py-2 rounded-lg hover:bg-slate-50 ${isActive? 'text-slate-900':'text-slate-700'}`}>{c.label}</NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={({isActive})=>`hover:text-slate-900 transition-colors ${isActive? 'text-slate-900':'text-slate-700'}`}>{item.label}</NavLink>
              )
            ))}
            <Link to="/contatti" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-white font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Parla con noi</Link>
          </nav>
          <button onClick={()=>setOpen((v)=>!v)} className="md:hidden text-slate-800">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-2 text-slate-800">
            {navItems.map((item)=> (
              item.children ? (
                <div key={item.to} className="">
                  <button onClick={()=>setOpenServices((v)=>!v)} className="w-full text-left px-2 py-2 rounded hover:bg-slate-50">{item.label}</button>
                  {openServices && (
                    <div className="pl-4">
                      {item.children.map((c)=>(
                        <NavLink key={c.to} to={c.to} onClick={()=>setOpen(false)} className={({isActive})=>`block px-2 py-2 rounded hover:bg-slate-50 ${isActive? 'text-slate-900':'text-slate-700'}`}>{c.label}</NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} onClick={()=>setOpen(false)} className={({isActive})=>`block px-2 py-2 rounded hover:bg-slate-50 ${isActive? 'text-slate-900':'text-slate-700'}`}>{item.label}</NavLink>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
