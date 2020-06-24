import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import AppointmentForm from "./AppointmentForm";

const AddAppointmentModal = (props) => {
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const clearValuesOnShow = () => {
    setDate(null);
    setLocation("");
    setDescription("");
    setErrorMessage("");
    setDisabled(false);
  };

  const dataIsValid = () => {
    if (date && location && description) return true;
    else if (!date) setErrorMessage("A date is required for an appointment");
    else if (!location)
      setErrorMessage("A location is required for an appointment");
    else if (!description)
      setErrorMessage("A description is required for an appointment");

    setDisabled(false);
    return false;
  };

  const onSaveClick = () => {
    setErrorMessage("");
    setDisabled(true);

    if (dataIsValid()) {
      var newAppointment = {
        id: props.nextId,
        dateTime: new Date(date),
        location,
        description,
      };

      props.saveAppointment(newAppointment);
    }
  };

  return (
    <Modal
      centered
      show={props.show}
      onHide={props.close}
      onShow={() => clearValuesOnShow()}
    >
      <Modal.Header>
        <Modal.Title>Add An Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : null}
        <AppointmentForm
          date={date}
          setDate={setDate}
          location={location}
          setLocation={setLocation}
          description={description}
          setDescription={setDescription}
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
          variant="outline-primary"
          disabled={disabled}
          onClick={() => onSaveClick()}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddAppointmentModal;
