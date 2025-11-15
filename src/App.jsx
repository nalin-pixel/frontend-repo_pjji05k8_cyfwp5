import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Contatti from './pages/Contatti'
import Servizio from './pages/Servizio'

function WrapperRoute({ children }){
  const { pathname } = useLocation()
  // Simple SEO tweaks: update title per route
  const titleMap = {
    '/': 'Il Marketing Much More S.r.l. — Agenzia di marketing digitale B2B',
    '/chi-siamo': 'Chi siamo — Il Marketing Much More S.r.l.',
    '/contatti': 'Contatti — Il Marketing Much More S.r.l.',
    '/servizi/ecommerce': 'E‑commerce — Il Marketing Much More S.r.l.',
    '/servizi/digital-content': 'Digital Content — Il Marketing Much More S.r.l.',
    '/servizi/digital-advertising': 'Digital Advertising — Il Marketing Much More S.r.l.',
    '/servizi/seo': 'SEO — Il Marketing Much More S.r.l.',
    '/servizi/finanziamenti': 'Finanziamenti — Il Marketing Much More S.r.l.',
  }
  document.title = titleMap[pathname] || 'Il Marketing Much More S.r.l.'
  return children
}

export default function App(){
  return (
    <WrapperRoute>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/servizi/ecommerce" element={<Servizio type="ecommerce" />} />
        <Route path="/servizi/digital-content" element={<Servizio type="digital-content" />} />
        <Route path="/servizi/digital-advertising" element={<Servizio type="digital-advertising" />} />
        <Route path="/servizi/seo" element={<Servizio type="seo" />} />
        <Route path="/servizi/finanziamenti" element={<Servizio type="finanziamenti" />} />
      </Routes>
    </WrapperRoute>
  )
}
