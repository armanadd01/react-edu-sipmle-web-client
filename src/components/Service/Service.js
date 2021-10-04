import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = (props) => {
    const {name, trainer, topic, img, enroll, budget} = props.service
    return (
        <div className="col-md-4">
            <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" className="" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {topic}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Trainer: {trainer}</ListGroupItem>
                    <ListGroupItem>Enrolled: {enroll}</ListGroupItem>
                    <ListGroupItem>Price: {budget} TK</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;