import { Link } from 'react-router-dom';

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-black/5">
        <h1 className="text-2xl font-bold text-[#051d40] mb-6">Mapa do Site (Preview Mode)</h1>
        <p className="text-gray-600 mb-8">
          Você está em um ambiente de preview. O roteamento está configurado como <strong>HashRouter</strong> para garantir compatibilidade.
        </p>
        <ul className="space-y-4">
          <li>
            <Link 
              to="/lp" 
              className="block p-4 bg-[#051d40] text-white rounded-xl hover:bg-opacity-90 transition-all font-medium text-center"
            >
              Ver Landing Page (/lp)
            </Link>
          </li>
          <li className="text-sm text-gray-400 text-center pt-4">
            Em produção, a raiz (/) redirecionará automaticamente para a LP.
          </li>
        </ul>
      </div>
    </div>
  );
}
