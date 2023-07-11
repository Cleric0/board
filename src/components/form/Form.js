import './form.css';
import React from 'react';
import {useRootStore} from '../../store/use-root-store'
import { useState } from 'react';
import { tasksStatuses } from '../../dop';

export const InputOrSelect = (props) => {   
    const {todoStore} = useRootStore()

    const [selectId, setSelectedId] = useState('');
    const [text, setText] = useState('');

    const addTask = () => {
        todoStore.addTodo(text)
        setText('')
        props.onActionSubmit()
    }
    

    const handleStatusChange = (e) => {
        setSelectedId(e.target.value)
    }

    const handleFormSubmit = () => {
        todoStore.changeStatus(selectId, props.status)
        props.onActionSubmit()
    }

    const statusIndex = tasksStatuses.findIndex((item)=> item.status === props.status)
      
    return (
        <div className='wrapper'>
            {props.status === 'Backlog'
                ? (
                    <div className={'input-wrapper'}>
                        <input
                            className='inputForNewTask'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button className="buttonSbmt" onClick={addTask}>Submit</button>
                    </div>
                )
                : (
                    <div >
                    <select
                      className='wrap-sel'
                      onChange={handleStatusChange}
                    >
                        {todoStore.todos.filter((todo)=> todo.status === tasksStatuses[statusIndex - 1].status).map((task) => (
                            <option
                                key={task.id}
                                value={task.id}
                            >
                                {task.text}
                            </option>
                        ))}
                    </select>
                    <button className="buttonSbmt" onClick={handleFormSubmit}>Submit</button>
                    </div>
                )}
        </div>
    )
}
    // const [card, setCard] = useState(todos);
//   const handleTaskChange = (status, newStatus) => {
//     console.log(status)
//     // console.log(newStatus)
//     setCard(card.map((top) => {
//       if (top.status === status) {
//         return {...top, status: newStatus}
//       }
//       return top;
//     }))
// };

