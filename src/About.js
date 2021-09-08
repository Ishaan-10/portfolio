import React,{useState} from 'react'
import './Assets/Css/about.css'
import { Row, Col, Button } from 'react-bootstrap'
import Education from './about components/Education';
import Achievments from './about components/Achievments';
import Work from './about components/Work';

export default function About() {

    const [eduButton,setEdubutton]=useState("dark");
    const [workB,setWorkB]=useState("light");
    const [achievButton,setachievButton]=useState("light");
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
        }
    }

    return (
        <div className="about-container">
            <div className="container">
                <h1 id="about">About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste veniam exercitationem magni at vel, aliquam quasi non laudantium nobis rerum ipsum expedita quia quas odit consequuntur a quae quisquam similique!
                    Vero, ullam nam consequatur quisquam rerum hic tenetur sunt cumque error quia eum quo saepe veritatis accusamus non maxime est labore iure obcaecati odio alias temporibus sed dolorem. Vitae, suscipit?</p>
                <Row className="my-5" >
                    <Col xs={3} >
                            <Button  variant={eduButton} 
                            onClick={()=>setActiveSection("Education")} className="m-2">Education</Button>
                            <Button variant={workB}
                            onClick={()=>setActiveSection("Work")} className="m-2">Work Experience</Button>
                            <Button variant={achievButton}
                            onClick={()=>setActiveSection("Achievments")} className="m-2">Achievments</Button>
                            <Button href="#skills-container" variant="light" className="m-2">Skills</Button>
                    </Col>
                    <Col xs={1}>
                    </Col>
                    <Col>
                        {section()}
                    </Col>
                </Row>

            </div>
        </div>
    )
}
