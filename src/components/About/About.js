import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './About.css'
import img from '../../2.jpg'
const About = () => {
    return (
        <div>
            <div className="home">
                <div className="w-50 mx-auto mt-5">
                    <h1>A Few Words About Us</h1>
                    <h6 className="mt-5">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and the master-builder of human happiness. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally.
                    </h6>
                </div>
                <div>
                    <img className="img-fluid" src={img} alt="" style={{ height: "600px" }} />
                </div>
                <div className="about">
                    <div className="about-details">
                        <div>
                            <h1>The Best Service for you</h1>
                            <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
                            </p>
                        </div>
                    </div>
                    <div className="about-details">
                        <Card style={{ height: "400px" }}>
                            <Card.Header className="text-center">Support</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="p-5">100+ Doctors</ListGroup.Item>
                                <ListGroup.Item className="p-5">Low Cost</ListGroup.Item>
                                <ListGroup.Item className="px-5">24*7 & Full Service</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;