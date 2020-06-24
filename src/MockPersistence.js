export const mockAppointmentData = [
  {
    id: 1,
    dateTime: new Date(),
    location: "Some Location",
    description: "Appointment to review code",
  },
  {
    id: 2,
    dateTime: new Date(),
    location: "Some Location",
    description: "Appointment to review code",
  },
  {
    id: 3,
    dateTime: new Date(),
    location: "Some Location",
    description: "Appointment to review code",
  },
  {
    id: 4,
    dateTime: new Date(),
    location: "Some Location",
    description: "Appointment to review code",
  },
  {
    id: 5,
    dateTime: new Date(),
    location: "Some Location",
    description: "Appointment to review code",
  },
];

const APPOINTMENTS = "appointments";

//Load mock data into sessionStorage
window.sessionStorage.clear();
window.sessionStorage.setItem(
  APPOINTMENTS,
  JSON.stringify(mockAppointmentData)
);

export const saveAppointment = (appointment) => {
  const appointments =
    JSON.parse(window.sessionStorage.getItem(APPOINTMENTS)) || [];
  const updatedAppointments = appointments.concat(appointment);
  window.sessionStorage.setItem(
    APPOINTMENTS,
    JSON.stringify(updatedAppointments)
  );
  console.log(appointments, updatedAppointments);
  return updatedAppointments;
};
