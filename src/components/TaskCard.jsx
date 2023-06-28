import {useContext} from "react";
import { TaskContext2 } from "../context/TaskContext";

function TaskCard(props) {

  const {DeleteTask} = useContext(TaskContext2)
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{props.task.id}</h1>
      <p className="text-gray-500 text-sm">{props.task.title}</p>
      <h3>{props.task.description}</h3>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => DeleteTask(props.task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
