import React from 'react'
import './Assets/Css/projects.css'
import { Col, Row } from 'react-bootstrap'
import Cardone from './Cardone'
import Cardtwo from './Cardtwo'
import projectData from './projectdata'

export default function Projects() {
    return (
        <div id="projects-container">
            <div className="container">
                <h1 className="text-white">Projects</h1>
                <h4 className="text-white">Full Stack Projects</h4>
                <Row>
                    <Col md>
                        <Cardtwo {...projectData[0]} />
                    </Col>
                    <Col md>
                        <Cardone {...projectData[1]} />
                    </Col>
                </Row>
                <h4 className="text-white">Smaller Projects</h4>
                <Row>
                    <Col md>
                        <Cardtwo {...projectData[2]} />
                    </Col>
                    <Col md>
                        <Cardone {...projectData[3]} />
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Cardtwo {...projectData[4]} />
                    </Col>
                    <Col md>
                        {/* <Cardone {...projectData[4]} /> */}
                    </Col>
                </Row>


            </div>

        </div>
    )
}
