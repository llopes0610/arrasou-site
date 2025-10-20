import Card from '../components/Card';
import Button from '../components/Button';

export default function Servicos() {
  const servicos = [
    {
      id: 1,
      title: 'Design de Sobrancelhas',
      description: 'Modelagem e design personalizado',
      price: 'R$ 50,00',
      duration: '30 min',
    },
    {
      id: 2,
      title: 'Aumento de Cílios',
      description: 'Cílios volumosos e naturais',
      price: 'R$ 80,00',
      duration: '1h',
    },
    {
      id: 3,
      title: 'Preenchimento Labial',
      description: 'Lábios volumosos com ácido hialurônico',
      price: 'R$ 120,00',
      duration: '45 min',
    },
  ];

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

      {/* Serviços Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map(servico => (
              <Card
                key={servico.id}
                title={servico.title}
                description={servico.description}
              >
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>⏱️ Duração: {servico.duration}</span>
                    <span className="font-bold text-orange-600">{servico.price}</span>
                  </div>
                  <Button variant="primary" className="w-full">
                    Agendar Agora
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}