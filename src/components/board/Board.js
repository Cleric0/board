// import { useSelector } from 'react-redux';
// import { useState } from 'react';
import List from '../list/List';
import './board.css'


export const Board = (props) => {

    // const tasks = useSelector(state => state.todos.todos); 
    // const [card, setCard] = useState(tasks)



    return (
        <div className="board-cards">
            <div className='title'>{props.name}</div>
             <List 
             status={props.status}
             />
        </div>
    )
}