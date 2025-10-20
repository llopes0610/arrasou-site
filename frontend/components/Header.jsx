import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Arrasou Sobrancelhas
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-700 hover:text-orange-600 transition">
            Home
          </Link>
          <Link to="/servicos" className="text-gray-700 hover:text-orange-600 transition">
            Serviços
          </Link>
          <Link to="/galeria" className="text-gray-700 hover:text-orange-600 transition">
            Galeria
          </Link>
          <Link to="/agendamento" className="text-gray-700 hover:text-orange-600 transition">
            Agendamento
          </Link>
          <Link to="/contato" className="text-gray-700 hover:text-orange-600 transition">
            Contato
          </Link>
        </nav>

        {/* Botão CTA Desktop */}
        <Link to="/agendamento" className="btn-primary hidden md:block">
          Agendar Agora
        </Link>

        {/* Menu Mobile */}
        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Expandido */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-50 px-4 py-4 flex flex-col gap-4">
          <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
          <Link to="/servicos" className="text-gray-700 hover:text-orange-600">Serviços</Link>
          <Link to="/galeria" className="text-gray-700 hover:text-orange-600">Galeria</Link>
          <Link to="/agendamento" className="text-gray-700 hover:text-orange-600">Agendamento</Link>
          <Link to="/contato" className="text-gray-700 hover:text-orange-600">Contato</Link>
          <Link to="/agendamento" className="btn-primary text-center">
            Agendar Agora
          </Link>
        </nav>
      )}
    </header>
  );
}