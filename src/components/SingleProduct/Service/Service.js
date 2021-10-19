import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductsData from '../../dummyData/product.json';
import Products from '../../Products/Products';

const Service = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(ProductsData.slice(0, 6))
    }, [])

    return (
        <div>
            <div>

                <div className="">
                    <div>
                        <Row xs={1} md={3} className="g-4">
                            {
                                products.map(product => <Products
                                    key={product.key}

                                    product={product}
                                ></Products>)
                            }
                        </Row>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;