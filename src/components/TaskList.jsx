import TaskCard from './TaskCard'
import { useContext } from 'react';
import {TaskContext2} from '../context/TaskContext'

function TaskList(props) {
  const {Tast} = useContext(TaskContext2)

  if (Tast.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>;
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {Tast.map((task) => 
        { return <TaskCard key={task.id} task={task}/>}
      )}
    </div>
  );
}

export default TaskList;
