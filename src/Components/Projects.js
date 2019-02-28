import React, { Component } from 'react'

import '../App.css'

class Projects extends Component {
    render() {
        return (
            <div className='projects-text-container'>
                <div className='projects-text'>
                    <h1>PROJECTS</h1>
                    <h2>TheSynth</h2>
                    <p>Synth buitlt with React and Tone.js, styled with Sass. Choose from multiple voices and oscillators.</p>
                    <h2>Pizza Dough</h2>
                    <p>Tip tracker for delivery drivers. Positions logged in drivers on leader board based on amount of tips made. React front-end and Node/MongoDB backend to track driver data. </p>
                </div>

            </div>
        )
    }
}


export default Projects