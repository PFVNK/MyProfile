import React, { Component } from 'react'

import '../App.css'

class About extends Component {
    render() {
        return (
            <div className='about-text-container'>
                <div className='about-text'>
                    <h1>ABOUT</h1>
                    <p>Hi, I'm <span className='about-text-highlight'>Patrick Heflin</span></p>
                    <p>I am a Web Developer from <span className='about-text-highlight'>Houston, Texas</span>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati officiis hic ex eveniet officia autem temporibus atque dolorem deleniti.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur pariatur minima, perferendis nobis doloribus voluptates a voluptatem assumenda nisi reprehenderit dolore! Nam rerum eligendi ex labore excepturi perspiciatis dicta fugiat earum id ratione cum, eius placeat quas nemo vitae eaque.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ab culpa illum optio nostrum facere iure id alias ipsa corrupti sint, voluptatem est expedita nam amet autem nobis. Fugit deleniti similique rem nisi tenetur ducimus dolor natus temporibus! Eos, perspiciatis facere harum numquam aut cumque. Ex architecto earum similique ea voluptas, minus quod quos. Ducimus eligendi inventore odio sed aliquam.</p>
                </div>
            </div>
        )
    }
}


export default About