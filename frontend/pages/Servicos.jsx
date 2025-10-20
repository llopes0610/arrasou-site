import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { getServices } from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchServicos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getServices();
      setServicos(response.data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar serviços');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicos();
  }, []);

  const handleAgendar = (servico) => {
    // Navegar para agendamento com dados do serviço
    navigate('/agendamento', { state: { servico } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Nossos Serviços</h1>
          <p className="text-xl mt-2 opacity-90">
            Conheça todos os serviços disponíveis
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Loading */}
          {loading && <Loading message="Carregando serviços..." />}

          {/* Error */}
          {error && !loading && (
            <ErrorMessage message={error} onRetry={fetchServicos} />
          )}

          {/* Serviços Grid */}
          {!loading && !error && servicos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicos.map(servico => (
                <Card
                  key={servico.id}
                  image={servico.image}
                  title={servico.name}
                  description={servico.description}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>⏱️ {servico.duration} min</span>
                      <span className="font-bold text-orange-600">
                        R$ {servico.price.toFixed(2)}
                      </span>
                    </div>
                    <Button 
                      variant="primary" 
                      className="w-full"
                      onClick={() => handleAgendar(servico)}
                    >
                      Agendar Agora
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && servicos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nenhum serviço disponível no momento.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}