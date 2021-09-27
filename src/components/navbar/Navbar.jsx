import React from 'react';
import './navbar.scss';
import {Person, Mail, MenuOpen} from '@material-ui/icons';

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'navbar shadow-lg ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='/' className='logo'>genius.</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>+44 924 12 74</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>safak@genius.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className="hamburger" onClick={ () => setMenuOpen(!menuOpen) }>
                        <span className='line1'></span>
                        <span className='line1'></span>
                        <span className='line1'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
