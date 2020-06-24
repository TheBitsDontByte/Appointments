import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const AppointmentTable = (props) => {
  const renderAppointments = () => {
    const orderedAppointments = props.appointments.sort((a, b) => {
      if (a.dateTime > b.dateTime) return 1;
      else if (a.dateTime < b.dateTime) return -1;
      else return 0;
    });

    return orderedAppointments.map((a) => {
      return (
        <tr key={a.id}>
          <td>{a.dateTime.toLocaleDateString()}</td>
          <td>{a.dateTime.toLocaleTimeString()}</td>
          <td>{a.location}</td>
          <td>{a.description}</td>
          <td className="text-center">
            <Button
              onClick={() => props.editAppointment(a)}
              size="sm"
              variant="outline-light"
            >
              Edit
            </Button>{" "}
            <Button
              onClick={() => props.cancelAppointment(a)}
              size="sm"
              variant="outline-secondary"
            >
              Cancel
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.appointments.length > 0 ? (
          renderAppointments()
        ) : (
          <tr className="text-center">
            <td colSpan="5">Your Schedule Is Currently Empty</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default AppointmentTable;
