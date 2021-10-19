import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MainData from '../dummyData/Item.json'
import FullServiceShow from '../FullServiceShow/FullServiceShow';



const FullService = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(MainData)
    }, [])

    return (
        <div>
            <div>

                <div className="">
                    <div>
                        <Row xs={1} md={3} className="g-4">
                            {
                                products.map(product => <FullServiceShow
                                    key={product.key}

                                    product={product}
                                ></FullServiceShow>)
                            }
                        </Row>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FullService;