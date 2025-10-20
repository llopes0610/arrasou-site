import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Loading from '../components/Loading';
import { createAppointment, getServices } from '../utils/api';

export default function Agendamento() {
  const location = useLocation();
  const navigate = useNavigate();
  const servicoPreSelecionado = location.state?.servico;

  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    serviceId: servicoPreSelecionado?.id || '',
    serviceName: servicoPreSelecionado?.name || '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        setLoading(true);
        const response = await getServices();
        setServicos(response.data);
      } catch (err) {
        console.error('Erro ao carregar serviços:', err);
      } finally {
        setLoading(false);
      }
    };

    if (!servicoPreSelecionado) {
      fetchServicos();
    }
  }, [servicoPreSelecionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Atualizar nome do serviço quando selecionar
    if (name === 'serviceId') {
      const servico = servicos.find(s => s.id === parseInt(value));
      setFormData(prev => ({ 
        ...prev, 
        serviceId: value,
        serviceName: servico?.name || '' 
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      setError(null);

      // Criar agendamento no backend
      const response = await createAppointment(formData);
      
      console.log('✅ Agendamento criado:', response);
      setSuccess(true);

      // Construir mensagem para WhatsApp
      const mensagemWA = `Olá! Gostaria de confirmar meu agendamento:

📋 *Dados do Agendamento*
Nome: ${formData.clientName}
Telefone: ${formData.clientPhone}
Email: ${formData.clientEmail}

💅 *Serviço*
${formData.serviceName}

📅 *Data e Hora*
Data: ${new Date(formData.preferredDate).toLocaleDateString('pt-BR')}
Hora: ${formData.preferredTime}

${formData.message ? `💬 Observações: ${formData.message}` : ''}

Aguardo confirmação!`;

      // Redirecionar para WhatsApp após 2 segundos
      setTimeout(() => {
        const numeroWhatsapp = '5585987654321';
        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemWA)}`;
        window.open(urlWhatsapp, '_blank');
        
        // Resetar formulário
        setFormData({
          clientName: '',
          clientPhone: '',
          clientEmail: '',
          serviceId: '',
          serviceName: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
        setSuccess(false);
      }, 2000);

    } catch (err) {
      setError(err.message || 'Erro ao criar agendamento');
      console.error('Erro:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loading message="Carregando serviços..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-2">Agendar Serviço</h1>
          <p className="text-center text-gray-600 mb-8">
            Preencha o formulário abaixo para agendar seu serviço
          </p>

          {/* Success Message */}
          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-semibold text-center">
                ✅ Agendamento realizado com sucesso!
              </p>
              <p className="text-green-600 text-sm text-center mt-1">
                Redirecionando para WhatsApp...
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 font-semibold">❌ Erro ao agendar</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                required
                disabled={submitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:bg-gray-100"
                placeholder="Seu nome"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:bg-gray-100"
                  placeholder="(85) 9 8765-4321"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:bg-gray-100"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Serviço *
              </label>
              <select
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                required
                disabled={submitting || servicoPreSelecionado}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:bg-gray-100"
              >
                <option value="">Selecione um serviço</option>
                {servicos.map(servico => (
                  <option key={servico.id} value={servico.id}>
                    {servico.name} - R$ {servico.price.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Data Preferida *
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hora Preferida *
                </label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:bg-gray-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mensagem Adicional
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                disabled={submitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:bg-gray-100"
                placeholder="Dúvidas ou informações adicionais..."
              />
            </div>

            <Button 
              variant="primary" 
              className="w-full text-lg"
              disabled={submitting}
            >
              {submitting ? 'Agendando...' : 'Agendar pelo WhatsApp'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}