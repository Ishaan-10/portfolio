import React from 'react'
import './Assets/Css/contact.css'
import { Container } from 'react-bootstrap'

export default function Contact() {

    const resetForm = () => {
        document.querySelectorAll("input").value = "";
    }

    return (
        <div id="contact-">
            <Container className="pt-3">
                <form class="my-form" method="post" name="contact" netlify>

                    <div class="">container
                        <ul className="p-0">
                            <h2>Get in touch</h2>
                            <div className="icons">
                                <div class="rounded-social-buttons">
                                    <a class="social-button facebook" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-button twitter" href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                    <a class="social-button linkedin" href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
                                    <a class="social-button youtube" href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                                    <a class="social-button instagram" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                </div>

                            </div>
                            <h6 className="p-2">Will get back to you as soon as possible!</h6>
                            <li>
                                <div class="grid grid-2">
                                    <input type="text" name="firstname" placeholder="First Name" required />
                                    <input type="text" name="lastname" placeholder="Last Name" required />
                                </div>
                            </li>
                            <li>
                                <div class="grid grid-2">
                                    <input type="hidden" name="form-name" value="contact" />
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

            </Container>
        </div>
    )
}
