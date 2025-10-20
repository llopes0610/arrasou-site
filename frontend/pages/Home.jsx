import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Loading from '../components/Loading';
import { getServices } from '../utils/api';

export default function Home() {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await getServices();
        // Pegar apenas os 3 primeiros para exibir na home
        setServicos(response.data.slice(0, 3));
      } catch (err) {
        console.error('Erro ao carregar serviços:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServicos();
  }, []);

  const getEmoji = (category) => {
    const emojis = {
      sobrancelhas: '👀',
      cilios: '✨',
      labios: '💋',
      facial: '🌟'
    };
    return emojis[category] || '💅';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            Transforme Seu Olhar
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Design de sobrancelhas, cílios e muito mais. Realce sua beleza natural.
          </p>
          <Button 
            variant="secondary" 
            className="text-lg"
            onClick={() => navigate('/agendamento')}
          >
            Agendar Agora
          </Button>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
          
          {loading ? (
            <Loading message="Carregando serviços..." />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicos.map(servico => (
                <div 
                  key={servico.id}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
                >
                  <div className="text-5xl mb-4">{getEmoji(servico.category)}</div>
                  <h3 className="text-2xl font-bold mb-3">{servico.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {servico.description.substring(0, 80)}...
                  </p>
                  <p className="text-orange-600 font-bold text-xl mb-4">
                    R$ {servico.price.toFixed(2)}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/servicos')}
                  >
                    Saiba Mais
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button 
              variant="primary"
              onClick={() => navigate('/servicos')}
            >
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronta para se transformar?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Agende sua consulta agora mesmo
          </p>
          <Button 
            variant="secondary" 
            className="text-lg"
            onClick={() => navigate('/agendamento')}
          >
            Agendar Agora
          </Button>
        </div>
      </section>
    </div>
  );
}