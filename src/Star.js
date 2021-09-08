import React from 'react'
import './Assets/Css/skills.css'
import './Assets/Css/star.css'

export default function star(props) {

    const {num} = props;
    let arr=[];
    for(let i=1;i<=num;i++){
        arr.push(true);
    }
    for(let i=1;i<num-5;i++){
        arr.push(false);
    }
    console.log(arr);


    return (
        <fieldset class="text-center starability-basic" style={{margin:"0 auto"}}>
        <input checked={arr[0]} disabled type="radio" value="1" />
        <label title="Terrible">1 star</label>
        <input checked={arr[1]} disabled type="radio" value="2" />
        <label title="Not good">2 stars</label>
        <input checked={arr[2]} disabled type="radio" value="3"/>
        <label title="Average">3 stars</label>
        <input checked={arr[3]} disabled type="radio" value="4" />
        <label title="Very good">4 stars</label>
        <input checked={arr[4]} disabled type="radio" value="5" />
        <label title="Amazing">5 stars</label>
    </fieldset>
    )
}
