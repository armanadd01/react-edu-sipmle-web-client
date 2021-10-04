import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const HomeServices = (props) => {
    // destructure props data
    const {name, trainer, topic, img, enroll, budget} = props.service
    return (
        // loop home services section
        <div className="col-md-3 col-12 mt-5">
            <Card  className="text-center  h-100">
                <Card.Img variant="top" src={img} />
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
                    <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeServices;