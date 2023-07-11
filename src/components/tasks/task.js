import './task.css';
import { Link } from 'react-router-dom';

export const Task = (props) => {

    return (
        <Link to='/details'>
            <div className='task'>
                <div className='task_description'>{props.title}</div>
            </div>
        </Link>
    )
}