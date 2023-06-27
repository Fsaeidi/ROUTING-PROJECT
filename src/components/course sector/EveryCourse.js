import React from 'react';
import{Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Col,Container,Row} from 'react-bootstrap';

export default function EveryCourse(props) {
  return (
    <Container>
    <Row>
      <Col sm={8}>
         
    <Link to={`/course/${props.id}`}>
       <div class="col-sm-4">
       <Card  style={{ width: '20rem',height:'24rem' ,border:"2px black sold",marginRight:20,}}>
                  <Card.Img variant="top" src={props.img} />
               <Card.Body>
              <Card.Title style={{fontSize:"20px"}}>{props.title}</Card.Title>
                <Card.Text>
             {props.price}
              </Card.Text>
            <Button variant="primary">add to card</Button>
               </Card.Body>
          </Card> 
       </div>
                  
    </Link>
      </Col>
      
    </Row>
    
  </Container>
   
   
  )
}
