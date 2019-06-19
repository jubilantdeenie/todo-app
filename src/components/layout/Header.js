import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link 
            style={linkStyle}
            to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#51d0de',
    color: '#bf4aa8',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header