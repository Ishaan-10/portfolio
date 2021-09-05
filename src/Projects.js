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
                {/* <h2 className="heading">Projects</h2> */}
                {projectData.map((project, index) => {
                        return (<Row>
                            <Col md><Cardtwo /></Col>
                        </Row>)

                })}


            </div>

        </div>
    )
}
