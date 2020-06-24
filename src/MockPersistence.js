const mockAppointmentData = [
  {
    id: 1,
    dateTime: new Date("2020-06-26T16:00:00"),
    location: "Zoom Meeting",
    description: "Code Review",
  },
  {
    id: 2,
    dateTime: new Date("2020-06-27T06:30:00"),
    location: "Guardsman Pass",
    description: "Hiking up by the lakes",
  },
  {
    id: 3,
    dateTime: new Date("2020-06-27T18:00:00"),
    location: "Avenues",
    description: "Dinner at Avenues Proper ",
  },
  {
    id: 4,
    dateTime: new Date("2020-06-30T10:15:00"),
    location: "Dentist",
    description: "Dentist Appointment",
  },
  {
    id: 5,
    dateTime: new Date("2020-06-28T17:00:00"),
    location: "Corner Canyon",
    description: "LEVITATE !",
  },
];

const APPOINTMENTS = "appointments";

const saveAppointmentsToSessionStorage = (appointments) => {
  window.sessionStorage.setItem(APPOINTMENTS, JSON.stringify(appointments));
};

const fixJsonDateTime = (appointmentArray) => {
  return appointmentArray.map((a) => {
    let appointment = {
      id: a.id,
      dateTime: new Date(a.dateTime),
      location: a.location,
      description: a.description,
    };
    return appointment;
  });
};

//Load mock data into sessionStorage
if (!window.sessionStorage.getItem(APPOINTMENTS)) {
  saveAppointmentsToSessionStorage(mockAppointmentData);
}

export const getAppointments = () => {
  const appointments =
    JSON.parse(window.sessionStorage.getItem(APPOINTMENTS)) || [];
  return fixJsonDateTime(appointments);
};

export const saveAppointment = (appointment) => {
  const appointments = getAppointments();
  const updatedAppointments = fixJsonDateTime(appointments.concat(appointment));

  window.sessionStorage.setItem(
    APPOINTMENTS,
    JSON.stringify(updatedAppointments)
  );

  return updatedAppointments;
};

export const updateAppointment = (updatedAppointment) => {
  const appointments = getAppointments();
  const updatedAppointments = appointments.map((a) => {
    return a.id === updatedAppointment.id ? updatedAppointment : a;
  });

  saveAppointmentsToSessionStorage(updatedAppointments);
  return getAppointments();
};

export const cancelAppointment = (appointmentToCancel) => {
  const appointments = getAppointments();
  const updatedAppointments = appointments.filter(
    (ad) => ad.id !== appointmentToCancel.id
  );

  saveAppointmentsToSessionStorage(updatedAppointments);
  return getAppointments();
};
