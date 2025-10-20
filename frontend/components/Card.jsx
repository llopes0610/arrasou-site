export default function Card({ 
  image, 
  title, 
  description, 
  children,
  className = ''
}) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${className}`}>
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
}