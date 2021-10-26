import React,{useState} from 'react'
import './Assets/Css/about.css'
import { Row, Col, Button } from 'react-bootstrap'
import Education from './about components/Education';
import Achievments from './about components/Achievments';
import Work from './about components/Work';

export default function About() {

    // // const [eduButton]=useState("dark");
    // const [workB]=useState("light");
    // const [achievButton]=useState("light");
    const [activeSection,setActiveSection]=useState("Education")

    const section = ()=>{
        switch (activeSection) {
            case "Education":
                // setEdubutton("dark");
                // setWorkB("light");
                // setachievButton("light");
                return <Education />
            case "Achievments":
                // setEdubutton("light");
                // setWorkB("light");
                // setachievButton("dark");
                return <Achievments />
            case "Work":
                // setEdubutton("light");
                // setWorkB("dark");
                // setachievButton("light");
                return <Work />
            default:
                return <Education />
                
        }
    }

    return (
        <div className="about-container">
            <div className="container">
                <h2 id="about">About Me</h2>
                <p className="fs-5">
                I'm a technophile with a passion for learning and discovering new technologies. Currently, I am a MERN stack web developer and love to build new things for the web from scratch. I love to participate in hackathons and build projects. I aim to be a 10x developer one day and am working towards that goal.
                </p>
                <Row className="my-5" >
                    <Col md={3} >
                            <Button
                            onClick={()=>setActiveSection("Education")} variant={activeSection==="Education"?"dark":"light"} className="m-2">Education</Button>

                            <Button variant={activeSection==="Work"?"dark":"light"}
                            onClick={()=>setActiveSection("Work")} className="m-2">Experience</Button>

                            <Button variant={activeSection==="Achievments"?"dark":"light"}
                            onClick={()=>setActiveSection("Achievments")} className="m-2">Achievments</Button>

                            <Button href="#skills-container" variant="light" className="m-2">Skills</Button>
                            <Button target="_blank" href="https://github.com/Ishaan-10" variant="light" className="m-2"><i class="fab fa-github"></i></Button>
                    </Col>
                    <Col className="individual-component">
                        {section()}
                    </Col>
                </Row>

            </div>
        </div>
    )
}
