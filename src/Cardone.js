import React from 'react'
import './Assets/Css/card.css'

export default function Cardone() {
    return (
        <div>
            <div class="blog-card">
                <div class="meta">
                    <div class="photo" ></div>
                    <ul class="details">
                        <li class="author"><a href="#">John Doe</a></li>
                        <li class="date">Aug. 24, 2015</li>
                        <li class="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="description">
                    <h1>Learning to Code</h1>
                    <h2>Opening a door to the future</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p class="read-more">
                        <a href="#">View Live</a>
                        <span> </span>
                        <a href="#">Source Code</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
