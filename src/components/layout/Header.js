import React from 'react';

/**
 * functional component used here as there is
 * no state management -- just returning something
 */

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: "#fff",
    textAlign: "center",
    padding: "10px"

}

export default Header;