import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
function Footer() {
    return (
        <footer>
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={require('../assets/img/logo.png')} alt="logo" />
                    </Col>
                    <Col sm={6} className='d-flex align-items-center justify-content-center'>
                        <div className='social-icon d-inline-flex align-items-center justify-content-center'>
                            <a href="https://www.linkedin.com/in/mohamed-amine-guesmi-061923230/" className="ms-1"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/amine.125.gasmi/" className="ms-1"><img src={navIcon2} alt="" /></a>
                            <a href="https://github.com/amineXguesmi" className="ms-1"><img src={navIcon4} alt="" /></a>
                        </div>
                        <p className="d-inline-flex align-items-center justify-content-center mx-5">CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
