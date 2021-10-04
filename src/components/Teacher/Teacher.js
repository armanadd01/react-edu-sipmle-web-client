import React from 'react';
import { Card } from 'react-bootstrap';
import './Teacher.css'

const Teacher = (props) => {
    const { trainer, topic, trainerimg} = props.service
    return (
        // Loop Teacher component
        <div className="col-md-4 col-12 mt-5">
            <Card  className="text-center  h-100">
                <Card.Img className="image border border-primary" variant="top" src={trainerimg} />
                <Card.Body>
                    <Card.Title>{trainer}</Card.Title>
                    <Card.Text>
                    {topic}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Teacher;