import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

import AppointmentForm from "./AppointmentForm";

const EditAppointmentModal = (props) => {
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const clearValuesOnShow = () => {
    setDate(null);
    setLocation("");
    setDescription("");
  };

  const createAppointmentAndSave = () => {
    var updatedAppointment = {
      id: props.appointmentToEdit.id,
      dateTime: date ? date : props.appointmentToEdit.dateTime,
      location: location ? location : props.appointmentToEdit.location,
      description: description
        ? description
        : props.appointmentToEdit.description,
    };

    props.saveEditedAppointment(updatedAppointment);
  };

  return (
    <Modal
      size="lg"
      centered
      show={props.show}
      onHide={props.close}
      onShow={() => clearValuesOnShow()}
    >
      <Modal.Header>
        <Modal.Title>Edit An Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h4>Original Appointment</h4>
            <AppointmentForm
              disabled={true}
              date={props.appointmentToEdit.dateTime}
              location={props.appointmentToEdit.location}
              description={props.appointmentToEdit.description}
            />
          </Col>
          <Col>
            <h4>Updates</h4>
            <AppointmentForm
              disabled={false}
              date={date}
              setDate={setDate}
              location={location}
              setLocation={setLocation}
              description={description}
              setDescription={setDescription}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.close}>
          Cancel
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => createAppointmentAndSave()}
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAppointmentModal;
