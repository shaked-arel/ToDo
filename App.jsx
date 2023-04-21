import { useState } from "react";
import "./style.css";
import Form from "./components/form";
import ToDolist from "./components/list";
function App() {
  const [newTask, setNewTask] = useState("");
  const [todos, setToDo] = useState([]);

  function AddToDo(newTask) {
    setToDo((currentToDo) => {
      return [
        ...currentToDo,
        { id: crypto.randomUUID(), title: newTask, completed: false },
      ];
    });
  }

  function Marktodo(id, completed) {
    setToDo((currentToDo) => {
      return currentToDo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteToDo(id) {
    setToDo((currentToDo) => {
      return currentToDo.filter((todo) => todo.id != id);
    });
  }

  return (
    <>
      <Form AddToDo={AddToDo}></Form>
      <h1>To Do List:</h1>
      <ToDolist
        todos={todos}
        deleteToDo={deleteToDo}
        Marktodo={Marktodo}
      ></ToDolist>
    </>
  );
}

export default App;
