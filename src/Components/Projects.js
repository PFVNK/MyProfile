import React, { Component } from 'react'

import '../App.css'

class Projects extends Component {
    render() {
        return (
            <div className='projects-text-container'>
                <div className='projects-text'>
                    <h1>PROJECTS</h1>
                    <a href='https://www.thesynth.live'><h2>TheSynth</h2></a>
                    <p>Synth buitlt with React and Tone.js, styled with Sass. Choose from multiple voices and oscillators.</p>
                    <a href="https://www.pizza-dough.com/"><h2>Pizza Dough</h2></a>
                    <p>Tip tracker for delivery drivers. Positions delivery drivers on leader board based on amount of tips made. React front-end and Node/MongoDB backend to track driver data.</p>
                </div>

            </div>
        )
    }
}


export default Projects