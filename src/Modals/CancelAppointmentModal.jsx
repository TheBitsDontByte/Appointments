import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import AppointmentForm from "./AppointmentForm";

const CancelAppointmentModal = (props) => {
  const [disabled, setDisabled] = useState(false);

  const clearValuesOnShow = () => {
    setDisabled(false);
  };

  const cancelAppointment = () => {
    setDisabled(true);
    props.cancelAppointment(props.appointmentToCancel);
  };

  return (
    <Modal
      centered
      show={props.show}
      onHide={props.close}
      onShow={() => clearValuesOnShow()}
    >
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
        <Button
          variant="outline-secondary"
          onClick={props.close}
          disabled={disabled}
        >
          Close
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => cancelAppointment()}
          disabled={disabled}
        >
          Cancel Appointment
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelAppointmentModal;
