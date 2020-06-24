import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import AppointmentForm from "./AppointmentForm";

const EditAppointmentModal = (props) => {
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const clearValuesOnShow = () => {
    setDate(null);
    setLocation("");
    setDescription("");
  };

  const dataIsValid = () => location || date || description;

  const createAppointmentAndSave = () => {
    setErrorMessage("");

    if (dataIsValid()) {
      var updatedAppointment = {
        id: props.appointmentToEdit.id,
        dateTime: date ? date : props.appointmentToEdit.dateTime,
        location: location ? location : props.appointmentToEdit.location,
        description: description
          ? description
          : props.appointmentToEdit.description,
      };

      props.saveEditedAppointment(updatedAppointment);
    } else {
      setErrorMessage(
        "You have to enter some new value to update an appointment"
      );
    }
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
        {errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : null}
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
