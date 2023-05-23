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
    <div key={props.id}>
    <Container>
      <Row >
        
        <Card>
        <Col sm={8}>
      <Card.Header>{props.ownerName}</Card.Header>
      <Card.Body>
        <Card.Title>{props.date}  {props.time}</Card.Title>
        <Card.Text>{props.petName}</Card.Text>
        <Card.Text>
        {props.notes && props.notes}
        </Card.Text>
      </Card.Body>
        </Col>
    </Card>
        <Col sm={4}>
        {props.id &&  <Button variant="danger"  size="sm" onClick={() =>props.deleteList(props.id)}> <FaTrash/>
        </Button>}
          </Col>
      </Row>
      
    </Container>

    
    </div>
  )
}

export default Lists
