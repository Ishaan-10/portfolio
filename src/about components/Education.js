import React from 'react'
import '../Assets/Css/education.css'
export default function Education() {
    return (
        <div>
            <h3><i class="fas fa-user-graduate"></i>  Education</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, voluptatibus voluptates dolorum numquam perferendis voluptatum, et veritatis praesentium fuga odit necessitatibus recusandae inventore ratione rem ut minus non odio quod?</p>

            <div class="">
                <div class="">
                    <div class="">
                        <article class="education-item">
                            <i class="education-icon fa fa-graduation-cap"></i>
                            <h3 class="education-date">2019</h3>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"><p>
                                        PhD in Computer Engineering
                                    </p></h5>

                                    <h6 class="card-subtitle"> <span>link to website</span> </h6>
                                    <p class="card-text text-muted">2018 - 2019</p>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis risus id nulla eleifend eleifend. In ligula eros, hendrerit eu tristique sit amet, gravida ut mi. Integer eu nisl id augue aliquet condimentum sit amet nec turpis. Sed eget hendrerit lacus.
                                        Donec erat lectus, varius sed risus id, bibendum cursus velit </p>
                                    <p class="card-text">Links to <a href="https://github.com/eugene-robb">GitHub</a> and demo.</p>
                                </div>
                            </div>
                        </article>
                        <article class="education-item">
                            <i class="education-icon fa fa-graduation-cap"></i>
                            <h3 class="education-date">2018</h3>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"> <span>
                                        MSc in Computer Engineering</span> </h5>

                                    <h6 class="card-subtitle"> <span>link to website</span> </h6>
                                    <p class="card-text text-muted">2015 - 2018</p>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis risus id nulla eleifend eleifend. In ligula eros, hendrerit eu tristique sit amet, gravida ut mi. Integer eu nisl id augue aliquet condimentum sit amet nec turpis. Sed eget hendrerit lacus.
                                        Donec erat lectus, varius sed risus id, bibendum cursus velit </p>
                                    <p class="card-text">Link to <span href="https://github.com/eugene-robb">GitHub</span> and <span rel="noopener noreferrer">demo</span>.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}
