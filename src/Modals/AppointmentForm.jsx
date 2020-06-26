import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";

const AppointmentForm = (props) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Date and Time </Form.Label>
        <div>
          <DatePicker
            disabled={props.disabled}
            popperPlacement="right"
            minDate={new Date()}
            onChangeRaw={(e) => e.preventDefault()}
            className="form-control"
            selected={props.date}
            onChange={(date) => props.setDate(date)}
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
          disabled={props.disabled}
          type="text"
          placeholder="Location..."
          value={props.location}
          onChange={(e) => props.setLocation(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          disabled={props.disabled}
          type="text"
          placeholder="Description..."
          value={props.description}
          onChange={(e) => props.setDescription(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default AppointmentForm;
