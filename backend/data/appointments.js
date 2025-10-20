export let appointments = [];

let nextId = 1;

// Função para adicionar agendamento
export function addAppointment(appointment) {
  const newAppointment = {
    id: nextId++,
    ...appointment,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };
  appointments.push(newAppointment);
  return newAppointment;
}

// Função para buscar agendamento por ID
export function getAppointmentById(id) {
  return appointments.find(apt => apt.id === parseInt(id));
}

// Função para buscar todos os agendamentos
export function getAllAppointments() {
  return appointments;
}