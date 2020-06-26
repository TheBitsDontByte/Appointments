import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import {
  getAppointments,
  saveAppointment,
  updateAppointment,
  cancelAppointment,
} from "./MockPersistence";
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
  appointmentData: [],
};

class AppointmentScheduler extends React.Component {
  state = initialState;

  componentDidMount() {
    this.setState({ appointmentData: getAppointments() });
  }

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
    const appointments = saveAppointment(appointment);

    this.setState({
      showAddModal: false,
      appointmentData: appointments,
    });
  };

  saveUpdatedAppointment = (updatedAppointment) => {
    const updatedAppointments = updateAppointment(updatedAppointment);

    this.setState({
      appointmentData: updatedAppointments,
      showEditModal: false,
    });
  };

  cancelAppointment = (appointment) => {
    const updatedAppointments = cancelAppointment(appointment);

    this.setState({
      showCancelModal: false,
      appointmentData: updatedAppointments,
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
          saveEditedAppointment={this.saveUpdatedAppointment}
        />
        <AddAppointmentModal
          show={this.state.showAddModal}
          close={() => this.setState({ showAddModal: false })}
          allAppointments={this.state.appointmentData}
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
        <Card bg="secondary" text="white">
          <Card.Header>
            <h4>
              Coding Challenge Appointment Scheduler
              <Button
                variant="outline-light"
                size="sm"
                style={{ float: "right" }}
                onClick={() => this.setState({ showAddModal: true })}
              >
                + Appointment
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

export default AppointmentScheduler;
