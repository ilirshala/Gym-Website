import React from 'react';
import '../css/Banner.css';
import slide from '../img/slide2_2.jpg'

function Banner() {
    return (
        <div className="banner">
            <div className="right">
                <h1>YOUR FITNESS STARTS HERE <br/>
                SAVE TIME AND SIGN UP <span style={{color: '#dd3333'}}>ONLINE</span></h1>
            </div>
            <div className="button">
                <button>BECOME A MEMBER</button>
            </div>
        </div>
    )
}

export default Banner
