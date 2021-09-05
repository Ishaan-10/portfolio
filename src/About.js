import React from 'react'
import './Assets/Css/about.css'
import { Row, Col, Button } from 'react-bootstrap'

export default function About() {
    return (
        <div className="about-container">
            <div className="container">
                <h1 id="about">About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste veniam exercitationem magni at vel, aliquam quasi non laudantium nobis rerum ipsum expedita quia quas odit consequuntur a quae quisquam similique!
                    Vero, ullam nam consequatur quisquam rerum hic tenetur sunt cumque error quia eum quo saepe veritatis accusamus non maxime est labore iure obcaecati odio alias temporibus sed dolorem. Vitae, suscipit?</p>
                <Row className="my-5" >
                    <Col xs={2} >
                        <Row>
                            <img src={require('./Assets/Images/pic.jpg')} alt="" />
                        </Row>
                        <Row>
                            <Button  variant="dark" className="m-2">Education</Button>
                        </Row>
                        <Row>
                            <Button variant="light" className="m-2">Work Experience</Button>
                        </Row>
                        <Row>
                            <Button variant="light" className="m-2">Achievments</Button>
                        </Row>
                        <Row>
                            <Button href="#skills-container" variant="light" className="m-2">Skills</Button>
                        </Row>

                    </Col>
                    <Col xs={1}>
                    </Col>
                    <Col>
                        <h3>Education</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, voluptatibus voluptates dolorum numquam perferendis voluptatum, et veritatis praesentium fuga odit necessitatibus recusandae inventore ratione rem ut minus non odio quod?</p>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
