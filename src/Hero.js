import React from 'react'
import './Assets/Css/hero.css'
import { Container, Row, Button} from 'react-bootstrap'

export default function Hero() {

    // const greetings = ["Hi!","Bonjour!","Guten tag!","Namaste!","Olá!","Hola!","Hi!"];
    // const [greeting , setGreeting]=useState("Hi!");
    // const num = (Math.floor(Math.random()*greetings.length-1 +1));
    
    // useEffect(()=>{
    //     setInterval(()=>{
    //         setGreeting(greetings[num]);
    //     },1000);
    // },[])


    return (
        <div className="hero-container">
            <Container className="content">
                <Row>
                    <h1>Hi!</h1>
                </Row>
                <Row>
                    <h2>I'm Ishaan Bhola</h2>
                </Row>
                <Row>
                    <h3>Not your average computer science student</h3>
                </Row>
                <Row>
                    <h4>Full Stack Developer | DSA enthusiast| Problem Solver |</h4>
                </Row>
            </Container>
            <Container className="button-container">
                
                    <Button target="_blank" href="Resume.pdf" variant="light" className="m-2" download="Ishaan_Bhola_Resume">Download Resume</Button>
                    <Button href="#contact-container" variant="dark" className="m-2">Contact me</Button>
                
            </Container>

        </div>
    )
}
