// POST /api/contact - Receber mensagem de contato
export const sendContactMessage = (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Validação básica
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Campos obrigatórios: nome, email e mensagem'
      });
    }
    
    // Por enquanto, apenas log (futuramente enviar email)
    console.log('📧 Nova mensagem de contato:', {
      name,
      email,
      phone,
      subject,
      message,
      receivedAt: new Date().toISOString()
    });
    
    res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao enviar mensagem',
      error: error.message
    });
  }
};