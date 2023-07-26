import React from 'react'
import { Col, Row, Tab, Nav, Container } from "react-bootstrap";
import ProjectCard from './ProjectCard';
function Project() {
    const projectsWeb = [
        {
            title: "INSAT-SURVEY",
            description: "C# , .net , SQL , Bootstrap",
            imgUrl: require("../assets/img/project1.png"),
            githubUrl: "https://github.com/YassDH/ProjetDotNet"
        },
        {
            title: "Portfolio",
            description: "React , Bootstrap",
            imgUrl: require("../assets/img/project2.png"),
            githubUrl: "https://github.com/amineXguesmi/Portfolio"

        },
        {
            title: "Meme-Generator",
            description: "React , Vite",
            imgUrl: require("../assets/img/project3.png"),
            githubUrl: "https://github.com/amineXguesmi/React-vite-Meme-Generator"

        },
        {
            title: "Translator",
            description: "React",
            imgUrl: require("../assets/img/project4.png"),
            githubUrl: "https://github.com/amineXguesmi/translator-app"

        }
    ];
    const projectsMobile = [
        {
            title: "Peace-Link",
            description: "Flutter , FireBase",
            imgUrl: require("../assets/img/project21.png"),
            githubUrl: "https://github.com/amineXguesmi/PeaceLink"

        },
        {
            title: "BMI",
            description: "FLutter ",
            imgUrl: require("../assets/img/project31.png"),
            githubUrl: "https://github.com/amineXguesmi/Bmi-App"

        },
        {
            title: "My-Card",
            description: "Flutter",
            imgUrl: require("../assets/img/project11.png"),
            githubUrl: "https://github.com/amineXguesmi/MyCard-App"

        },
        {
            title: "Clima",
            description: "Flutter",
            imgUrl: require("../assets/img/progress.png"),
            githubUrl: "#"


        },
    ];
    const projectsDesktop = [
        {
            title: "JavaRide",
            description: "Java : swing & awt , sql",
            imgUrl: require("../assets/img/project12.png"),
            githubUrl: "https://github.com/amineXguesmi/JavaRide"
        },
    ];
    const projectsBlockchain = [
        {
            title: "Zwallet",
            description: "truffle,web3,react,Solidity ",
            imgUrl: require("../assets/img/website.png"),
            githubUrl: "https://github.com/amineXguesmi/z-wallet"

        },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <div>

                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non quam a veritatis iste autem consequatur, possimus dolorem excepturi unde reiciendis ipsam explicabo perferendis voluptatibus necessitatibus sint aspernatur nemo veniam.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">

                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Web</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Mobile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Desktop</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="forth">blockchain</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first" >
                                        <Row>
                                            {
                                                projectsWeb.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                projectsMobile.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {
                                                projectsDesktop.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="forth">
                                        <Row>
                                            {
                                                projectsBlockchain.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </div>
            </Container>
            <img className='background-image-right' src={require("../assets/img/color-sharp2.png")} alt="" />
        </section>
    )
}

export default Project
