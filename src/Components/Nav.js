import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <div className='nav-nav'>
                <header className='nav-title'>
                    <span className='nav-badge'>
                        <p>PH</p>
                    </span>
                    <h1>Patrick Heflin</h1>
                </header>

                <nav className='nav-items'>
                    <ul>
                        <li>ABOUT</li>
                        <li>PROJECTS</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Nav

