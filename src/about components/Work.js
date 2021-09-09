import React from 'react'
import '../Assets/Css/work.css'

export default function Work() {
    return (
        <div>
            <h3><i class="fas fa-briefcase"></i>  Work Experience</h3>
            <p> <span className="text-black fw-bolder"> “Experience is the teacher of all things.” - Julius Ceaser </span><br />
                I am always on the lookout for opporuntites , especially which force me to go out of my comfort zone or think out of the box. Have any such opporunity for me ? Feel free to reach out.
            </p>
            <div class="containerz">

                <div class="timeline-block timeline-block-right">
                    <div class="marker"></div>
                    <div class="timeline-content py-2">
                        <h3>Web Development Intern</h3>
                        <h5 className="mb-0 text-primary">CyberXplore <span className="float-end"><i style={{color:"green"}} class="fas fa-map-marker-alt"></i> Remote</span></h5><br />
                        
                        <p>
                            - Worked as a full stack developer (MERN stack). <br />
                            - Made APIs using Express to automate several tasks and perform CRUD operations. <br />
                            - Integrated the React.js frontend using the APIs created. <br />
                            - Was exposed to working with Next.js and Redux <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
