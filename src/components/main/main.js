import './main.css'; 
import { Board} from '../board/Board'
import { tasksStatuses } from '../../dop';

export const Main = () => {
    const tasksStatuse = tasksStatuses
    return (
        <main className="main_part">
            {tasksStatuse.map((state)=> (
            <Board key={state.id} name={state.title} status={state.status}/>
          ))}  
        </main>
    )
}


