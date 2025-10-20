import { services } from '../data/services.js';

// GET /api/services - Listar todos os serviços
export const getAllServices = (req, res) => {
  try {
    // Filtrar apenas serviços ativos
    const activeServices = services.filter(service => service.active);
    
    res.status(200).json({
      success: true,
      count: activeServices.length,
      data: activeServices
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar serviços',
      error: error.message
    });
  }
};

// GET /api/services/:id - Buscar serviço específico
export const getServiceById = (req, res) => {
  try {
    const { id } = req.params;
    const service = services.find(s => s.id === parseInt(id));
    
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Serviço não encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      data: service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar serviço',
      error: error.message
    });
  }
};

// GET /api/services/category/:category - Buscar por categoria
export const getServicesByCategory = (req, res) => {
  try {
    const { category } = req.params;
    const filteredServices = services.filter(
      s => s.category === category && s.active
    );
    
    res.status(200).json({
      success: true,
      count: filteredServices.length,
      data: filteredServices
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar serviços por categoria',
      error: error.message
    });
  }
};