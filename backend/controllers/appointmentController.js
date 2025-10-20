import { 
  addAppointment, 
  getAppointmentById, 
  getAllAppointments 
} from '../data/appointments.js';

// POST /api/appointments - Criar novo agendamento
export const createAppointment = (req, res) => {
  try {
    const { 
      clientName, 
      clientPhone, 
      clientEmail, 
      serviceId,
      serviceName,
      preferredDate, 
      preferredTime, 
      message 
    } = req.body;
    
    // Validação básica
    if (!clientName || !clientPhone || !serviceId || !preferredDate) {
      return res.status(400).json({
        success: false,
        message: 'Campos obrigatórios: nome, telefone, serviço e data'
      });
    }
    
    const appointmentData = {
      clientName,
      clientPhone,
      clientEmail,
      serviceId: parseInt(serviceId),
      serviceName,
      preferredDate,
      preferredTime,
      message: message || ''
    };
    
    const newAppointment = addAppointment(appointmentData);
    
    res.status(201).json({
      success: true,
      message: 'Agendamento criado com sucesso!',
      data: newAppointment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao criar agendamento',
      error: error.message
    });
  }
};

// GET /api/appointments - Listar todos os agendamentos
export const getAppointments = (req, res) => {
  try {
    const allAppointments = getAllAppointments();
    
    res.status(200).json({
      success: true,
      count: allAppointments.length,
      data: allAppointments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar agendamentos',
      error: error.message
    });
  }
};

// GET /api/appointments/:id - Buscar agendamento específico
export const getAppointment = (req, res) => {
  try {
    const { id } = req.params;
    const appointment = getAppointmentById(id);
    
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Agendamento não encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      data: appointment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar agendamento',
      error: error.message
    });
  }
};