import './header.css'; 
import { useState } from 'react';
import down from '../assets/img/arrow-down.png'
import up from '../assets/img/arrow-up.png'

export const Header = () => {
    const [open, setOpen] = useState(false); 
    return (
        <header className="header-area">
        <h1 className="header-board">Awesome Kanban Board</h1>
        <div className='menu_wrapper'>
                <div className="menu_trigger" onClick={() => {setOpen(!open)}}>
                    <button className='btn_in_header'>
                        <img className="avatar" src="./images/user-avatar.png" alt='avatar'/>
                        <div className='vector'>
                            {open ? (<img src={down} alt='вниз' />) : (<img src={up} alt='вверх' />)
                            }
                        </div>
                    </button>
                </div>

                <div className={`dropdown_menu ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <li className='menu_item'><a href='#'>Profile</a></li>
                        <li className='menu_item'><a href='#'>Log Out</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}