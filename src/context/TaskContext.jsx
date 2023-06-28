import { createContext, useState } from "react";
import Data from "../Tasks.json";

export const TaskContext2 = createContext();

export function TaskContextProvider(props) {
    const [Tast, setTast] = useState(Data)
  
    const CreateTask = ({title,description}) => {  
      setTast([...Tast, {
            id: Tast.length + 1,
            title,
            description
        }])
    }
  
    const DeleteTask = (Taskid) => {
      setTast(Tast.filter((task) => { return (task.id !== Taskid)}))
    }

  return (
    <TaskContext2.Provider value={{
        Tast,
        CreateTask,
        DeleteTask
    }}>{props.children}</TaskContext2.Provider>
  );
}
