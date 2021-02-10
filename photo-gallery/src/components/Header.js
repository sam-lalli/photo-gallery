import React from 'react'
import logo from '../assets/IMG-1909.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <img src={logo} height={50} />
            <h1>The Gallery Of Sam Lalli</h1>
            <Link to={'/'}>Gallery</Link>
            <Link to={'/about'}>About</Link>
            
        </div>
    )
}

export default Header
