import React from 'react'

export default function Achievments() {

    const achievments = [
        {
            title: "Finalist in Zeta Hack 3.0",
            description: "Zeta Hacks 3.0 was a hackathon with over 6000+ participants and 4500+ teams. My team won the first round and we were among the top 50 teams to reach the finals."
        },
        {
            title: "Finalist in Hackalipse",
            description: "Hackalipse was a hackathon organized by ACM , TIET. My team created a website to help farmers solve their day to day problems. We successfully reached the finals and were among the top10 teams."
        },
        {
            title: "4th rank in Web Set Go contest",
            description: "Web Set Go ,a competition comprising of a set of rounds involving debugging a website and rebuilding another one from scratch. It was organized by TIET , Patiala."
        },
    ]

    return (
        <div >
            <h3><i class="fas fa-trophy"></i>  Achievments</h3>
            
            <p><span className="text-black fw-bolder">"Great achievement is usually born of great sacrifice, and is never the result of selfishness." - Napoleon Hill</span></p>
            <ul className="p-0">
                {achievments.map(achievment => {
                    return (
                        <li class="achievment-li" style={{
                            margin:"3% 0%",
                            padding:"1.5%"
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
