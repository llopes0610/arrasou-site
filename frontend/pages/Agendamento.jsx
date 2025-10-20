import Button from '../components/Button';
import { useState } from 'react';

export default function Agendamento() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    data: '',
    hora: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construir mensagem para WhatsApp
    const mensagemWA = `Olá! Gostaria de agendar um serviço.
    
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Serviço: ${formData.servico}
Data: ${formData.data}
Hora: ${formData.hora}
Mensagem: ${formData.mensagem}`;

    // Redirecionar para WhatsApp
    const numeroWhatsapp = '5585987654321'; // Altere com o número real
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemWA)}`;
    window.open(urlWhatsapp, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-2">Agendar Serviço</h1>
          <p className="text-center text-gray-600 mb-8">
            Preencha o formulário abaixo para agendar seu serviço
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nome Completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Seu nome"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Telefone (WhatsApp)</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="(85) 9 8765-4321"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Serviço</label>
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Design de Sobrancelhas">Design de Sobrancelhas</option>
                  <option value="Aumento de Cílios">Aumento de Cílios</option>
                  <option value="Preenchimento Labial">Preenchimento Labial</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Data</label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Hora</label>
              <input
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Mensagem Adicional</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Dúvidas ou informações adicionais..."
              />
            </div>

            <Button variant="primary" className="w-full text-lg">
              Agendar pelo WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}