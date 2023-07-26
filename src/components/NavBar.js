import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const scrollToContact = () => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand href="/">
                    <img src={require('../assets/img/logo.png')} alt="Logo-" className='nav-logo me-3'  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <br />
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <br />
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <br />
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <br />
                    </Nav>
                    <Nav className='navbar-text'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mohamed-amine-guesmi-061923230/"><img src={require("../assets/img/nav-icon1.svg")} alt="" /></a>
                            <a href="https://www.facebook.com/amine.125.gasmi/"><img src={require("../assets/img/nav-icon2.svg")} alt="" /></a>
                            <a href="https://github.com/amineXguesmi"><img src={require("../assets/img/nav-icon4.svg")} alt="" /></a>
                        </div>
                    </Nav>
                    <br />
                    <Nav className=' navbar-text'>
                        <button className="vvd" onClick={scrollToContact}>
                            <span>
                                Let’s Connect
                            </span>
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}