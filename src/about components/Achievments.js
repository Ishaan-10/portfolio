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
        <div >
            <h3><i class="fas fa-trophy"></i>  Achievments</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, voluptatibus voluptates dolorum numquam perferendis voluptatum, et veritatis praesentium fuga odit necessitatibus recusandae inventore ratione rem ut minus non odio quod?</p>
            <ul className="p-0">
                {achievments.map(achievment => {
                    return (
                        <li class="achievment-li" style={{
                            margin:"3% 0%",
                            padding:"1%"
                            }}>
                            <img src="check.png" height="45px" alt="" /> <span><b>{achievment.title}</b></span>
                            <p>{achievment.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
