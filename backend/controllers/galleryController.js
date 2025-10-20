import { gallery } from '../data/gallery.js';

// GET /api/gallery - Listar todas as fotos
export const getAllGallery = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: gallery.length,
      data: gallery
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar galeria',
      error: error.message
    });
  }
};

// GET /api/gallery/:id - Buscar foto específica
export const getGalleryById = (req, res) => {
  try {
    const { id } = req.params;
    const item = gallery.find(g => g.id === parseInt(id));
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Foto não encontrada'
      });
    }
    
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar foto',
      error: error.message
    });
  }
};

// GET /api/gallery/type/:serviceType - Buscar por tipo de serviço
export const getGalleryByType = (req, res) => {
  try {
    const { serviceType } = req.params;
    const filtered = gallery.filter(g => g.serviceType === serviceType);
    
    res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar galeria por tipo',
      error: error.message
    });
  }
};