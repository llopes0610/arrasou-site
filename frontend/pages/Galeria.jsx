export default function Galeria() {
  const fotos = [
    { id: 1, url: 'https://via.placeholder.com/300x300?text=Sobrancelha+1', alt: 'Sobrancelha 1' },
    { id: 2, url: 'https://via.placeholder.com/300x300?text=Cílios+1', alt: 'Cílios 1' },
    { id: 3, url: 'https://via.placeholder.com/300x300?text=Lábio+1', alt: 'Lábio 1' },
    { id: 4, url: 'https://via.placeholder.com/300x300?text=Sobrancelha+2', alt: 'Sobrancelha 2' },
    { id: 5, url: 'https://via.placeholder.com/300x300?text=Cílios+2', alt: 'Cílios 2' },
    { id: 6, url: 'https://via.placeholder.com/300x300?text=Lábio+2', alt: 'Lábio 2' },
  ];

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

      {/* Grid de Fotos */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fotos.map(foto => (
              <div key={foto.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer">
                <img 
                  src={foto.url} 
                  alt={foto.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}