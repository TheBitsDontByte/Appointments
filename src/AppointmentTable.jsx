import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class AppointmentTable extends React.Component {
  renderAppointments = () => {
    return this.props.appointments.map((a) => {
      return (
        <tr>
          <td>{a.date}</td>
          <td>{a.time}</td>
          <td>{a.location}</td>
          <td>{a.description}</td>
          <td className="text-center">
            <Button
              onClick={() => this.props.editAppointment(a)}
              size="sm"
              variant="outline-secondary"
            >
              Edit
            </Button>{" "}
            <Button size="sm" variant="outline-danger">
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  render() {
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
        <tbody>{this.renderAppointments()}</tbody>
      </Table>
    );
  }
}

export default AppointmentTable;
