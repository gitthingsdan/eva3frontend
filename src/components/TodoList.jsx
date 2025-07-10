import React, { Fragment, useState, useRef } from "react";
// import {v4 as uuid} from 'uuid';
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  const taskRef = useRef();

  const cambiarEstadoTarea = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  const agregarTarea = () => {
    console.log("Agregando tarea...");
    const task = taskRef.current.value;
    console.log(task);
    if (task === "") return;
    setTodos((prevTodos) => {
      const newTask = {
        // id: uuid(),
        task: task,
        completed: false,
      };
      return [...prevTodos, newTask];
    });
    taskRef.current.value = null;
  };

  const cantidadTareas = () => {
    return todos.filter((todo) => !todo.completed).length;
  };
  const ResumenTarea = () => {
    const cant = cantidadTareas();
    return <p>Te quedan {cant} tareas pendientes</p>;
  };
  const eliminarTarea = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Listado de Tareas</h1>
      <div className="input-group mt-4 mb-4">
        <input
          type="text"
          ref={taskRef}
          className="form-control"
          placeholder="Ingrese una tarea"
        />
        <button onClick={agregarTarea} className="btn btn-success">
          +
        </button>
        <button onClick={eliminarTarea} className="btn btn-danger">
          -
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            cambiarEstado={cambiarEstadoTarea}
          />
        ))}
      </ul>
      <ResumenTarea />
    </Fragment>
  );
}
