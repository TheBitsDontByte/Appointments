import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import AppointmentTable from "./AppointmentTable";
import AddAppointmentModal from "./Modals/AddAppointmentModal";
import EditAppointmentModal from "./Modals/EditAppointmentModal";
import CancelAppointmentModal from "./Modals/CancelAppointmentModal";

const initialState = {
  showAddModal: false,
  showEditModal: false,
  showCancelModal: false,
  appointmentToEdit: {},
  appointmentToCancel: {},
  appointmentData: [
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
  ],
};

class App extends React.Component {
  state = initialState;

  showEditAppointmentModal = (appointment) => {
    this.setState({
      showEditModal: true,
      appointmentToEdit: appointment,
    });
  };

  showCancelAppointmentMondal = (appointment) => {
    this.setState({
      showCancelModal: true,
      appointmentToCancel: appointment,
    });
  };

  saveAppointment = (appointment) => {
    this.setState({
      showAddModal: false,
      appointmentData: this.state.appointmentData.concat(appointment),
    });
  };

  saveEditedAppointment = (updatedAppointment) => {
    const updatedAppointments = this.state.appointmentData.map((a) => {
      return a.id == updatedAppointment.id ? updatedAppointment : a;
    });

    this.setState({
      appointmentData: updatedAppointments,
      showEditModal: false,
    });
  };

  cancelAppointment = (appointment) => {
    console.log(appointment);
    this.setState({
      showCancelModal: false,
      appointmentData: this.state.appointmentData.filter(
        (ad) => ad.id != appointment.id
      ),
    });
  };

  getNextIdNumber = () => {
    const idArray = Array.from(this.state.appointmentData, (ad) => ad.id);
    return Math.max(...idArray, 0) + 1;
  };

  renderModals = () => {
    return (
      <>
        <EditAppointmentModal
          show={this.state.showEditModal}
          close={() =>
            this.setState({ showEditModal: false, appointmentToEdit: {} })
          }
          appointmentToEdit={this.state.appointmentToEdit}
          saveEditedAppointment={this.saveEditedAppointment}
        />
        <AddAppointmentModal
          show={this.state.showAddModal}
          close={() => this.setState({ showAddModal: false })}
          saveAppointment={this.saveAppointment}
          nextId={this.getNextIdNumber()}
        />
        <CancelAppointmentModal
          show={this.state.showCancelModal}
          close={() =>
            this.setState({ showCancelModal: false, appointmentToCancel: {} })
          }
          appointmentToCancel={this.state.appointmentToCancel}
          cancelAppointment={this.cancelAppointment}
        />
      </>
    );
  };

  render() {
    return (
      <div className="container-fluid mt-3">
        {this.renderModals()}
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
                editAppointment={this.showEditAppointmentModal}
                cancelAppointment={this.showCancelAppointmentMondal}
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
