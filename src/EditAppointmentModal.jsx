import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

const EditAppointmentModal = (props) => {
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal size="lg" centered show={props.show} onHide={props.close}>
      <Modal.Header>
        <Modal.Title>Edit An Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Original Date and Time</Form.Label>
              <div>
                <b>
                  {props.appointment.date} {props.appointment.time}
                </b>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Updated Date and Time </Form.Label>
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
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Original Location</Form.Label>
              <div>
                <b>{props.appointment.location}</b>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Updated Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location..."
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Original Description</Form.Label>
              <div>
                <b>{props.appointment.description}</b>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Updated Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.close}>
          Cancel
        </Button>
        <Button
          variant="outline-primary"
          onClick={() =>
            props.saveEditedAppointment(
              date,
              location,
              description,
              props.appointment.id
            )
          }
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAppointmentModal;
