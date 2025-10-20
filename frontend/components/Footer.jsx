import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Arrasou Sobrancelhas</h3>
            <p className="text-gray-400">
              Especializada em estética feminina com foco em qualidade e satisfação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/servicos" className="hover:text-white transition">Serviços</a></li>
              <li><a href="/galeria" className="hover:text-white transition">Galeria</a></li>
              <li><a href="/contato" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          {/* Contato e Redes */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-600 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-orange-600 transition">
                <Facebook size={24} />
              </a>
              <a href="https://wa.me/5585987654321" className="hover:text-orange-600 transition">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Arrasou Sobrancelhas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}