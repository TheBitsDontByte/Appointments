import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import AppointmentTable from "./AppointmentTable";
import AddAppointmentModal from "./AddAppointmentModal";
import EditAppointmentModal from "./EditAppointmentModal";

const initialState = {
  showAddModal: false,
  appointmentToEdit: {},
  appointmentData: [
    {
      id: 1,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      location: "Some Location",
      description: "Appointment to review code",
    },
    {
      id: 2,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      location: "Some Location",
      description: "Appointment to review code",
    },
    {
      id: 3,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      location: "Some Location",
      description: "Appointment to review code",
    },
    {
      id: 4,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      location: "Some Location",
      description: "Appointment to review code",
    },
    {
      id: 5,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      location: "Some Location",
      description: "Appointment to review code",
    },
  ],
};

class App extends React.Component {
  state = initialState;

  saveAppointment = (date, location, description) => {
    this.setState({
      showAddModal: false,
      appointmentData: this.state.appointmentData.push({
        date: new Date(date).toLocaleDateString(),
        time: new Date(date).toLocaleTimeString(),
        location,
        description,
      }),
    });
  };

  editAppointment = (appointment) => {
    this.setState({
      showEditModal: true,
      appointmentToEdit: appointment,
    });
  };

  saveEditedAppointment = (date, location, description, id) => {
    const appointment = this.state.appointmentData.find((a) => a.id == id);

    const updatedAppointment = {
      id: id,
      date: date ? new Date(date).toLocaleDateString() : appointment.date,
      time: date ? new Date(date).toLocaleTimeString() : appointment.time,
      location: location ? location : appointment.location,
      description: description ? description : appointment.description,
    };

    const updatedAppointments = this.state.appointmentData.map((a) => {
      return a.id == appointment.id ? updatedAppointment : a;
    });

    this.setState({ appointmentData: updatedAppointments });
  };

  render() {
    return (
      <div className="container mt-3">
        <EditAppointmentModal
          show={this.state.showEditModal}
          close={() => this.setState({ showEditModal: false })}
          appointment={this.state.appointmentToEdit}
          saveEditedAppointment={this.saveEditedAppointment}
        />
        <AddAppointmentModal
          show={this.state.showAddModal}
          close={() => this.setState({ showAddModal: false })}
          saveAppointment={this.saveAppointment}
        />
        <Card bg="dark" text="white">
          <Card.Header>
            <h4>
              Coding Challenge Super Appointment Scheduler™
              <Button
                variant="outline-success"
                size="sm"
                style={{ float: "right" }}
                onClick={() => this.setState({ showAddModal: true })}
              >
                Add Appointment
              </Button>
            </h4>

            <Card.Body>
              <AppointmentTable
                editAppointment={this.editAppointment}
                appointments={this.state.appointmentData}
              />
            </Card.Body>
          </Card.Header>
        </Card>
      </div>
    );
  }
}

export default App;
