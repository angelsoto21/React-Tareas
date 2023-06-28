import { useState, useContext } from "react";
import { TaskContext2 } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { CreateTask } = useContext(TaskContext2);

  const submit = (e) => {
    e.preventDefault();
    CreateTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={submit} className="bg-neutral-700 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          autoFocus
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-500 p-3 w-full mb-2"
        />
        <textarea
          className="bg-slate-500 p-3 w-full mb-2"
          placeholder="Escribe una descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
