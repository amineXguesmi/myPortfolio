import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Mobile Developer", "Web Developer", "Desktop developer"];
    const period = 2000;
    const scrollToContact = () => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className='banner' id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} xl={7} md={6}>
                        <span className='tagline'>
                            Welcome to my Portfolio
                        </span>
                        <h1>
                            Coding My Way 
                        </h1>
                        <h2>
                            <span className='wrap'> {text}</span>
                        </h2>
                        <p>
                            I am a hardworking and ambitious individual witha great passion for the applications development .
                            I am currently in first year in software engineering in INSAT.
                        </p>
                        <div class="buttons">
                            <button class="btn" onClick={scrollToContact}><span></span><p data-start="Let's connect" data-text="Excellen" data-title="Let's connect"></p></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={require("../assets/img/Banner.png")} alt="header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
