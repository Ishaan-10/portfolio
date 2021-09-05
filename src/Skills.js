import React from 'react'
import './Assets/Css/skills.css'
import { Row, Col } from 'react-bootstrap'

export default function Skills() {
    return (
        <div id="skills-container" >
            <div className="container">
                <h1 className="text-center pt-4">Skills</h1>
                <div className="container-sm">
                    <Row className="text-center skill-row" >
                        <Col>
                            <i className="devicon-html5-plain-wordmark colored"></i>
                        </Col>
                        <Col>
                            <i class="devicon-css3-plain-wordmark colored"></i>

                        </Col>
                        <Col>
                            <i class="devicon-javascript-plain colored"></i>

                        </Col>
                        <Col>
                            <i class="devicon-java-plain-wordmark colored"></i>

                        </Col>
                    </Row>

                    <Row className="text-center skill-row" >
                        <Col>
                            <i class="devicon-nodejs-plain-wordmark colored"></i>

                        </Col>
                        <Col>
                            <i class="devicon-mongodb-plain-wordmark colored"></i>


                        </Col>
                        <Col>
                            <i class="devicon-express-original-wordmark"></i>


                        </Col>
                        <Col>
                            <i class="devicon-react-original-wordmark colored"></i>


                        </Col>
                    </Row>

                    <Row className="text-center skill-row" >
                        <Col>
                            <i class="devicon-mysql-plain-wordmark colored"></i>
                        </Col>
                        <Col>
                            <i class="devicon-bootstrap-plain-wordmark colored"></i>
                        </Col>
                        <Col>
                            <i class="devicon-git-plain-wordmark colored"></i>
                        </Col>
                        <Col>
                            <i class="devicon-github-original-wordmark"></i>

                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
