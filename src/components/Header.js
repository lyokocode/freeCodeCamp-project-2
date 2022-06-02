import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className='header-nav'>
                <div className='header-logo'>
                    <img src='https://cdn.dribbble.com/users/113499/screenshots/11939156/media/2484c70ccffecc98651499aa7422abbb.png?compress=1&resize=400x300&vertical=top' alt='backpack photo' />
                    <h2>travel with</h2>
                </div>
                <ul>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header