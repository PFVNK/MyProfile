import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className='nav-nav'>
                <NavLink to={'/'}>
                    <header className='nav-title'>
                        <span className='nav-badge'>
                            <p>PH</p>
                        </span>
                        <h1>Patrick Heflin</h1>
                    </header>
                </NavLink>


                <nav className='nav-items'>
                    <ul>
                        <li><NavLink to={'/about'}>ABOUT</NavLink></li>
                        <li><NavLink to={'/projects'}>PROJECTS</NavLink></li>
                        <li><NavLink to={'/contact'}>CONTACT</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Nav

