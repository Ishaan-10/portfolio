import React from 'react'

export default function Cardtwo() {
    return (
        <div class="blog-card alt">
            <div class="meta">
                <div class="photo"></div>
                <ul class="details">
                    <li class="author"><a href="#">Jane Doe</a></li>
                    <li class="date">July. 15, 2015</li>
                    <li class="tags">
                        <ul>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Code</a></li>
                            <li><a href="#">JavaScript</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="description">
                <h1>Mastering the Language</h1>
                <h2>Java is not the same as JavaScript</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <p class="read-more">
                    <a href="#">View Live</a>
                    <span> </span>
                    <a href="#">Source Code</a>
                </p>
            </div>
        </div>
    )
}
