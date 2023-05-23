import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTrash } from "react-icons/fa";

// const Lists = ({id, ownerName, petName, date, time, notes}) => {
const Lists = (props) => {
// console.log(props)

  
  return (
    <Row key={props.id} className = "border my-3 p-3 w-75 mx-auto text-center">
        <Col xs={6} md={4} lg= {3}>
        <h3>{props.date}  </h3>
        <h4>{props.time}</h4>
        </Col>
        <Col xs={6} md={4} lg= {3}>
      <p>{props.ownerName}</p>
      <p>{props.petName}</p>
<p>{props.notes && props.notes}</p>
        </Col>
        <Col xs={6} md={4} lg={6} className = "ms-0">
        {props.id &&  <Button variant="danger" title ="Cancel" style={{ padding: "0.1rem 0.2rem 0.2rem"}} size="sm" onClick={() =>props.deleteList(props.id)}> <FaTrash/>
        </Button>}
        </Col>
      </Row>

  )
}

export default Lists
