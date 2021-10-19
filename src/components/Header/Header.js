import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from './../../Red_and_White_Dental_Logo-removebg-preview.png'
import img1 from '../../1-removebg-preview.png'
import img2 from '../../2.png'
import img3 from '../../3.png'
import './Header.css'
// import useCart from '../../hooks/useCart';
// import useProducts from '../../hooks/useProducts';

const Header = (props) => {
    const { user, logOut } = useAuth()
    // const { name } = props.pd
    return (

        <>
            <div className="header">

                <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={img} alt="" style={{ height: "120px" }} />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-center fs-5">
                            <Nav.Link as={Link} to="/home" style={{ color: "white" }} activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }}
                            >Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" style={{ color: "white" }} activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>About</Nav.Link>
                            <Nav.Link as={Link} to="/fullService" style={{ color: "white" }} activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Products</Nav.Link>

                            <Nav.Link as={Link} to="/team" style={{ color: "white" }} activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Team</Nav.Link>

                            {user.displayName && <span className=" text-white fs-5 p-2">Hello {user.displayName}</span>}

                            {user.displayName ?
                                <button onClick={logOut}>Log Out</button>
                                :
                                <Navbar.Text>
                                    Signed in as: <Link to="/login" activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}>Log in</Link>
                                </Navbar.Text>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <div className="mb-5">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="img-fluid"
                                src={img1}
                                alt="Third slide"
                                style={{ height: "500px" }}
                            />

                            {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="img-fluid"
                                src={img2}
                                alt="Second slide"
                                style={{ height: "500px" }}
                            />

                            {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="img-fluid"
                                src={img3}
                                alt="First slide"
                                style={{ height: "500px" }}
                            />

                            {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* <img className="img-fluid" src="https://rubiktheme.com/demo/at_dimita_demo/themes/at_dimita/assets/img/modules/leoslideshow/slide1-h2.png" alt="" /> */}


            </div>
        </>
    );
};

export default Header;