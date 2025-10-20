export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  
  const variants = {
    primary: 'bg-orange-600 text-white hover:bg-orange-700',
    secondary: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    outline: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}