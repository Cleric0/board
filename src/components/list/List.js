import React from 'react';
import './list.css'; 
import { Task } from '../tasks/task';
import { useState } from 'react';
import { InputOrSelect } from '../form/Form';
import {useRootStore} from '../../store/use-root-store'
import {observer} from "mobx-react-lite";
// import { rootStore } from '../../store/root.store'

function List(props) {
  const [active, setActive] = useState(false)
  const {todoStore} = useRootStore()

  const todos = todoStore.todos

  const onTaskActionSubmit = () => setActive(false)

  return (
    <div className='card'>
        {todos.filter((task) => task.status === props.status)
        .map((task) => 
        <Task key={task.id} title={task.text} status={task.status} 
        description={task.description}/>
        )}

      <div className='wrapper'>
          {active ? <InputOrSelect onActionSubmit={onTaskActionSubmit} status={props.status}/>  : <></>}
{/* <div className='wow'>{selectedStatus?.text}</div> */}
          <button type='button' className='button_in_card' 
          onClick={() => {setActive((prev) => !prev)}}>+ Add card</button>
      </div>
      </div>
  )
}
export default observer(List)



          {/* <div className='wow'>{selectedStatus?.text}</div> */}

//   const cardes = useSelector(state => state.todos.todos);
//   const [card, setCard] = useState(state.todos)
//   const handleTaskChange = (id, newStatus) => {
//     props.setCard(props.card.map((task) => {
//       if (task.id === id) {
//         return {task, status: newStatus}
//       }
//       return task;
//     }))
// };
