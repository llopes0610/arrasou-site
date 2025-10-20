import Button from '../components/Button';
import { MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Contato() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-600">
            Estamos aqui para tirar suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <MessageCircle className="mx-auto mb-4 text-orange-600" size={40} />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">(85) 9 8765-4321</p>
            <Button 
              variant="primary" 
              className="w-full"
              onClick={() => window.open('https://wa.me/5585987654321')}
            >
              Enviar Mensagem
            </Button>
          </div>

          {/* Endereço */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <MapPin className="mx-auto mb-4 text-orange-600" size={40} />
            <h3 className="text-xl font-bold mb-2">Endereço</h3>
            <p className="text-gray-600 mb-4">
              Rua Exemplo, 123<br/>
              Cidade, Estado
            </p>
            <Button variant="outline" className="w-full">
              Ver Localização
            </Button>
          </div>

          {/* Horário */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Clock className="mx-auto mb-4 text-orange-600" size={40} />
            <h3 className="text-xl font-bold mb-2">Horário</h3>
            <p className="text-gray-600 mb-4">
              Seg - Sab: 09:00 - 19:00<br/>
              Domingo: Fechado
            </p>
            <Button variant="secondary" className="w-full">
              Agendar Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}