import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import product from '../dummyData/product.json'
const SingleProducts = () => {
    let { id } = useParams();

    const singleProduct = product.find(pd => pd.id === id)
    // console.log(singleProduct)
    // console.log(id)

    return (
        <div>
            <div>
                <Container>
                    <Col className="mx-auto p-5 mt-5">
                        <Card className="border-2 rounded-5  p-5" style={{ background: "rgb(237 255 244)" }}>
                            <img src={singleProduct.img} alt="" style={{
                                height: "300px"
                            }} />
                            <Card.Body>
                                <Card.Title>{singleProduct.name}</Card.Title>
                                <Card.Text>
                                    {singleProduct.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </div>
        </div>
    );
};

export default SingleProducts;