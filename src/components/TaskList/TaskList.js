import React /*,{useState} */ from "react";
import "./tasklist.css";
import propTypes from "prop-types";
//import plusIcon from "../../image/jljld"

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  /*
  --- ADICIONANDO CONTADOR
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
        return currentCount + 1;

  --- CRIAR UM BOTÃO PARA INCREMENTAR
      {count}
      <button onClick = {increment}>incrementar</button>
    });
  }
*/

  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.taskState}
              onTaskUpdate={onTaskUpdate}
            />
          );
        })}

        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: propTypes.string.isRequired, //OBRIGA A DECLARAR STRING
  onAddTask: propTypes.func.isRequired,
  tasks: propTypes.array.isRequired
};
