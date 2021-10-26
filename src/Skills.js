import React from 'react'
import './Assets/Css/skills.css'
import './Assets/Css/star.css'
import { Row, Col } from 'react-bootstrap'
import Star from './Star'
export default function Skills() {
    return (
        <div id="skills-container" >
            <div className="container p-5">
                <h1 className="text-center pt-4">Skills</h1>
                <div className="container-sm">
                    <Row className="text-center skill-row" >
                        <Col >
                            <i className="devicon-html5-plain-wordmark colored"></i>
                            <Star num={4} />
                        </Col>
                        <Col>
                            <i class="devicon-css3-plain-wordmark colored"></i>
                            <Star num={4} />
                        </Col>
                        <Col>
                            <i class="devicon-javascript-plain colored"></i>
                            <Star num={3} />
                        </Col>
                        <Col>
                            <i class="devicon-java-plain-wordmark colored"></i>
                            <Star num={4} />
                        </Col>
                    </Row>

                    <Row className="text-center skill-row" >
                        <Col>
                            <i class="devicon-nodejs-plain-wordmark colored"></i>
                            <Star num={3} />
                        </Col>
                        <Col>
                            <i class="devicon-mongodb-plain-wordmark colored"></i>
                            <Star num={3} />

                        </Col>
                        <Col>
                            <i class="devicon-express-original-wordmark"></i>
                            <Star num={4} />

                        </Col>
                        <Col>
                            <i class="devicon-react-original-wordmark colored"></i>
                            <Star num={4} />

                        </Col>
                    </Row>

                    <Row className="text-center skill-row" >
                        <Col>
                            <i class="devicon-mysql-plain-wordmark colored"></i>
                            <Star num={3} />
                        </Col>


                        <Col>
                            <i class="devicon-github-original-wordmark"></i>
                            <Star num={4} />

                        </Col>
                        <Col>
                            <i class="devicon-git-plain-wordmark colored"></i>
                            <Star num={4} />
                        </Col>
                        <Col>
                            <i class="devicon-bootstrap-plain-wordmark colored"></i>

                            <Star num={5} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
