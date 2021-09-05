import React from 'react'
import './Assets/Css/projects.css'
import {Col, Row} from 'react-bootstrap'
import Cardone from './Cardone'
import Cardtwo from './Cardtwo'

export default function Projects() {
    return (
        <div id="projects-container">
            <div className="container">
                {/* <h2 className="heading">Projects</h2> */}
                <Row>
                    <Col md><Cardtwo /></Col>
                    <Col md><Cardone /></Col>
                </Row>
                <Row>
                    <Col md><Cardtwo /></Col>
                    <Col md><Cardone /></Col>
                </Row>


            </div>

        </div>
    )
}
