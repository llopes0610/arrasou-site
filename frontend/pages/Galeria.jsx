import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { getGallery } from '../utils/api';

export default function Galeria() {
  const [fotos, setFotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('todos');

  const fetchGaleria = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getGallery();
      setFotos(response.data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar galeria');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGaleria();
  }, []);

  const filteredFotos = filter === 'todos' 
    ? fotos 
    : fotos.filter(foto => foto.serviceType === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Galeria de Trabalhos</h1>
          <p className="text-xl mt-2 opacity-90">
            Veja nossos resultados antes e depois
          </p>
        </div>
      </div>

      {/* Filtros */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter('todos')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'todos'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('sobrancelhas')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'sobrancelhas'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Sobrancelhas
            </button>
            <button
              onClick={() => setFilter('cilios')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'cilios'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Cílios
            </button>
            <button
              onClick={() => setFilter('labios')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'labios'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Lábios
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Fotos */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Loading */}
          {loading && <Loading message="Carregando galeria..." />}

          {/* Error */}
          {error && !loading && (
            <ErrorMessage message={error} onRetry={fetchGaleria} />
          )}

          {/* Grid */}
          {!loading && !error && filteredFotos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFotos.map(foto => (
                <div 
                  key={foto.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
                  onClick={() => setSelectedImage(foto)}
                >
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="relative">
                      <img 
                        src={foto.beforeImage} 
                        alt="Antes"
                        className="w-full h-48 object-cover rounded"
                      />
                      <span className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        Antes
                      </span>
                    </div>
                    <div className="relative">
                      <img 
                        src={foto.afterImage} 
                        alt="Depois"
                        className="w-full h-48 object-cover rounded"
                      />
                      <span className="absolute bottom-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                        Depois
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{foto.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{foto.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredFotos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nenhuma foto disponível nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-white text-center mb-2 font-semibold">Antes</p>
                <img 
                  src={selectedImage.beforeImage} 
                  alt="Antes" 
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <p className="text-white text-center mb-2 font-semibold">Depois</p>
                <img 
                  src={selectedImage.afterImage} 
                  alt="Depois" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}