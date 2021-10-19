import React from 'react';
import './Members.css'
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Members = (props) => {
    const { name, img, age, contract } = props.member
    return (
        <div>
            <div>
                <Col className="mt-5 single-cart">
                    <Card className="m-card container">
                        <Card.Img variant="top" className="card-img img-fluid" src={img} style={{ height: "350px" }} />
                        <Card.Body className="text-white">
                            <Card.Title className="text-center fs-1">Dr. {name}</Card.Title>

                            <Card.Text className="mt-3 text-center">
                                <h4>Age: {age}</h4>


                                <h4><FontAwesomeIcon icon={faPhone} />{contract}</h4>
                                <br />

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </div>
        </div>


    );
};

export default Members;