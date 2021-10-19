import React from 'react';
import { Accordion } from 'react-bootstrap';
import img from '../../22.png'
const Faq = () => {
    return (
        <div>
            <div className="mt-5 p-5">
                <h1 className="bg-dark text-white p-3"> Do You Have Questions ?
                    We'll help you to grow your career and growth.</h1>
                <div className="row p-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className=" mt-5">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Why Choose Us?</Accordion.Header>
                                    <Accordion.Body>
                                        Explain to you how all this mistaken idea of denouncing pleasure and praising
                                        pain was born and I will give you a complete account
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What are some service in here?</Accordion.Header>
                                    <Accordion.Body>
                                        7bite Hospital aims to provide the highest possible level of care by the qualified.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How much support?</Accordion.Header>
                                    <Accordion.Body>
                                        We try to only advertise products available on site at that time, however sometimes this isn’t always possible – if there is something you see advertised and it isn’t in stock yet please feel free to email us for more information! We’ll always try and help.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <img className="img-fluid" src={img} alt="" style={{
                            height: "600px",
                            width: "400px"
                        }} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;