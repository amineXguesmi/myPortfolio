import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from "react";
import meter3 from "../assets/img/meter3.svg";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Ready to make an impact, I bring a diverse skill set to the table. Here's a snapshot of my capabilities</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter2} alt="web" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="mobile" />
                                    <h5>Mobile Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="desktop" />
                                    <h5>Desktop Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="blockchain" />
                                    <h5>BlockChain</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="NoSql/sql" />
                                    <h5>relational and Non relational database</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="cp" />
                                    <h5>Competitive programming </h5>
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={require("../assets/img/color-sharp.png")} alt="sharp" />
        </section>
    )
}

export default Skills
