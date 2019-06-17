import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    background: '#427322',
    color: '#d8e5c6',
    textAlign: 'center',
    padding: '10px'
}

export default Header