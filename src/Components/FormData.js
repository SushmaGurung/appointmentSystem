import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./formdata.css";

const FormData = (formProps) => {
const { handleChange, handleSubmit, state}= formProps
  return (
    <div className="w-75 mx-auto">
      {state.show && (
        <Form className=" shadow-lg p-4 ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Owner's Name*</Form.Label>
            <Form.Control
              name="owner"
              value={state.owner}
              placeholder="Owner's Name"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Pet's Name*</Form.Label>
            <Form.Control
              type="text"
              name="pet"
              value={state.pet}
              placeholder="Pet's Name"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Appointment Date *</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={state.date}
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Appointment Time*</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={state.time}
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write comments/ issues (if any)</Form.Label>
            <Form.Control
              as="textarea"
              name="notes"
              value={state.notes}
              rows={3}
              placeholder= "Comments/Notes"
              onChange={handleChange}
            />
          </Form.Group>
          {/* {!show && <p className="text-success">{msg}</p>  } */}
          <div className="text-center">
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
