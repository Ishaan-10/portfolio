import React from 'react'
import './Assets/Css/hero.css'
import { Container, Row, Button } from 'react-bootstrap'
import ReactTypingEffect from 'react-typing-effect';

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
        <div data-aos="fade-up" className="hero-container">
            <Container className="content">
                <Row>
                    <ReactTypingEffect
                        speed={200}
                        eraseSpeed={100}
                        eraseDelay={750}
                        cursorClassName="cursorClassName"
                        typingDelay={1000}
                        text={["Hello !", "Bonjour !","Namaste !","Olá !","Guten tag !"]}
                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                        displayTextRenderer={(text) => {
                            return (
                                <h1>
                                    {text.split('').map((char) => {
                                        
                                        return (
                                            <span
                                            >{char}</span>
                                        );
                                    })}
                                </h1>
                            );
                        }}
                    />
                </Row>
                <Row>
                    <h2>I'm Ishaan Bhola</h2>
                </Row>
                <Row>
                    <h3>Not your average computer science student</h3>
                </Row>
                <Row>
                    <h4>Full Stack Developer | DSA enthusiast | Problem Solver </h4>
                </Row>
            </Container>
            <Container className="button-container">

                <Button target="_blank" href="Resume.pdf" variant="light" className="m-2" >Download Resume</Button>
                <Button href="#contact-container" variant="dark" className="m-2">Contact me</Button>

            </Container>

        </div>
    )
}
