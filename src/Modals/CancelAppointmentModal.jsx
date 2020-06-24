import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import AppointmentForm from "./AppointmentForm";

const CancelAppointmentModal = (props) => {
  return (
    <Modal centered show={props.show} onHide={props.close}>
      <Modal.Header>
        <Modal.Title>Cancel An Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AppointmentForm
          disabled={true}
          date={props.appointmentToCancel.dateTime}
          location={props.appointmentToCancel.location}
          description={props.appointmentToCancel.description}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.close}>
          Close
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => props.cancelAppointment(props.appointmentToCancel)}
        >
          Cancel Appointment
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelAppointmentModal;
