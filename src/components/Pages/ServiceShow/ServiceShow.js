import React from 'react';
import { Card, CardImg, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './ServiceShow.css'

const ServiceShow = (props) => {
    const { name, img, star, description, shipping } = props.product
    return (
        <div className="mt-5">
            <div className="container-fluid">
                <Col className="cards">
                    <Card className="text-start p-5">
                        <CardImg className="img-fluid service_img" variant="top card" src={img} style={{}} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Rating className="rating"
                                initialRating={star}
                                emptySymbol="far fa-star fa-2x"
                                fullSymbol="fas fa-star fa-2x"
                                readonly
                            />
                            <p>{shipping}</p>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            {/* <button onClick={() => handlePurchase(props.product)} className="btn-normal">Purchase</button> */}
                        </Card.Body>
                    </Card>
                </Col>
            </div>

            {/* <Col>
            <Card className="card">
                <Card.Img className="card-img img-fluid" variant="top" src={img} style={{ width: "200px" }} />
               
            </Card>
        </Col> */}
        </div>
    );
};

export default ServiceShow;