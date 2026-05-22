import React from 'react'

export default function Navbar() {
    return(
        
        <nav className='navbar'>
            <div className ='logo-section'>
                <img src='./images/troll-face.png' className ='logo'/>
                <h2 className='title-app'>Meme Generator</h2>
            </div>
            <h3 className ='title-lesson'>React Course - Project 3</h3>
        </nav>
    )
}