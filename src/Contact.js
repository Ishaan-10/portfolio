import React from 'react'
import './Assets/Css/contact.css'
import { Container, Row } from 'react-bootstrap'

export default function Contact() {

    const resetForm = ()=>{
        document.querySelectorAll("input").value="";
    }

    return (
        <div class="contact-container">
            <Container className="pt-3">
                <Row>
                    <form class="my-form" name="contact" netlify>
                        <div class="container">
                            <ul>
                                <h2>Get in touch</h2>
                                <h6 className="p-2">Will get back to you as soon as possible!</h6>
                                <li>
                                    <div class="grid grid-2">
                                        <input type="text" name="firstname" placeholder="First Name" required />
                                        <input type="text" name="lastname" placeholder="Last Name" required />
                                    </div>
                                </li>
                                <li>
                                    <div class="grid grid-2">
                                        <input type="email" name="email" placeholder="Email" required />
                                        <input type="tel" name="phone" placeholder="Phone" />
                                    </div>
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message"></textarea>
                                </li>
                                <li>
                                    <div class="grid grid-3">
                                        <div class="required-msg">REQUIRED FIELDS</div>
                                        <button class="btn-grid" type="submit">
                                            <span class="back">
                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" />
                                            </span>
                                            <span class="front">SUBMIT</span>
                                        </button>
                                        <button class="btn-grid" onClick={resetForm} type="reset">
                                            <span class="back">
                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="" />
                                            </span>
                                            <span class="front">RESET</span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </form>
                </Row>
            </Container>
        </div>
    )
}
