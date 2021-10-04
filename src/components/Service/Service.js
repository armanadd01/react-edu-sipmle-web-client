import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {name, trainer, topic, img, enroll, budget} = props.service
    return (
        // Sercice Component
        <div className="col-md-4 col-12 mt-5">
            <Card  className="text-center  h-100">
                <Card.Img variant="top" className="images" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {topic}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="d-flex flex-row justify-content-center align-items-center">
                    <ListGroupItem className=" service_details"><FontAwesomeIcon className="icon text-primary" icon={faChalkboardTeacher} /> {trainer}</ListGroupItem>
                    <ListGroupItem className=" service_details service-border"><FontAwesomeIcon className="icon text-primary" icon={faUser}/> {enroll}</ListGroupItem>
                    <ListGroupItem className=" service_details"><FontAwesomeIcon className="icon text-primary" icon={faMoneyBill}/> {budget} TK</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;