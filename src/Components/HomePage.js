import React, { Component } from 'react'

import '../App.css'

import shortglitch from '../shortglitch1.mp4'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videoURL: shortglitch
        }
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className='home-center-text'>
                        <h1>I make websites</h1>
                    </div>
                </main>

                <video className="home-background-video" loop autoPlay muted>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </React.Fragment>

        )
    }
};

export default HomePage