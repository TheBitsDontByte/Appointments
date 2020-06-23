import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddAppointmentModal = (props) => {
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal centered show={props.show} onHide={props.close}>
      <Modal.Header>
        <Modal.Title>Add An Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Date and Time </Form.Label>
            <div>
              <DatePicker
                popperPlacement="right"
                minDate={new Date()}
                className="form-control"
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location..."
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.close}>
          Cancel
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => props.saveAppointment(date, location, description)}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddAppointmentModal;
