import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css'

const Review = () => {
    return (
        <div className="review">
            <div className="row my-5">
                <div className="col-lg-8 col-md-8 col-12">
                    <img className="img-fluid" src="https://nordis.true-emotions.studio/dental/wp-content/uploads/sites/5/2018/03/am6.jpg" alt="" style={{
                        height: "800px"
                    }} />
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header className="text-center text-white fs-1 bg-dark">Our Patient</Card.Header>
                        <ListGroup variant="flush">

                            <ListGroup.Item>
                                <div>
                                    <img className="sImg" src="https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" alt="" />
                                </div>
                                <blockquote>
                                    The services that I receive from (DN) is excellent. Dr. (Name) and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.
                                </blockquote>
                                <Rating
                                    initialRating={4}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                            </ListGroup.Item>
                            <br />
                            <ListGroup.Item>
                                <div>
                                    <img className="sImg" src="https://images.unsplash.com/photo-1610476650745-58700c3defa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />
                                </div>
                                reat medical office, wonderful and warm experience from start to finish. Appreciate Dr. (Name) taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.
                                <Rating
                                    initialRating={3}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                            </ListGroup.Item>
                            <br />
                            <ListGroup.Item>
                                <div>
                                    <img className="sImg" src="https://images.unsplash.com/photo-1614273867161-22da2cd8ab39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                </div>
                                This practice is terrific. Dr. (Name) combines expertise and a willingness to listen and discuss. She’s also an excellent surgeon. Also, the staff is very friendly and professional. I’ve never had to wait more than a few minutes when I arrive on time for an appointment.
                                <Rating
                                    initialRating={5}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Review;