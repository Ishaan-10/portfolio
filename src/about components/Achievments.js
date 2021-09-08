import React from 'react'

export default function Achievments() {

    const achievments = [
        {
            title: "Won Hackathon",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet nesciunt cumque porro rem quod rerum autem explicabo, vero atque natus eum nulla id quasi officia, quam inventore laboriosam minima."
        },
        {
            title: "Won Hackathon",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet nesciunt cumque porro rem quod rerum autem explicabo, vero atque natus eum nulla id quasi officia, quam inventore laboriosam minima."
        },
        {
            title: "Won Hackathon",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet nesciunt cumque porro rem quod rerum autem explicabo, vero atque natus eum nulla id quasi officia, quam inventore laboriosam minima."
        },
    ]

    return (
        <div>
            <ul>
                {achievments.map(achievment => {
                    return (
                        <li>
                            <img src="check.png" height="45px" alt="" /> <span><b>{achievment.title}</b></span>
                            <p>{achievment.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
