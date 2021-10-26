import React from 'react'
import './Assets/Css/projects.css'
import { Col, Row,Button } from 'react-bootstrap'
import Cardone from './Cardone'
import Cardtwo from './Cardtwo'
import projectData from './projectdata'

export default function Projects() {
    return (
        <div id="projects-container">
            <div className="container">
                <h2 className="text-white">Projects</h2>
                <h3 className="text-white">Full Stack Projects</h3>
                <Row>
                    <Col lg>
                        <Cardtwo {...projectData[0]} />
                    </Col>
                    <Col lg>
                        <Cardone {...projectData[1]} />
                    </Col>
                </Row>
                <h3 className="text-white mt-3">Smaller Projects</h3>
                <Row>
                    <Col lg>
                        <Cardtwo {...projectData[2]} />
                    </Col>
                    <Col lg>
                        <Cardone {...projectData[3]} />
                    </Col>
                </Row>
                <Row>
                    <Col lg>
                        <Cardtwo {...projectData[4]} />
                    </Col>
                    <Col lg>
                        {/* <Cardone {...projectData[4]} /> */}
                    </Col>
                </Row>
            <pre>
            <Button target="_blank" href="https://github.com/Ishaan-10" variant="dark my-3 mb-5" >See more on Github <i class="fab fa-github"></i></Button>
            </pre>
            </div>

        </div>
    )
}
