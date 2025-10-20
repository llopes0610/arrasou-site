import { AlertCircle } from 'lucide-react';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4">
      <div className="flex items-center gap-3">
        <AlertCircle className="text-red-600" size={24} />
        <div className="flex-1">
          <h3 className="text-red-800 font-semibold">Erro ao carregar</h3>
          <p className="text-red-600 text-sm mt-1">{message}</p>
        </div>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Tentar Novamente
        </button>
      )}
    </div>
  );
}