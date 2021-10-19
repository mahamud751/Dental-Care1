import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceShow from '../ServiceShow/ServiceShow';

const Services = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            products.map(product => <ServiceShow
                                key={product.key}
                                // handlePurchase={handlePurchase}
                                product={product}
                            ></ServiceShow>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Services;