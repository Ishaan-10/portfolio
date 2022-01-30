import React from 'react'
import { Badge } from 'react-bootstrap';

export default function Cardtwo(props) {
    const {
        title,
        // date,
        description,
        // tagline,
        tags,
        liveLink,
        githubLink,
        image
    } = props;


    return (
        <div>
            <div class="blog-card alt">
                <div class="meta">
                <div class="photo" style={{
                        backgroundImage:`url(${image})`
                    }} ></div>
                    <ul class="details">
                        {/* <li class="author"><a href="#">John Doe</a></li> */}
                        {/* <li class="date">{date}</li> */}
                        <li class="tags">

                        </li>
                    </ul>
                </div>
                <div class="description">
                    <h1>{title}</h1>
                    <h2>
                        {tags.map((tag, index) =>
                        (
                            <Badge bg="success m-1"> {tag} </Badge>
                        )
                        )}
                    </h2>
                    <p>
                        {description}
                    </p>
                    <p class="read-more">
                        {liveLink && <a target="_blank" rel="noopener noreferrer" href={liveLink}>View Live</a>}
                        <span> </span>
                        <a target="_blank" rel="noopener noreferrer" href={githubLink}>Source Code</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
