import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = (props) => {
    const { name, img, star, description, id, price } = props.product
    // const history = useHistory()

    // const handleBtn = () => {
    //     history.push(`/singleProducts/${singleProducts?.name}`)
    // }
    return (
        <div className="mt-5">
            <div className="container-fluid">
                <Col >
                    <Card className="border-2 rounded-5  p-5" style={{ background: "rgb(237 255 244)" }}>
                        <img src={img} alt="" style={{
                            height: "300px"
                        }} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>

                            <Rating className="rating"
                                initialRating={star}
                                emptySymbol="far fa-star fa-2x"
                                fullSymbol="fas fa-star fa-2x"
                                readonly
                            />
                            <Card.Text>
                                {description}
                            </Card.Text>

                            <Link to={`/singleProducts/${id}`}>
                                <button className="btn-normal text-center">Details</button>
                            </Link>

                        </Card.Body>
                    </Card>
                </Col>
            </div>


        </div >
    );
};

export default Products;