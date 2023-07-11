import './window.css'
import { Link } from 'react-router-dom'
// import { useState } from 'react';

export const Window = () => {
    return (
        <div className="wrapper_for_description">
            <div className='task_details_description'>
                <button className='button_in_details'><Link to='/'>X</Link></button>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}