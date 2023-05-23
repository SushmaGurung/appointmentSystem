import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./formdata.css";

const FormData = ({
  show,
  setShow,
  owner,
  setOwner,
  pet,
  setPet,
  date,
  setDate,
  time,
  setTime,
  notes,
  setNotes,
  handleSubmit,
}) => {
  return (
        <div className="w-50 mx-auto">
          <div className="text-center">
      {show ? (
        <Button
          variant="success"
          className="m-3 align-center"
          size="sm"
          onClick={() => setShow(!show)}
        >
          Click to Register
        </Button>
      ) : (
        <Button variant="danger" className="m-3 " size="sm" onClick={() => setShow(!show)}>
          Close
        </Button>
      )}
          </div>

      {!show && (
          <Form className=" shadow-lg p-4 ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Owner's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                value={owner}
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pet's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pet's Name"
                required
                value={pet}
                onChange={(e) => {
                  setPet(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                type="date"
                required
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Appointment Time</Form.Label>
              <Form.Control
                type="time"
                required
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> Write your expectation/issue</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
            </Form.Group>
            {/* <p className="text-success">{msg}</p> */}

            <div className ="text-center">
              <Button
                className="w-100"
                variant="success"
                size="sm"
                onClick={handleSubmit}
              >
                Book Now
              </Button>
            </div>
          </Form>
      )}
      </div>
  );
};

export default FormData;
