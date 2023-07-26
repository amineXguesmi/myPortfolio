import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

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
                            <a href="https://www.linkedin.com/in/mohamed-amine-guesmi-061923230/" className="ms-1"><img src={require("../assets/img/nav-icon1.svg")} alt="" /></a>
                            <a href="https://www.facebook.com/amine.125.gasmi/" className="ms-1"><img src={require("../assets/img/nav-icon2.svg")} alt="" /></a>
                            <a href="https://github.com/amineXguesmi" className="ms-1"><img src={require("../assets/img/nav-icon4.svg")} alt="" /></a>
                        </div>
                        <p className="d-inline-flex align-items-center justify-content-center mx-5">CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
