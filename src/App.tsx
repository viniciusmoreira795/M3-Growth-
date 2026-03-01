import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Sitemap from './components/Sitemap';

/**
 * Detecta se o ambiente atual é um ambiente de preview/proxy.
 */
const checkPreviewEnvironment = (): boolean => {
  const indicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];
  const hostname = window.location.hostname;
  const href = window.location.href;
  
  return indicators.some(indicator => hostname.includes(indicator) || href.includes(indicator));
};

export default function App() {
  const isPreview = checkPreviewEnvironment();
  
  // Seleção de Roteador baseada no ambiente
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        {/* Redirecionamento Inteligente da Rota Raiz */}
        <Route 
          path="/" 
          element={<Navigate to={isPreview ? "/sitemap" : "/lp"} replace />} 
        />
        
        {/* Rotas da Aplicação */}
        <Route path="/lp" element={<LandingPage />} />
        <Route path="/sitemap" element={<Sitemap />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
