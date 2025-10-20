import Button from '../components/Button';

export default function Home() {
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
          <Button variant="secondary" className="text-lg">
            Agendar Agora
          </Button>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">👀</div>
              <h3 className="text-2xl font-bold mb-3">Design de Sobrancelhas</h3>
              <p className="text-gray-600 mb-4">
                Modelagem personalizada que realça seu rosto
              </p>
              <Button variant="outline" className="w-full">
                Saiba Mais
              </Button>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Cílios</h3>
              <p className="text-gray-600 mb-4">
                Aumento de cílios para um olhar irresistível
              </p>
              <Button variant="outline" className="w-full">
                Saiba Mais
              </Button>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💋</div>
              <h3 className="text-2xl font-bold mb-3">Preenchimento Labial</h3>
              <p className="text-gray-600 mb-4">
                Lábios volumosos e naturais
              </p>
              <Button variant="outline" className="w-full">
                Saiba Mais
              </Button>
            </div>
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
          <Button variant="secondary" className="text-lg">
            Agendar Agora
          </Button>
        </div>
      </section>
    </div>
  );
}